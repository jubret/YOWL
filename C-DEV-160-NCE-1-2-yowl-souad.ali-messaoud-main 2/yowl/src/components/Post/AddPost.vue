<template>
<div class="container-fluid">
  <div class="row">
 <div class="col"></div>
        
        <div class="col-6">
  
    <div class="form">
            <div class="avatar">
                <img class="avatar" src="EnzoL.png">
            </div>
                <textarea id="post" rows="5" cols="100" placeholder="Leave your opinion..."></textarea>
                <input type="text" class="d-inline-flex" id="url" placeholder="URL of the site ...">
                <div class="postpost">
                <button type="submit" id="postpost" style="width:100px" @click="sendPostBtnClickEventHandler"><strong>Post</strong></button>
                </div>
        </div>
    
      </div>

    </div>
  </div>
</template>

<script>
import postAPI from '@/API/Post'


export default {
  name: 'PostSender',
  
  data () {
    return {
      user: this.$store.state.auth.user,
      isLogin: this.$store.getters.isLogin,
      inputContent: '',
      errorMessage: ''
    }
  },
  methods: {
    editerFocusEventHandler (e) {
      this.isEditerFocused = true
      this.contentEl = e.target

      if (e.target.innerText.trim() === e.target.getAttribute('default-txt')) {
        e.target.innerText = ''
      }
    },
    editerBlurEventHandler (e) {
      this.isEditerFocused = false

      if (!e.target.innerText.trim()) {
        e.target.innerText = e.target.getAttribute('default-txt')
      }
    },
    editerInputEventHandler (e) {
      this.inputContent = e.target.innerText.trim()
    },
    async sendPostBtnClickEventHandler (e) {
      let reg = new RegExp("\n","g");
      let res = await postAPI.SendPost({
          content: this.inputContent.replace(reg, '<br>')
        })

      if (!res.result || !res.post) {
        console.log(res)
        this.errorMessage = res.errMsg
        return
      }

      this.inputContent = ''
      this.contentEl.innerText = ''
      this.$emit('newPost', res.post)
    }
  }
}
</script>

<style>

h4{
  margin-top: 10px;
  margin-bottom: -20px;
  font-size: 18px;
}
#postpost{
  font: sans-serif;
  border-radius: 25px;
  height: 25px;
  background-color:#5271ff;
  border:none;
  color: white;
  font-size: 12px;
  transition: all .2s ease-in-out;
}
#postpost:hover{
  background-color:white;
  color: #5271ff;
  transform: scale(1.1);
}
#post{
  width: 82.5%;
  background-color: black;
  border:none;
  color: white;
}
#url{
  width: 77%;
  background-color: black;
  border:none;
  margin-bottom: 10px;
  color: white;
}
.toaccount{
  color: white;
  text-decoration:none;
}
.toaccount:hover{
  text-decoration:underline;
  color: white;
}
.avatarpost{
  margin-top: 15px;
}
.postpost{
  margin-bottom: 10px;
  margin-top: 10px;
}
.avatarpost{
  border-radius: 50%;
  height: 70px;
}
.avatar{
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 50%;
  height: 70px;
}
.col{
  background-color: black;
}
.col-6{
  background-color: black;
}
.para{
  text-align: left;
  margin-left: 50px;
  margin-right: 50px;
}
.form{
  border:solid 1px;
  border-color:rgb(51, 51, 51);
}
.post{
  border:solid 1px;
  border-color:rgb(51, 51, 51);
}
.post:hover{
  background-color:rgb(24, 24, 24);
}
.m{
    animation: flicker2 1.5s infinite alternate;
      margin-left: 50px;
      margin-top: 15px;
      margin-bottom: 20px;
      color: lightgray;
      font-size:20px;
      width: 10px;
      transition: all .2s ease-in-out;
  }
  .m:hover{
    color: #5271ff;
    filter: drop-shadow(0 0 0.1px #5271ff);
    transform: scale(1.04);
  }
  .heart{
    animation: flicker 1.5s infinite alternate;
    margin-left: 90px;
    margin-top: -50px;
    margin-bottom: 20px;
    color: lightgray;
    font-size:20px;
    width: 10px; 
    transition: all .2s ease-in-out; 
  }
  @keyframes flicker{
    
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
  
        text-shadow:
        0 0 4px red,
        0 0 11px red,
        0 0 19px white,
        0 0 40px red,
        0 0 80px red,
        0 0 90px red,
        0 0 100px red,
        0 0 150px red;
    
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
    }    
  }
  
  @keyframes flicker2{
    
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
  
        text-shadow:
        0 0 4px #5271ff,
        0 0 11px #5271ff,
        0 0 19px white,
        0 0 40px #5271ff,
        0 0 80px #5271ff,
        0 0 90px #5271ff,
        0 0 100px #5271ff,
        0 0 150px #5271ff;
    
    }
    
    20%, 24%, 55% {        
        text-shadow: none;
    }    
  }
  .heart:hover{
      color: red;
      filter: drop-shadow(0 0 1px red);
      /* transform: rotate(180deg); */
      transform: scale(1.1);
  }
</style>