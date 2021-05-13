<template>
<div>

  <div id="cart">
      <h2>ショッピングカート</h2>
      <table border=1>
          <tr>
              <th>商品画像</th>
              <th>商品名</th>
              <th>価格</th>
              <th>個数</th>
              <th>/</th>
          </tr>
          <tr v-for="(item,index) in cart" :key="item.id">
              <td><img id="picture" :src="item.imagePath"></td>
              <td>{{item.name}}</td>
              <td>{{item.price}}円</td>
              <td>{{item.quantity}}</td>
              <td><button @click="removeCart(item);remove(item,index)">カートから削除</button></td>
          </tr>
      </table>
      <h2 v-show="cartTotalPrice()">合計金額 : {{Math.round(cartTotalPrice())}}円</h2>
      <h2 v-show="cartTotalPrice()">消費税 : {{Math.round(cartTotalPrice()*0.1)}}円</h2>
      <h2 v-show="cartTotalPrice()">ご注文金額合計 : {{Math.round(cartTotalPrice()*1.1)}}円（税込）</h2>
      
      <p id="no" v-show="!this.shopcart.length">カートに商品がありません</p>

      <p id="button"><button v-show="this.shopcart.length"><router-link to="/OrderConfirm">注文に進む</router-link></button></p>

      <!-- <p><button :disabled="!cartProducts.length" @click="checkout(cartProducts)">Checkout</button></p> -->
  </div>
  </div>
</template>
<style scoped>
table{
    margin: 3px auto;
}
#picture{
    width: 150px;
    height: 200px;
}
#cart{
    padding-top:50px;
}
h2{
    text-align: center;
}
#button{
    text-align: center;
}
#no{
    text-align: center;
}

</style>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            shopcart:[],
            total:0,
        }
    },
    created(){
        // this.cartItem();
    },
    computed:{
        cartItem(){
            if(this.$store.state.items){
                
               return console.log(this.$store.state.items);
            }else{
                return console.log("エラー");
            }
        },
        // cartTotalPrice(){
        //     this.shopcart.forEach(el=>{
        //         this.total = this.total + el.price
        //         return this.total
        //     })
        // },
        
        ...mapGetters(["cart"])
    },
    methods:{
        remove(item,index){
            this.shopcart.splice(index,1)
        },
        // cartItem(){
        //     this.items.forEach(el=>{
        //         if(el.status===1){
        //             this.shopcart.push(el)
        //         }
        //     })
        // },
        cartTotalPrice(){
            this.total=0;
            this.shopcart.forEach(el=>{
                this.total = this.total + el.price * el.quantity
            })
            return this.total
        },
        ...mapActions(["removeCart"])
    }
}
</script>
