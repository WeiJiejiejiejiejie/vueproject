<template>
    <div class="f-myorder">
        <f-myorder-header></f-myorder-header>
        <div class="f-order-title">
<!--            <li :key="key" v-for="(list,key) in titleList" class="f-order-list">{{list.title}}</li>-->
            <router-link class="f-order-list" to="/myorder/allorder">全部</router-link>
            <router-link class="f-order-list" to="/myorder/daifukuan">待付款</router-link>
            <router-link class="f-order-list" to="/myorder/daifahuo">待发货</router-link>
            <router-link class="f-order-list" to="/myorder/daishouhuo">待收货</router-link>
            <router-link class="f-order-list" to="/myorder/daipingjia">待评价</router-link>
            <router-link class="f-order-list" to="/myorder/tuikuan">退款</router-link>
        </div>
        <router-view></router-view>
        <f-maybe-like v-if="orderInfo" :data="orderInfo"></f-maybe-like>
    </div>
</template>

<script>
    import myorderheader from "./myorderheader";
    import maybelike from "./maybelike";
    export default {
        name: "myorder",
        data(){
            return {
                orderInfo:"",
                number:0,
            }
        },
        components:{
            "f-myorder-header":myorderheader,
            "f-maybe-like":maybelike
        },
        methods:{
            _initOrderInfo(){
                fetch('http://localhost:3000/order').then(res=>{
                    // console.log(res)
                    res.json().then(data => {
                        // console.log(data)
                        this.orderInfo = data;
                        // console.log(this.orderInfo)
                    })
                })
            }
        },
        created() {
            this._initOrderInfo();
        },
    }
</script>

<style scoped>
    .f-order-title{
        width:100%;
        height:0.35rem;
        line-height:0.35rem;
        text-align: center;
        display: flex;
        background-color: #ffffff;
        border-bottom: 1px solid #DDDDDD;
    }
    .f-order-list{
        display: inline-block;
        height:0.35rem;
        flex:1
    }
    a.router-link-active{
        color: #ee7f35;
        box-sizing: border-box;
        border-bottom: 2px solid #ee7f35;
    }

</style>