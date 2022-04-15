<template>
  <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card p-4">
      <div
        class="
          image
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <button class="btn btn-secondary">
          <img src="EnzoL.png" height="100" width="100" />
        </button>
        <div class="d-flex mt-2">
          <button class="btn1 btn-dark rounded-pill" @click="followClickEventHandler">Follow</button>
          <button class="btn1 btn-dark rounded-pill">Edit Profile</button>
        </div>
        <span class="name mt-3">{{personName}}Enzo lenzi</span>
        <span class="idd">@elmatador</span>
        <div class="text mt-3">
          <span>Je suis dev, j'aime mon chien et les cannoli !<br />
          </span>
        </div>
        <div
          class="d-flex flex-row justify-content-center align-items-center mt-3"
        >
          <span class="number">1069{{followerCount}} <span class="follow">Followers</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personInfo from '@/API/Person/info'
import UserAction from '@/API/User/Action'
import $ from 'jquery'


export default {
  name: 'UserHome',
  components: {
   
  },
  data () {
    return {
      personAccount: null,
      person: null,
      isFollowing: this.following,
      followingBtnTxt: 'follow',
      
    }
  },
  
  computed: {
  isLoginedUser: function () {
      return this.personAccount === this.$store.getters.userAccount
    },
    postsCount: function () {
      return this.person ? this.person.posts.length : 0
    },
    followingCount: function () {
      return this.person ? this.person.following.length : 0
    },
    followerCount: function () {
      return this.person ? this.person.follower.length : 0
    },
    personName: function () {
      return this.person ? this.person.name : ''
    },
    personID: function () {
      return this.person ? this.person._id : null
    },
    personImg: function () {
      return this.person ? this.person.profileImg : ''
    },
    
  },
  
  created () {
    this.initUserID()
    window.addEventListener('scroll', this.windowScrollEventHandler)
  },
  watch: {
    '$route.params.PersonAccount': 'initUserID',
    following: function () {
      this.isFollowing = this.following
    }
  },
  methods: {
    async initUserID () {
      this.personAccount = this.$route.params.PersonAccount

      let res = await personInfo.GetPersonBasicInfo(this.personAccount)

      if (!res.result) {
        this.errorMessage = res.errMsg
        document.title = 'Twitter Clone'
        return
      }

      this.person = res.person
      this.isFollowing = res.isFollowing
      document.title = `${this.person.name} (@${this.person.account})`
    },
    windowScrollEventHandler (e) {
      this.needPersonalWallFix = $(window).scrollTop() > 300
    },
  
async followClickEventHandler (e) {
      if (!this.$store.getters.isLogin) {
        this.$router.push('/login')
      } else if (this.isLoginedUser) {
        return
      }

      let res = await UserAction.follow(this.userId)

      if (!res.result) {
        this.errorMessage = res.errMsg
        return
      }

      this.isFollowing = true
      this.followingBtnTxt = 'followed'
    },
    async backFollowClickEventHandler (e) {
      if (!this.$store.getters.isLogin) {
        this.$router.push('/login')
      } else if (this.isLoginedUser) {
        return
      }

      let res = await UserAction.deleteFollow(this.userId)

      if (!res.result) {
        this.errorMessage = res.errMsg
        return
      }

      this.isFollowing = false
      this.followingBtnTxt = 'follow'
    },
    backFollowMouseEnterEventHandler (e) {
      this.isFollowing && (this.followingBtnTxt = 'unfollow')
    },
    backFollowMouseLeaveEventHandler (e) {
      this.isFollowing &&  (this.followingBtnTxt = 'followed')
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #000;
}

.card {
  width: 350px;
  background-color: #000000;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
}

.image img {
  transition: all 0.5s;
}

.image img:hover{
  transform: scale(1.5);
}

.btn {
  height: 140px;
  width: 140px;
  border-radius: 50%;
}

.name {
  font-size: 22px;
  font-weight: bold;
}

.idd {
  font-size: 14px;
  font-weight: 600;
}

.idd1 {
  font-size: 12px;
}

.number {
  font-size: 22px;
  font-weight: bold;
}

.follow {
  font-size: 12px;
  font-weight: 500;
  color: #5271ff;
}

.btn1 {
  height: 40px;
  width: 150px;
  background-color: #5271ff;
  color: #ffffff;
  font-size: 15px;
  transition: all .2s ease-in-out;
}

.btn1:hover {
  background-color: white;
  color:#5271ff;
  transform: scale(1.1);
}

.btn1:active{
  background-color: #5271ff;
  color: white;
}
.text span {
  font-size: 13px;
  color: #ffffff;
  font-weight: 500;
}

.icons i {
  font-size: 19px;
}

hr .new1 {
  border: 1px solid;
}

.date {
  background-color: rgb(255, 255, 255);
}

</style>