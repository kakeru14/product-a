<template>

<div class="itemdescription">
  <br>
  <br>
  <br>
  <br>
  <br>


  <h2>{{target.name}}</h2>
  <p><img id="pic" :src="'../'+target.imagePath"></p>
  <p>{{target.description}}</p>
  <p>1個：{{target.price}}円</p>
  <p id="red">数量を選択してください</p>
  <select v-model.number="selected">
<option value="1">   1   </option>
<option value="2">   2   </option>
<option value="3">   3   </option>
<option value="4">   4   </option>
<option value="5">   5   </option>
<option value="6">   6   </option>
<option value="7">   7   </option>
<option value="8">   8   </option>
<option value="9">   9   </option>
<option value="10">   10   </option>
</select><br>

<h2>小計：{{target.price*selected}}円（税抜）</h2>

<button id="inbutton" :disabled="!selected" type="submit" @click="kakunin({id:target.id,ko:selected})">カートに入れる</button>
</div>
</template>
<style scoped>
.itemdescription{
  text-align: center;
  display: inline-block;
  width: 60%;
  margin: 0 auto;
  padding-left:20% ;
}
#red{
  color: red;
}
#pic{
  text-align: center;
  width: 500px;
  height: 500px;
}
#inbutton{
  margin-bottom: 100px;
}
</style>
<script>
// @ is an alias to /src
import {mapActions, mapState} from "vuex"
//import List from '@/views/Itemlist.vue'

export default {
  // name: 'ItemDescription',
  data(){
    return{
      target:{},
      selected:''
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

      kakunin({id,ko}){
        if(confirm('カートに追加してもよろしいですか？')){
          this.inCart({id:id,ko:ko})
        }
      },

      ...mapActions(["inCart"])
    },
     computed:{
       ...mapState(["items"])
    }
    }      
      

</script>