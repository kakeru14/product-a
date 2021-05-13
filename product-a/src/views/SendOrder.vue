<template>
  <div id="top">
      <h1 class="center">注文を送信しました</h1>
      <p><button @click="$router.push({name:'Itemlist'})">商品一覧に戻る</button></p>


      
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
