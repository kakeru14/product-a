<template>
    <div id="rireki">
        <h2>注文履歴</h2>

        <ul>
            <li v-for="(rireki,index) in rirekiItem" :key="`first-${index}`">
                
            <div v-for="(item,index) in rireki" :key="`second-${index}`">
                <img :src="item.imagePath">
               {{item.name}} x {{item.quantity}} 個
               <!-- <img :src="item.imagePath">           -->
               <p v-if="item.status===2">未入金</p>
               <p v-else-if="item.status===3">入金済み</p>
            </div>
            {{date()}}
            <hr>
            
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

import { mapState } from 'vuex'

export default {
    data(){
        return{
            shopcart:[]
        }
    },
    computed:{


        ...mapState(["rirekiItem"])
    },
    methods:{
        date(){
        const now = new Date();
        return `${now.getFullYear()} 年 ${now.getMonth()+1} 月 ${now.getDate()} 日 ご注文済み`
    }
    }
}
</script>
