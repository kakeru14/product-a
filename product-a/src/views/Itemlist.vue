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

<style scoped>
#picture{
    width: 150px;
    height: 200px;
}
li{
  padding-top: 100px;
  margin: 3px auto;
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
