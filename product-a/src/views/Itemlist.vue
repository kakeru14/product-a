<template>
<div>
  <div class="itemlist" id="block">
      <!-- <table border=1>
        <tr id="block" v-for="(item,index) in items" :key=index>
        <img id="picture" :src="item.imagePath" @click="$router.push({name:'ItemDescription'})">
          <p @click="$router.push({name:'ItemDescription'})">{{item.name}}</p>
          {{item.price}}円(税抜)
        </tr>
        </table> -->

    <div class="item" v-for="(item,index) in items" :key=index>
        <img id="picture" :src="item.imagePath" @click="$router.push({name:'ItemDescription'})">
          <p id="itemName" @click="$router.push({name:'ItemDescription'})">{{item.name}}</p>
          {{item.price}}円(税抜)
    </div>
    </div>
    <div>
      商品名
      <form action="" @submit.prevent="search">
      <input type="text" v-model="keyword">
      <br>
      <button type="submit">検索</button>
      <button @click="del">クリア</button>
      </form>
      </div>
</div>
</template>

<style>
#picture{
  width: 100px;
  height: 150px;
}
#block{
width: 60%;
display: flex;
justify-content:center;
flex-wrap: wrap;
margin-left: auto;
margin-right: auto;
background-color: #CCFFFF;

}

.item{
  width: 30%;
  text-align: center;
  border-top: solid 3px white ;
  padding: 10px;
  
}
#itemName{
text-decoration: underline;
}
</style>
<script>
// @ is an alias to /src
import {mapActions, mapState} from "vuex"


export default {
  name: 'Itemlist',
  components: {

  },
  data(){
    return{
    keyword:""
    }
  },
  methods:{
    ...mapActions(["search"]),
  
    del(){
      this.keyword=""
    }
  },
  computed:{
        ...mapState(["items"])
    },
       
  }  
  

</script>
