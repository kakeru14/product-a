<template>
  <div class="center">
		<!-- table -->
		<form action="#">
					<h3>お届け先情報</h3>
					<table>
						<tbody>
							<tr>
								<td>お名前</td>
								<td><input type="text" v-model="item.destinationName"></td>
                <td></td>
                <td><span class="red">{{this.messages.destinationName}}</span></td>
							</tr>
							<tr>
								<td><div>メールアドレス</div></td>
								<td><input type="text" v-model.trim="item.destinationMail"></td>
                <td></td>
                <td><span class="red">{{messages.destinationMail}}</span></td>
							</tr>
							<tr>
								<td><div>郵便番号</div></td>
								<td><input type="text" v-model="item.destinationZipcode"></td>
                <td><button @click="yubinbango()">住所検索</button></td>
                <td><span class="red">{{messages.destinationZipcode}}</span></td>
							</tr>
							<tr>
								<td><div>住所</div></td>
								<td><input type="text" v-model="item.destinationAddress"></td>
                <td></td>
                <td><span class="red">{{messages.destinationAddress}}</span></td>
							</tr>
							<tr>
								<td><div>電話番号</div></td>
								<td><input type="text" v-model.trim="item.destinationTel"></td>
                <td></td>
                <td><span class="red">{{messages.destinationTel}}</span></td>
							</tr>
							<tr>
								<td valign="top"><div>配達日時</div></td>
								<td>
                  <!-- <div>
                    <label style="color: red" for="inputPeriod">配達日時を入力してください</label>
                  </div> -->
                  <div>
                    <input type="date" v-model="item.date"/>
                  </div>
                    <label>
                      <input type="radio" value="10:00:00" v-model="item.time">10時
                    </label>
                    <label>
                      <input type="radio" value="11:00:00" v-model="item.time">11時
                    </label>
                    <label>
                      <input type="radio" value="12:00:00" v-model="item.time">12時
                    </label><br>
                    <label>
                      <input type="radio" value="13:00:00" v-model="item.time">13時
                    </label>
                    <label>
                      <input type="radio" value="14:00:00" v-model="item.time">14時
                    </label>
                    <label>
                      <input type="radio" value="15:00:00" v-model="item.time">15時
                    </label><br>
                    <label>
                      <input type="radio" value="16:00:00" v-model="item.time">16時
                    </label>
                    <label>
                      <input type="radio" value="17:00:00" v-model="item.time">17時
                    </label>
                    <label>
                      <input type="radio" value="18:00:00" v-model="item.time">18時
                    </label>                        
								</td>
                <td></td>
                <td><span class="red">{{messages.destinationTime}}</span></td>
							</tr>
						</tbody>
					</table>

			<h3>お支払い方法</h3>
        <label>

          <input type="radio" name="daibiki" value="1" v-model="item.status" @change='check()'>代金引換
        </label>
        <label>
          <input type="radio" name="cledit" value="2" v-model="item.status" @change='check()'>クレジットカード
        </label>
        <span class="red">{{messages.paymentMethod}}</span>
        <div id="">
          <!-- <router-link to="/sendorder"><button @click="destinationTime();check()" type="submit" class="submit">注文内容を送信する</button></router-link> -->

          <!-- <button 
            v-if='(messages.destinationName==="")||(messages.destinationMail==="")||(messages.destinationZipcode==="")' 
            @click="check()" type="submit" class="submit">注文内容を送信する(入力不足)</button> -->
        
          <div v-if="this.allinput===5"><button @click.prevent="submit" v-if="this.allinput===5" type="submit" class="submit">注文内容を送信する(画面遷移)</button></div>
          <div 
            v-else>入力不足です</div>
          

        </div>
		</form>
    <!-- {{item.destinationName}}
    {{item.destinationMail}}
    {{item.destinationZipcode}} -->
    <!-- {{item.destinationAddress}} -->
    <!-- {{item.destinationTel}}
    {{item.destinationTime}}  -->
    <!-- {{item.date}}
    {{item.time}} -->
    <!-- {{item.paymentMethod}}
    <br>
    {{now | moment}}
    {{item}} -->
    <!-- {{compareTime}} -->
    <!-- <button @click="conpareTime">時間比べ</button> -->
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import moment from "moment";
// import { Core as YubinBangoCore } from 'yubinbango-core';
export default {
  // props:{
  //   cart:{type:Array}
  // },
  data(){
    return {
      messages:{
        destinationName: '',
        destinationMail: '',
        destinationZipcode:'',
        destinationAddress:'',
        destinationTel:'',
        destinationTime:'',
        paymentMethod:'',
        time:'',
        date:'',
        pay:''
      },
      // item:{
      //   destinationName: '',
      //   destinationMail: '',
      //   destinationZipcode:'',
      //   destinationAddress:'',
      //   destinationTel:'',
      //   destinationTime:'',
      //   paymentMethod:'',
      //   time:'',
      //   date:'',
      //   pay:''
      // },

      item:{ },
      // allinput:false,
      allinput:0,

      // now: moment(new Date).format('YYYY/MM/DD HH:mm:ss')
      //cart:[],
    }
  },
  computed:{
    now(){
      return Date.now()
    },
    ...mapState(["items"]),
    ...mapGetters(["cart"])
  },
  created(){
  //      this.cartItem();
  },
  methods:{
    ...mapActions(["addRireki"]),
    submit(){
      this.addRireki(this.item)
      this.$router.push({name:"SendOrder"})
    },
    // yubinbango() {
    //     // this.item.destinationAddress = ''
    //     new YubinBangoCore(this.item.destinationZipcode, (addr)=> {
    //     this.item.destinationAddress = addr.region // 都道府県
    //     this.item.destinationAddress += addr.locality // 市区町村
    //     this.item.destinationAddress += addr.street // 町域
    //     // console.log(this.item.destinationAddress)
    //   })
    // },
    destinationTime(){
      this.item.destinationTime = `${this.item.date} ${this.item.time}`;
      return this.item.destinationTime
    },

    check(){
      this.allinput=0
      console.log('初め'+this.allinput)
      if(!this.item.destinationName){
        this.messages.destinationName = '名前を入力して下さい'
      }else if(!this.item.destinationName==''){
        // allinput.push(1)
        // this.allinput=true
        this.allinput+=1
        console.log(this.item.destinationName)
        console.log('name　'+this.allinput)

      }
      if(!this.item.destinationMail){
        this.messages.destinationMail = 'メールアドレスを入力して下さい'
      // } else if(this.item.destinationMail.indexOf('@') == -1){
      //   this.messages.destinationMail = 'メールアドレスの形式が不正です'
      }else{
        this.allinput+=1
        console.log(this.item.destinationMail)
        console.log('mail　'+this.allinput)
      }
      if(!this.item.destinationZipcode){
        this.messages.destinationZipcode = '郵便番号を入力して下さい'
      } else if(this.item.destinationZipcode.match(/^\d{3}-?\d{4}$/)) {
        this.messages.destinationZipcode = ''
        this.allinput+=1
        console.log(this.item.destinationZipcode)
        console.log('郵便番号　'+this.allinput)
      } else {
        this.messages.destinationZipcode = '郵便番号はXXX-XXXXの形式で入力してください'
        
      }
      if(!this.item.destinationAddress){
        this.messages.destinationAddress = '住所を入力して下さい'
      }else{
        this.allinput+=1
        console.log(this.item.destinationAddress)
        console.log('住所　'+this.allinput)
      }
      if(!this.item.destinationTel){
        this.messages.destinationTel = '電話番号を入力して下さい'
      }else if(this.item.destinationTel.match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)){
        this.messages.destinationTel = ''
      }else{
        this.messages.destinationTel = '電話番号はXXXX-XXXX-XXXXの形式で入力してください'
        this.allinput+=1
        console.log(this.item.destinationTel)
        console.log('電話番号　'+this.allinput)
      }
      if(!(this.item.date || this.item.time)){
        this.messages.destinationTime = '配達日時を入力して下さい'
      }else{
        this.allinput+=1
        console.log(this.item.date+this.item.time)
        console.log('配達日時　'+this.allinput)
      }
      let now = moment();
      if(now.diff(this.item.destinationTime,'hours') >= 3){
        this.messages.destinationTime = '今から3時間後の日時をご入力ください'
      }
      if(!this.item.status){
        this.messages.paymentMethod = '決済方法を選択して下さい'
      }
      // else{
      //   this.allinput+=1
      //   // this.allinput=true
      //   // console.log(this.allinput)
      // }
      console.log(this.allinput)
    },

  },
    filters: {
      moment(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  
  
  
}
</script>

<style lang="css">
.center{
  margin-top: 100px;
  display: inline-block;
  text-align: center;
}
.submit{
  margin-top: 20px;
  margin-bottom: 20px;
}
.red{
  color: red;
}
</style>
