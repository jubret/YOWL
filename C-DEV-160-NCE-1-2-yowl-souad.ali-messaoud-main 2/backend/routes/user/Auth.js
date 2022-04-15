const express = require('express')
const UserModel = require('../../models/user.model')
const _ = require('lodash')

const router = express.Router()

// User authentication, response user object when the token is valid,
router.get('/', async (req, res) => {
  if (!req.user) {
    return res.json({
      result: false,
      errMsg: 'auth error'
    })
  }

  // Set new token
  let token = await req.user.setAuthToken(req.headers['x-auth'])
  let user = _.omit(req.user.toObject(), [
    'password',
    'tokens'
  ])
  res.header('x-auth', token)
    .json({
      result: true,
      user
    })
})

// User register
router.post('/', async (req, res) => {
  let userBuf = _.pick(req.body, ['name', 'account', 'password'])
  let passwordConfirmed = req.body.password2

  // verify the two password is same
  if (userBuf.password !== passwordConfirmed) {
    return res.json({
      result: false,
      errMsg: 'passwords do not match'
    })
  }

  let user = new UserModel(userBuf)

  try {
    await user.save()

    let token = await user.setAuthToken()
    res.header('x-auth', token)
      .json({
        result: true,
        user
      })
  } catch (err) {
    let errMsg

    // custom err msg from mongoose err code
    if (err.code === 11000) {
      errMsg = 'this account exisits already'
    } else if (err.errors && err.errors.password) {
      errMsg = err.errors.password.message
    } else {
      errMsg = 'the field must be filled2'
    }

    res.json({
      result: false,
      errMsg,
      err
    })
  }
})

// User login
router.post('/login', async (req, res) => {
  let body = _.pick(req.body, ['account', 'password'])

  try {
    let user = await UserModel.findByCredentials(body.account, body.password)
    let token = await user.setAuthToken()

    res.header('x-auth', token)
      .json({
        result: true,
        user
      })
  } catch (err) {
    res.json({
      result: false,
      errMsg: 'wrong username or password',
      err
    })
  }
})

module.exports = router
