<template>
  <div class="itemlist">

    <!-- <ol>
        <li v-for="(item,index) in items" :key=index>
        <img :src="item.imagePath" @click="$router.push({name:'ItemDescription'})">
        <p @click="$router.push({name:'ItemDescription'})">{{item.name}}</p> 
        <p>{{item.price}}</p> 
        <p>{{item.id}}</p> 

        
        </li>
    </ol> -->
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from "vuex"


export default {
  name: 'Itemlist',
  components: {
    
  },
  computed:{
        ...mapState(["items"])
    }
  }  

</script>
