<template>
  <div class="itemlist">
    <!-- <ol>
        <li v-for="(item,index) in items" :key=index>
        <img id="picture" :src="item.imagePath" @click="$router.push({name:'ItemDescription'})">
        <p @click="$router.push({name:'ItemDescription'})">{{item.name}}</p> 
        <p>{{item.price}}</p> 
        <p>{{item.id}}</p> 

        
        </li>
    </ol> -->

    <table border=1>
      <tr id="block" v-for="(item,index) in items" :key=index>
       <img id="picture" :src="item.imagePath" @click="$router.push({name:'ItemDescription'})">
        <p @click="$router.push({name:'ItemDescription'})">{{item.name}}</p>
        {{item.price}}円(税抜)
      </tr>
      </table>
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


export default {
  name: 'Itemlist',
  components: {
    
  },
  computed:{
        ...mapState(["items"])
    }
  }  

</script>
