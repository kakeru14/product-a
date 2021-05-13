<template>
    <div id="rireki">
        <h2>注文履歴</h2>

        <ul>
        <li v-for="(item,index) in history" :key="index">
                
            <div>
                <img :src="item.itemGazou">
               {{item.itemName}} x {{item.itemNum}} 個
               <!-- <img :src="item.imagePath">           -->
               <p v-if="item.status===1">未入金</p>
               <p v-else-if="item.status===2">入金済み</p>
            </div>
            
        </li>
        </ul>

        
    </div>
</template>
<style scoped>
#rireki{
    padding-top: 100px;
}
img{
    width: 100px;
    height: 100px;
}
</style>

<script>

import { mapGetters, mapState } from 'vuex'

export default {
    data(){
        return{
            shopcart:[]
        }
    },
    computed:{


        ...mapState(["rirekiItem"]),
        ...mapGetters(["history"])
    },
    methods:{
        date(){
        const now = new Date();
        return `${now.getFullYear()} 年 ${now.getMonth()+1} 月 ${now.getDate()} 日 ご注文済み`
    }
    }
}
</script>
