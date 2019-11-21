<template>
    <div class="wei-footer">
        <div class="wei-footer-one"><h3>选择商品规格</h3><img src="../../../public/assets/weiimg/crop__ic_cancel.png" @click="weiclose"></div>
        <div class="wei-footer-two">
            <div><img :src="titleaa.goods_img_urls[0]"/></div>
            <div class="wei-footer-twot">
                <h3  style="margin-top: 0.1rem;">{{titleaa.title}}</h3>
                <p style="margin-top: 0.1rem">{{titleaa.titlet}}</p>
                <p style="color: #F56D02;margin-top: 0.1rem">￥{{titleaa.price}}<span style="float: right;margin-right: 0.1rem">{{titleaa.good_type}}</span></p>
            </div>
        </div>
        <div class="wei-select-color">
            <p style="margin-bottom: 0.1rem;">可选颜色</p>
            <p><span class="wei-select-block">{{titleaa.select_color}}</span></p>
        </div>
        <div class="wei-select-color">
            <p style="margin-bottom: 0.1rem;">商品规格</p>
            <p><span class="wei-select-block" :key="index" @click="weichange(index)" :class="{weiactive:flagt===index}" v-for="(select_size,index) in titleaa.select_size">{{select_size}}</span></p>
        </div>
        <a @click="weishopp" href="#/cart"><button class="wei-footer-foot" >选好了</button></a>
    </div>

</template>

<script>
    export default {
        name: "actionsheet",
        props:["titleaa"],
        data(){
            return {
                flagt:false,
                id:""
            }
        },
        methods:{
            weiclose(){
                this.titleaa.flag = false
            },
            // weishopp(){
            //     this.$router.replace("/cart")
            // },
            weichange(index){
                this.flagt=index;
            },
            weishopp(){
                // this.$cart.$emit("ca", this.detaildata.pId)
                // eslint-disable-next-line no-undef
                this.id=this.titleaa.id
                // eslint-disable-next-line no-undef
                this.$store.dispatch('INITCART',this.id)
                console.log(this.id)
            }
        },
        beforeMount() {
            this.weishopp()
        },
    }
</script>

<style scoped>
    .wei-footer{
        width: 100%;
        z-index: 99;
        height: 3.6rem;
        background-color: white;
        position:fixed;
        bottom: 0rem;
    }
    .wei-footer-one{
        width:100%;
        line-height: 0.4rem;
        height: 0.4rem;
        font-size: 0.16rem;
        position: absolute;
        color: #888888;
        background-color: #ECECEC;
        text-align: center;
    }
    .wei-footer-one img{
        position: relative;
        top:-0.33rem;
        right: -1.6rem;
        width: 0.3rem;
        height: 0.3rem;
    }
    .wei-footer-two{
        width: 100%;
        height: 1rem;
        margin-top: 0.4rem;
        display: flex;
    }
    .wei-footer-two div:nth-child(1){
        width: 25%;
        height: 1rem;
        background-color: white;
        text-align: center;
    }
    .wei-footer-two div:nth-child(1) img{
        width: 90%;
        height: 100%;
        margin-top: 0.06rem;
    }
    .wei-footer-twot{
        width: 75%;
        background-color: white;
        font-size: 0.14rem;
        color: black;
    }
    .wei-select-color{
        width: 100%;
        height: 0.7rem;
        border-bottom: 0.001rem solid #ccc;
        border-top: 0.001rem solid #ccc;
        margin-top: 0.1rem;
        text-indent: 0.08rem;
        margin-bottom: 0.1rem;
    }
    .wei-select-block{
        width: 0.5rem;
        display: inline-block;
        height: 0.3rem;
        line-height: 0.3rem;
        border: 0.005rem solid black;
        font-size: 0.16rem;
        font-weight: 700;
        text-align: center;

    }
    .wei-footer-foot{
        width: 100%;
        height: 0.7rem;
        line-height: 0.5rem;
        font-size: 0.18rem;
        background-color: #F56D02;
        color: white;
    }
    .weiactive{
        background-color: #F56D02;
    }

</style>
