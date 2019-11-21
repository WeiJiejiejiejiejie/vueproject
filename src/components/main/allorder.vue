<template>
    <div class="f-allorder-con">
        <div v-if="AllorderInfo.order == 0" class="f-noorder">
            <p>您还没有订单</p>
            <p>可以去逛逛有没有想买的</p>
        </div>
        <div v-else class="f-allorder-info">
            订单信息
        </div>
    </div>
</template>

<script>
    export default {
        name: "allorder",
        data(){
            return {
                AllorderInfo:"",
                number:0,
                flag:true
            }
        },
        methods:{
            _initAllOrderInfo(){
                fetch('http://localhost:3000/order').then(res=>{
                    // console.log(res)
                    res.json().then(data => {
                        // console.log(data)
                        this.AllorderInfo = data;
                        console.log(this.AllorderInfo)
                    })
                })
            },
        },
        created() {
            this._initAllOrderInfo();
        },
    }
</script>

<style scoped>
    .f-noorder{

    }
</style>