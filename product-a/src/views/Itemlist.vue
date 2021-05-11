<template>
  <div class="itemlist">

    <ul>
        <li v-for="(item,index) in items" :key=index>
        <img id="picture" :src="item.imagePath" @click="$router.push({name:'ItemDescription',params:{list_id:item.id}})">
        <p @click="$router.push({name:'ItemDescription',params:{list_id:item.id}})">{{item.name}}</p> 
        <p>{{item.price}}円</p> 
        </li>
    </ul>
  </div>
</template>



<style>
#picture{
  width: 100px;
  height: 150px;
}
#block{
    word-break: break-all;
    width: 33%;
    display: inline-block;
    flex-wrap: wrap;
    justify-content: center;
    text-align: start;
    margin-top: 0%;
    padding-top: 0%;
    vertical-align: top;

}
</style>
<script>
// @ is an alias to /src
import {mapState} from "vuex"
//import Desc from '@/views/ItemDescription.vue'

export default {
  name: 'Itemlist',
  
  components: {
    
  },
  computed:{
        ...mapState(["items"])
    },
  methods:{
  }  
  }  

</script>
