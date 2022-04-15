import axios from 'axios'

import store from '@/store'

async function follow (userId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        methods: 'get',
        url: `http://localhost:3002/API/user/follow/${userId}`,
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

async function deleteFollow (userId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        method: 'DELETE',
        url: `http://localhost:3002/API/user/follow/${userId}`,
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

export default {
  follow,
  deleteFollow
}
