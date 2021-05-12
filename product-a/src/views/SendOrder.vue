<template>
  <div id="top">
      <h1 class="center">注文を送信しました</h1>
      <h2>注文済み内容</h2>
      
  </div>
</template>

<script>
export default {
  name: 'SendOrder',
  props: {
    msg: String
  }
}
</script>
<style>
#top{
  padding-top: 100px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only 
   <style scoped lang="scss"> 
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
// </style>
-->
