<template>
  <div class="tweet">
  <TweetPage/>
   </div>
</template>

<script>
// @ is an alias to /src
import TweetPage from '@/components/TweetPage.vue'

export default {
  name: 'TweetView',
  components: {
    TweetPage,
  }
}
</script>

<style scoped>
.tweet{
  background-color: black;
}
</style>