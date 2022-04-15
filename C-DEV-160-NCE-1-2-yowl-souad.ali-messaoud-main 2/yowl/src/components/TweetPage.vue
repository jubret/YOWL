<template>
         <div class="col"></div>
        
        <div class="col-6">
    <section>

        <div class="post">
            <div class="container">
                <img src="EnzoL.png" class="avatarpost">
                <a class="toaccount" href="/account"><h4>Enzolebgdu06</h4></a>
            </div>
            <div class="message"><br><br>
                <p id="avis" class="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <br>
                <a class="link" href="/tweet">URL</a>
                <div class="heart">
                    <i class="bi bi-heart" style="color: white"></i>
                </div>
            </div>

        </div>
          <!-- <div class="post">
            <div class="container">
                <img src="favicon.ico" class="avatarpost">
                <a class="toaccount" href="/account"><h5>Ton Père</h5></a>
            </div>
            <div class="message"><br><br>
                <p id="avis" class="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <br>
                <a class="link" href="/tweet">URL</a>
                <div class="heart">
                    <i class="bi bi-heart" style="color: white"></i>
                </div>
            </div>
        </div> -->

    </section>
</div>

        <div class="col">
        </div>
    <section>

        
    <div class="container">
        <div class="row">
        <div class="col-sm-5 col-md-6 col-12 pb-4">
                <h1>Comments</h1>
                <div class="comment mt-4 text-justify float-left"> <img src="favicon.ico" alt="" class="rounded-circle" width="40" height="40">
                <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
            </div>
            <div class="text-justify darker mt-4 float-right"> <img src="favicon.ico" alt="" class="rounded-circle" width="40" height="40">
                <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
            </div>
            <div class="comment mt-4 text-justify"> <img src="favicon.ico" alt="" class="rounded-circle" width="40" height="40">
                <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
            </div>
            <div class="darker mt-4 text-justify"> <img src="favicon.ico" alt="" class="rounded-circle" width="40" height="40">
                <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
            </div>
        </div>
            <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form">
                    <div class="form-group">
                        <h4>Leave a comment</h4> 
                        <label for="Comment">Comment</label> 
                        <textarea name="comment" id="comment" msg cols="30" rows="5" class="form-control" style="background-color: rgb(0, 0, 0); color:#fff;"></textarea>
                    </div>
                    <!-- <div class="form-group"> 
                        <label for="pseudo">Pseudo</label> 
                        <input type="text" name="pseudo" id="pseudo" class="form-control" style="background-color: rgb(0, 0, 0); color:#fff;"> 
                    </div>
                    <div class="form-group"> 
                        <label for="email">Email</label> 
                        <input type="email" name="email" id="email" class="form-control" style="background-color: rgb(0, 0, 0); color:#fff;" > 
                    </div>
                    <div class="form-group">
                        <p class="text-secondary">If you have a <a href="#" class="alert-link">gravatar account</a> your address will be used to display your profile picture.</p>
                    </div> -->
                    <div class="form-group"> <button type="submit" id="post" class="btn">Post Comment</button> </div>
                </form>
            </div>
        </div>
    </div>
    </section>
</template>
   
<script>
import axios from 'axios'
export default {
    name: 'TweetView',
    data() {
        return {
            posts: [],
            errorMsg:'',
        }
    },
    methods: {
    getPosts() {
            axios.get('http://localhost:3002/API/post/')
            .then((response) => {
                console.log(response.data)
                this.posts = response.data.posts
            })
            .catch((error) => {
                console.log(error)
                this.errorMsg = 'accès refusé à la BDD'
            })
        },
    createPost() {
            axios.post('http://localhost:3002/API/post/', this.formData)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
    },
    remove(post) {
        axios.delete(`http://localhost:3002/API/post/${post}`)
        this.posts.splice(post.id);
    },
    updatePosts(post) {
        this.$router.push({name: 'update', params: {id: post }});
    },  
    created() {
        this.$store.dispatch('getPosts');
    },
},
}

</script>

<style scoped>

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
  display:flex;
  background-color: black;
  margin: 0 auto;
  margin-bottom: 15px;
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
  padding-bottom: 10px;
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
.loading {
    text-align: center;
    width: 100%;
    margin: 10px;
}
.navbar-nav {
    width: 100%
}

@media(min-width:568px) {
    .end {
        margin-left: auto
    }
}

@media(max-width:768px) {
    #post {
        width: 100%
    }
}


#clicked {
    padding-top: 1px;
    padding-bottom: 1px;
    text-align: center;
    width: 100%;
    background-color: #ecb21f;
    border-color: #a88734 #9c7e31 #846a29;
    color: black;
    border-width: 1px;
    border-style: solid;
    border-radius: 13px
}

#profile {
    background-color: unset
}

#post {
    margin: 15px;
    padding-top: 1px;
    padding-bottom: 1px;
    text-align: center;
    background-color: #5271ff;
    color: white;
    border-radius: 20px;
    width: 50%;
    transition: all .2s ease-in-out;
    font-size:16px;
}

#post:hover{
    transform: scale(1.1);
    background-color: white;
    color:#5271ff;
}

#post:active{
  background-color: #5271ff;
  color: white;
}

body {
    background-color: black
}

#nav-items li a,
#profile {
    text-decoration: none;
    color: rgb(224, 219, 219);
    background-color: black
}

.comments {
    margin-top: 5%;
    margin-left: 20px;
}

.darker {
    border: 1px solid  #5271ff;
    background-color: black;
    float: right;
    border-radius: 5px;
    padding-left: 40px;
    padding-right: 30px;
    padding-top: 10px
}

.comment {
    border: 1px solid  #5271ff;
    background-color:  black;
    float: left;
    border-radius: 5px;
    padding-left: 40px;
    padding-right: 30px;
    padding-top: 10px
}

.comment h4,
.comment span,
.darker h4,
.darker span {
    display: inline
}

.comment p,
.comment span,
.darker p,
.darker span {
    color: rgb(255, 255, 255)
}

h1,h4 {
    color: white;
    font-weight: bold;
    text-align: center;
}

h4{
    margin-bottom:5px;
}


label {
    color: rgb(212, 208, 208)
}

#align-form {
    margin-top: 20px
}

.form-group p a {
    color: white
}

#checkbx {
    background-color: black
}

#darker img {
    margin-right: 15px;
    position: static
}

.form-group input,
.form-group textarea {
    background-color: black;
    border: 1px solid  rgb(51, 51, 51);
    border-radius: 12px;
}

form {
    border: 1px solid  rgb(51, 51, 51);
    background-color: rgba(0, 0, 0, 0.884);
    border-radius: 5px;
    padding: 20px;
}
.deBase{
    width: 60%;
    text-align: center;
    margin: auto;
    border: 5px solid #FFFF00;
    padding: 10px;
}
.test{
    margin: auto;

}

</style>