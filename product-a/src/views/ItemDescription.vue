<template>
  <div class="itemdescription">
     <ul>
         <li v-for="(item,index) in items" :key="index">
             <!-- <p>{{item.index.name}}</p> -->

         </li>
     </ul>
     
      <!-- <img :src="items.imagePath">
      
          <h2>商品詳細</h2>
          <h3>{{items.name}}</h3>
          
          <h4>items.description</h4>
       -->

  数量:<br>
  数量を選択してください<br>
  <form action="//www-creators.com/rsc/receiver.php" method="post">
  <select name ="pull-down"><br>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
      <option value=4>4</option>
      <option value=5>5</option>
      <option value=6>6</option>
      <option value=7>7</option>
      <option value=8>8</option>
      <option value=9>9</option>
      <option value=10>10</option>
      <option value=11>11</option>
      <option value=12>12</option>
  </select>
  </form><br>
    この商品金額： items.price*option.value :<br>
    円（税抜）<br>
    <button @click="inCart">カートへ入れる</button>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from "vuex"

export default {
  name: 'ItemDescription',
  components: {
    },
    methods:{
       inCart(){
            this.items.status===1
        }
    },
     computed:{
       ...mapState(["items"])
    }
    }      
      

</script>