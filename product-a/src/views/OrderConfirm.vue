<template>
    <!-- table -->
  <div id="top">
    <table border=1 class="center">
		<div>
			<div class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<h3 class="text-center">注文内容確認</h3>
				<table class="table table-striped item-list-table center" >
					<thead>
						<tr>
							<th>
								<div class="text-center">画像</div>
							</th>
							<th>
								<div class="text-center">商品名</div>
							</th>
							<th>
								<div class="text-center">個数</div>
							</th>
							<th>
								<div class="text-center">価格(税込)</div>
							</th>
              <!-- <th> </th> -->
						</tr>
          </thead>
          
          <tbody>
            <tr v-for="(item,index) in shopcart"  :key="`first-${index}`">
                <td><div class="center"><img :src="item.imagePath" class="img-responsive img-rounded item-img-center" border=1 width="100" height="100"><br></div></td>
                <td><div class="center">{{item.name}}</div></td>
                <td>{{item.quantity}}</td>
                <td><div class="center">{{item.price}}円</div></td>
                <!-- <td><button class="center" @click="removeCart(item,index)">キャンセル</button></td> -->
            </tr>
					</tbody>
				</table>
			</div>
		</div>
    <div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="form-group text-center">
          <h2 v-show="cartTotalPrice()">消費税 : {{Math.round(cartTotalPrice()*0.1)}}円</h2>
          <h2 v-show="cartTotalPrice()">ご注文金額合計 : {{Math.round(cartTotalPrice()*1.1)}}円（税込）</h2>
        </div>
			</div>
		</div>
    </table>

    <!-- ログインしていなかった時のログイン画面への遷移 -->
    <!-- <div v-else></div> -->

    <!-- <br><ShoppingCart/> -->
  <br><OrderForm/>
   <br><button><router-link to="/sendorder">注文内容を送信する</router-link></button>
   <router-view/>
</div>
</template>

<script>
import OrderForm from '../components/OrderForm.vue';
// import ShoppingCart from '../components/Shopping-cart.vue';
import {mapState } from 'vuex'
export default {
  components: {
    OrderForm,
    // ShoppingCart,
  },
  data(){
        return{
            // headers:[
            //   // {text:"",value:"imagePath"},
            //   //   {text:"商品名",value:"name"},
            //   //   {text:"個数",value:""},
            //   //   {text:"価格（税込）",value:"price"},
            //   //   {text:"",value:"status"}
            // ],
            shopcart:[
            // {imagePath: "15.jpg"},
            // {name: "機動戦士ガンダムZZ ダブルゼータガンダム"},
            // {price: 2440},
            // {description: `待望のMG ダブルゼータガンダム Ver.Kaが遂に登場!! 各部の広い可動域とコア・ブロック・システムの搭載、各形態への変形を実現!`},
            // {status: 0},

            ],
            total:0,
  }},
  created(){
        this.cartItem();
  },
  computed:{
        ...mapState(["items"])
  },
  methods:{
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
                this.total = this.total + el.price*el.quantity
            })
            return this.total
        },
        
        
    }
}
</script>
<style>
table{

  margin: 3px auto;
}
#top{
  padding-top: 100px;
}
.text-center {
  text-align: center;
}
</style>