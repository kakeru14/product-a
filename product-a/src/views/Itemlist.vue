<template>

  <div class="itemlist">

    
    <input type="text" placeholder="商品を検索する" v-model="value">
    <button type="button" @click="search">検索</button>
    <button type="button" @click="reset">クリア</button>

    <ul>
      <li class="block" v-for="(res,index) in result" :key="index">
        <p class="pic"><img class="picture" :src="res.imagePath" @click="$router.push({name:'ItemDescription',params:{list_id:res.id}})"></p>
        <p @click="$router.push({name:'ItemDescription',params:{list_id:res.id}})">{{res.name}}</p> 
        <p>{{res.price}}円</p> 
      </li>
    </ul>

    <ul>
        <li class="block" v-for="(item,index) in items" :key="index">
        <p class="pic"><img class="picture" :src="item.imagePath" @click="$router.push({name:'ItemDescription',params:{list_id:item.id}})"></p>
        <p @click="$router.push({name:'ItemDescription',params:{list_id:item.id}})">{{item.name}}</p> 
        <p>{{item.price}}円</p> 
        </li>
    </ul>
  </div>

</template>



<style>
.pic{
  text-align: center;
}
.picture{
  width: 100px;
  height: 150px;
}

.block{
    word-break: break-all;
    width: 30%;
    display: inline-block;
    flex-wrap: wrap;
    justify-content: center;
    text-align: start;
    margin-top: 0%;
    padding-top: 0%;
    vertical-align: top;
    border-style: ridge;
    height: 300px;
}
.itemlist{
  padding-top: 100px;
}
</style>
<script>
// @ is an alias to /src

import {mapState} from "vuex"
//import Desc from '@/views/ItemDescription.vue'

export default {
  name: 'Itemlist',
  data(){
    return{
      value:'',
      result:[]
    }
  },
  
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
  methods:{
    search(){
      this.result=[]
      this.items.forEach(e=>{
                if(e.name.indexOf(this.value)!==-1){
                    this.result.push(e)
                }
            })
    },
    reset(){
      this.value=''
    }
  }  
  }  


</script>
