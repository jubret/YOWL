import axios from 'axios'

import store from '@/store'

async function SendCommentToPost (postId, request) {
  let res;
  let token = store.getters.authToken

  try {
    res = await axios({
      method: 'POST',
      url: `http://localhost:3002/API/comment/post/${postId}`,
      data: request,
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
  SendCommentToPost
}
