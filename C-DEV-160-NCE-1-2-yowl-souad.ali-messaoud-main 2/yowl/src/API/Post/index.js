import axios from 'axios'

import store from '@/store'

async function SendPost (request) {
  let res;

  try {
    res = await axios({
      method: 'POST',
      url: `http://localhost:3002/API/post/`,
      data: request,
      headers: {
        'x-auth': store.getters.authToken
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

async function ToggleLike (postId) {
  let res;

  try {
    res = await axios({
      method: 'GET',
      url: `http://localhost:3002/API/post/${postId}/like`,
      headers: {
        'x-auth': store.getters.authToken
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

async function GetDetailPostInfo (postId) {
  let res;

  try {
    res = await axios({
      method: 'GET',
      url: `http://localhost:3002/API/post/${postId}`,
      headers: {
        'x-auth': store.getters.authToken
      }
    })
  } catch (e) {
    return {
      result: false,
      errMsg: 'conecction failed'
    }
  }

  return res.data
}

export default {
  SendPost,
  ToggleLike,
  GetDetailPostInfo
}
