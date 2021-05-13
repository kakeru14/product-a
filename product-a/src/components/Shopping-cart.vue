<template>
<div>

  <div id="cart">
      <h2>ショッピングカート</h2>
      <table border=1 v-show="this.shopcart.length">
          <tr>
              <th>商品画像</th>
              <th>商品名</th>
              <th>価格</th>
              <th>個数</th>
              <th>/</th>
          </tr>
          <tr v-for="(item,index) in shopcart" :key="`first-${index}`">
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

      <p id="button"><button v-show="this.shopcart.length" @click="check">注文に進む</button></p>

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
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            shopcart:[],
            total:0,
            selectItem:{},
        }
    },
    created(){
        //this.cartItem();
        this.shopcart=this.$store.state.storecart
    },
    computed:{
        // cartTotalPrice(){
        //     this.shopcart.forEach(el=>{
        //         this.total = this.total + el.price
        //         return this.total
        //     })
        // },
        
        ...mapState(["items,storecart"])
    },
    methods:{
        remove(item,index){
            this.shopcart.splice(index,1)
        },
        cartItem(){
            this.items.forEach(el=>{
                if(el.status===1){
                    this.shopcart.push(el)
                }
            })
        },
        cartTotalPrice(){
            this.total=0;
            this.shopcart.forEach(el=>{
                this.total = this.total + el.price * el.quantity
            })
            return this.total
        },
        check(){
            console.log('check呼び出そ')
            if(!this.$store.state.login_user){
                this.$router.push({name:'Home'})
            }else{
                this.$router.push({name:'OrderConfirm'})
            }
        },
        ...mapActions(["removeCart"])
    }
}
</script>
