<template>

<AddPostComponent />

<PostsBoxComponent :posts="posts" detailPostRouteName ="UserDetailPostInfo" />

      
        
<<<<<<< HEAD
        <div class="col-6">

    <section>

        <div class="form">
            <div class="avatar">
                <img class="avatar" src="EnzoL.png">
            </div>
                <textarea id="post" rows="3" cols="100" placeholder="Leave your opinion..."></textarea>
                <input type="text" class="d-inline-flex" id="url" placeholder="URL of the site ...">
                <div class="postpost">
                <button type="submit" id="postpost" style="width:100px"><strong>Post</strong></button>
                </div>
        </div>

    </section>


    <section>

    <div class="post">
            <div class="container">
                <img src="EnzoL.png" class="avatarpost">
                <a class="toaccount" href="/account"><h4>Enzolebgdu06</h4></a>
            </div>
            <div class="message"><br><br>
                <p id="avis" class="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <!-- <img src="imagetest.png" class="image"> -->
                <br>
                <a class="link" href="#">https://twitter.com/home</a>
                <div class="m">        
                    <a class="bi bi-chat-left" href="/tweet" style="color: white"></a>
                </div>
                <div class="heart">
                    <i class="bi bi-heart" style="color: white"></i>
                </div>
            </div>
        </div>


        <div class="post">
            <div class="container">
                <img src="EnzoL.png" class="avatarpost">
                <a class="toaccount" href="/account"><h4>Enzolebgdu06</h4></a>
            </div>
            <div class="message"><br><br>
                <p id="avis" class="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <!-- <img src="imagetest.png" class="image"> -->
                <br>
                <a class="link" href="#">https://twitter.com/home</a>
                <div class="m">        
                    <a class="bi bi-chat-left" href="/tweet" style="color: white"></a>
                </div>
                <div class="heart">
                    <i class="bi bi-heart" style="color: white"></i>
                </div>
            </div>
        </div>



        <div class="post">
            <div class="container">
                <img src="EnzoL.png" class="avatarpost">
                <a class="toaccount" href="/account"><h4>Enzolebgdu06</h4></a>
            </div>
            <div class="message"><br><br>
                <p id="avis" class="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <!-- <img src="imagetest.png" class="image"> -->
                <br>
                <a class="link" href="#">https://twitter.com/home</a>
                <div class="m">        
                    <a class="bi bi-chat-left" href="/tweet" style="color: white"></a>
                </div>
                <div class="heart">
                    <i class="bi bi-heart" style="color: white"></i>
                </div>
            </div>
        </div>

    </section>
        </div>

        <div class="col">
        </div>

</div>
</div>
=======
>>>>>>> Souad3
</template>

<script>
import UserInfoAPI from '@/API/User/Info'
import AddPostComponent from '@/components/Post/AddPost'
import PostsBoxComponent from '@/components/Post/PostsBox'

export default {
name: 'Homepage',
  components: {
    AddPostComponent,
    PostsBoxComponent,
  
  },
  data () {
    return {
      user: null,
      posts: [],
      userLoaded: true,
      postLoaded: false,
      errorMessage: ''
    }
  },
  computed: {
    userName: function () {
      return this.user ? this.user.name : ''
    },
    userAccount: function () {
      return this.user ? this.user.account : ''
    },
    userPostsCount: function () {
      return this.user ? this.user.posts.length : 0
    },
  },
  created () {
    this.getUserInfo()
    this.getPosts()
  },
  methods: {
    getUserInfo: async function () {
      this.userLoaded = false
      this.user = null

      let res = await UserInfoAPI.getBasicInfo()
      this.userLoaded = false

      if (!res.result) {
        console.log(res)
        return
      }

      this.user = res.user
      document.title = `${this.user.name} (@${this.user.account})`
    },
    getPosts: async function () {
      this.postLoaded = false
      this.posts = []

      let res = await UserInfoAPI.getPosts()
      this.postLoaded = true

      if (!res.result) {
        this.errorMessage = res.errMsg
        return
      }

      this.posts = res.posts
    },
    newPostEventHandler (newPost) {
      this.posts.unshift(newPost)
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

#postpost:active{
  background-color: #5271ff;
  color: white;
}
#post{
  width: 82.5%;
  background-color: black;
  border:none;
  color: white;
  border-radius: 3px;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
}

#post:focus{
  outline: none;
}


#url{
  width: 82.5%;
  background-color: black;
  border:none;
  margin-bottom: 10px;
  color: white;
  border-radius: 3px;
  font-size: 15px;
}

#url:focus{
  outline: none;
}

.link{
  text-decoration: none;
  border: solid 1px;
  border-color:#5271ff;
  background-color:black;
  color: #5271ff;
  border-radius: 5px;
  padding: 3px;
  max-width: 500px !important;
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