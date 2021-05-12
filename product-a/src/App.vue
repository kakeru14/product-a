<template>
<div>
<header class="site-header">
<div class="header-left">
<img src="../src/assets/header_logo.png" alt="" class="rakuraku-toy">
</div>
<div id="nav">
<router-link to="/cart" class="router-item">ショッピングカート</router-link>
<router-link to="/OrderConfirm" class="router-item">注文履歴</router-link>
<router-link to="/itemlist">アイテムリスト</router-link>
<button v-show="!$store.state.login_user" @click="login">ログイン</button>
<!-- <router-link to="/Home" class="router-item">ログイン</router-link> -->
<button v-show="$store.state.login_user" @click="logout">ログアウト</button>
<!-- <router-link to="/Home" class="router-item">ログアウト</router-link> -->
<span v-show="$store.state.login_user">{{ userName }}</span>
</div>
</header>
<router-view/>
</div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
import firebase from "firebase"
export default {
  name: 'App',
  methods:{
      ...mapActions(["login","logout","setLoginUser","deleteLoginUser"])
    },
    created(){
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.setLoginUser(user)
          if(this.$router.currentRoute.name ==="Home"){
            this.$router.push({name:"Itemlist"});
          }
        }else{
          this.deleteLoginUser()
          this.$router.push({name:"Home"});
        }
      })
      
    },
    computed:{
      ...mapGetters(["userName"])
    }
}
</script>

<style lang="css">
a {
  text-decoration: none;
  color: #283434;
  cursor:pointer;
}

a:hover {
  text-decoration: underline;
}

#nav {
  padding-top: 10px;
}

.router-item {
  padding: 0px 5px 0px 5px;
}

.site-header{
  background: #FCF7EB;
  display: flex;
  padding: 10px 30px;
  position: fixed;
  justify-content: space-between;
  width: 94%;
  z-index: 10;
  margin: 0 auto;
}

.rakuraku-toy{
  width: 150px;
  height: auto
}

</style>