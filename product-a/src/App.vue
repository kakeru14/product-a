<template>
<<<<<<< HEAD
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/OrderConfirm">注文確認画面</router-link>
      <router-link to="/itemlist">アイテムリスト</router-link>
    </div>
    <router-view/>
  </div>
=======

<div>
<header class="site-header">
<div class="header-left">
<img src="../src/assets/header_logo.png" alt="" class="rakuraku-toy">
</div>
<div id="nav">
<router-link to="/cart" class="router-item">ショッピングカート</router-link>
<router-link to="/OrderConfirm" class="router-item">注文履歴</router-link>
<router-link to="/Home" class="router-item">ログイン</router-link>
<router-link to="/Home" class="router-item">ログアウト</router-link>
</div>
</header>
<router-view/>
</div>

>>>>>>> 6d9f13a69c6368f480dad41f2bc852ca132e872e
</template>

<script>
export default {
  name: 'App',
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