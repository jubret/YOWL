const express = require('express')
const UserModel = require('../../models/post.model')

const router = express.Router()

// follow other person
router.get('/follow/:UserAccount', async (req, res) => {
  if (!req.user) {
    return res.json({
      result: false,
      errMsg: 'user not registred'
    })
  }

  try {
    let targetUser = await UserModel.findOne({account: req.params.UserAccount})
    if (!targetUser) {
      throw new Error('impossible to follow unknown users')
    }

    let user = req.user
    if (user.following.find(val => val.toString() === targetUser._id.toString())) {
      throw new Error('this user is followed')
    } else if (user._id.toString() === targetUser._id.toString()) {
      throw new Error('u cant follow yourself')
    }

    let userPromise = user.update({
      $push: {
        following: targetUser._id
      }
    })

    let targetUserPromise = targetUser.update({
      $push: {
        follower: user._id
      }
    })

    await Promise.all([userPromise, targetUserPromise])

    return res.json({
      result: true
    })
  } catch (e) {
    return res.json({
      result: false,
      errMsg: e.message || 'see error msgs',
      err: e
    })
  }
})

// delete follow someone
router.delete('/follow/:UserAccount', async (req, res) => {
  if (!req.user) {
    return res.json({
      result: false,
      errMsg: 'user not registred'
    })
  }

  try {
    let targetUser = await UserModel.findOne({account: req.params.UserAccount})
    if (!targetUser) {
      throw new Error('no user found')
    }

    let user = req.user
    if (!user.following.find(val => val.toString() === targetUser._id.toString())) {
      throw new Error('this user is not followed')
    }

    let userPromise = user.update({
      $pull: {
        following: targetUser._id
      }
    })

    let targetUserPromise = targetUser.update({
      $pull: {
        follower: user._id
      }
    })

    await Promise.all([userPromise, targetUserPromise])

    return res.json({
      result: true
    })
  } catch (e) {
    return res.json({
      result: false,
      errMsg: e.message || 'see msgs err',
      err: e
    })
  }
})

module.exports = router
