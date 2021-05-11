<template>
  <div>
  
  </div>

</template>
<style scoped>

</style>
<script>
// @ is an alias to /src
import {mapState} from "vuex"
//import List from '@/views/Itemlist.vue'

export default {
  name: 'ItemDescription',
  data(){
    return{
      target:{},
    }
  },
  created(){
    const targetItem = this.$store.getters.getItemById(this.$route.params.list_id);
    this.target = targetItem
    console.log(this.target)
  },
  components: {
    },
    methods:{
       inCart(item){
            item.status=1
        }
    },
     computed:{
       ...mapState(["items"])
    }
    }      
      

</script>