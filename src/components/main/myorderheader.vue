<template>
    <header class="f-myorder-header">
        <div class="f-myorder-goback" @click="toback"><img src="../../../public/assets/images/mine/mm_title_back.png"/></div>
        <div class="f-myorder-all" v-show="'/myorder/allorder'===$route.path">全部订单({{number}})</div>
        <div class="f-myorder-all" v-show="'/myorder/daifukuan'===$route.path">待付款订单({{number}})</div>
        <div class="f-myorder-all" v-show="'/myorder/daifahuo'===$route.path">待发货订单({{number}})</div>
        <div class="f-myorder-all" v-show="'/myorder/daishouhuo'===$route.path">待收货订单({{number}})</div>
        <div class="f-myorder-all" v-show="'/myorder/daipingjia'===$route.path">待评价订单({{number}})</div>
        <div class="f-myorder-all" v-show="'/myorder/tuikuan'===$route.path">退款({{number}})</div>
        <div class="f-myorder-edit">编辑</div>
    </header>
</template>

<script>
    export default {
        name: "myorderheader",
        data(){
            return{
                number:0
            }
        },
        methods:{
            toback(){
                this.$router.push('/main/mine')
            }
        }
    }
</script>

<style scoped>
    .f-myorder-header{
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        position: fixed;
        top:0;
        z-index:1;
        background-color: #FBF8FC;
        border-bottom: 1px solid #DDDDDD;
    }
    .f-myorder-goback{
        height:0.5rem;
        width:20%;
        display: flex;
        align-items: center;
    }
    .f-myorder-goback img{
        width:0.28rem;
        height:0.28rem;
        margin-left: 0.1rem;
    }
    .f-myorder-all{
        width:60%;
        font-size: 0.18rem;
    }
    .f-myorder-edit{
        width:20%;
    }
</style>