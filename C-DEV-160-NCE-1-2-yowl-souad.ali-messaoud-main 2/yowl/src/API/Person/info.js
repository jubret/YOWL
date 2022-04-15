import axios from 'axios'

import store from '@/store'

async function GetPersonBasicInfo (personId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        methods: 'get',
        url: `http://localhost:3002/API/person/${personId}`,
        headers: {
          'x-auth': token
        }
      })
  } catch (e) {
    return {
      result: false,
      errMsg: 'connection failed'
    }
  }

  return res.data
}

async function GetPersonFollowingInfo (personId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        methods: 'get',
        url: `http://localhost:3002/API/person/${personId}/following`,
        headers: {
          'x-auth': token
        }
      })
  } catch (e) {
    return {
      result: false,
      errMsg: 'connection failed'
    }
  }

  return res.data
}

async function GetPersonFollowerInfo (personId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        methods: 'get',
        url: `http://localhost:3002/API/person/${personId}/follower`,
        headers: {
          'x-auth': token
        }
      })
  } catch (e) {
    return {
      result: false,
      errMsg: 'connect failed'
    }
  }

  return res.data
}

async function GetPersonPosts (personId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
      method: 'GET',
      url: `http://localhost:3002/API/person/${personId}/posts`,
      headers: {
        'x-auth': token
      }
    })
  } catch (e) {
    return {
      result: false,
      errMsg: 'connection fail'
    }
  }

  return res.data
}

export default {
  GetPersonBasicInfo,
  GetPersonFollowingInfo,
  GetPersonFollowerInfo,
  GetPersonPosts
}
