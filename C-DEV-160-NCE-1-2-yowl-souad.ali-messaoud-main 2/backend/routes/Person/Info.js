const express = require('express')
const UserModel = require('../../models/user.model')

const router = express.Router()

// basic infos user
router.get('/:account', async (req, res) => {
  let personAccount = req.params.account
  let person = await UserModel.findOne({
    account: personAccount
  })

  if (!person) {
    return res.json({
      result: false,
      errMsg: 'no user'
    })
  }

  let isFollowing = false
  if (req.user) {
    isFollowing = !!req.user.following.find(val => val.toString() === person._id.toString())
  }

  res.json({
    result: true,
    person,
    isFollowing
  })
})

// followers
router.get('/:account/following', async (req, res) => {
  let personAccount = req.params.account
  let person = await UserModel.findOne({
    account: personAccount
  })

  if (!person) {
    return res.json({
      result: false,
      errMsg: 'no user'
    })
  }

  let opt = {
    path: 'following',
    select: ['_id', 'account', 'name', 'profileImg']
  }
  let populatedPerson = await person.populate(opt).execPopulate()
  let following = populatedPerson.following

  // 
  if (req.user) {
    following = following.map(item => {
      let _item = item.toObject()
      let isFollowing = !!req.user.following.find(val => val.toString() === _item._id.toString())
      _item.isFollowing = isFollowing

      return _item
    })
  }

  res.json({
    result: true,
    following
  })
})

// other users followed by user
router.get('/:account/follower', async (req, res) => {
  let personAccount = req.params.account
  let person = await UserModel.findOne({
    account: personAccount
  })

  if (!person) {
    return res.json({
      result: false,
      errMsg: 'no user'
    })
  }

  let opt = {
    path: 'follower',
    select: ['_id', 'account', 'name', 'profileImg']
  }
  let populatedPerson = await person.populate(opt).execPopulate()
  let follower = populatedPerson.follower

  // show if followed
  if (req.user) {
    follower = follower.map(item => {
      let _item = item.toObject()
      let isFollowing = !!req.user.following.find(val => val.toString() === _item._id.toString())
      _item.isFollowing = isFollowing

      return _item
    })
  }

  res.json({
    result: true,
    follower
  })
})

// specific posts
router.get('/:account/posts', async (req, res) => {
  try {
    let opt = {
      path: 'posts',
      options: {
        sort: {
          created: -1
        }
      },
      populate: {
        path: 'author',
        select: ['_id', 'account', 'name', 'profileImg']
      }
    }
    let user = await UserModel.findOne({
      account: req.params.account
    })
    let populatedUser = await user.populate(opt).execPopulate()

    res.json({
      result: true,
      posts: populatedUser.posts
    })
  } catch (e) {
    res.json({
      result: false,
      errMsg: 'no user',
      err: e
    })
  }
})

module.exports = router
