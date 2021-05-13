<template>
  <div class="home">
    <button @click="login">ログイン</button>
    <h1>ログインしてください</h1>
  </div>
</template>
<style scoped>
h1{
  text-align: center;
  padding-top: 100px;
}
</style>

<script>
// @ is an alias to /src
import {mapActions} from "vuex"

export default {
  name: 'Home',
  methods:{
      ...mapActions(["login"])
    }
}
</script>
