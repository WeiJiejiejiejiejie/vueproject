<template>
    <div class="f-maybelike">
        <div class="f-maybelike-title">可能喜欢</div>
        <ul class="f-maybelike-conlist">
            <li :key="key" v-for="(item,key) in data.maybelike">
                <img :src="item.img" class="picone">
                <h3>{{item.pinpai}}</h3>
                <p>{{item.title}}</p >
                <span class="price">{{item.price}}</span>
                <img ref="pic" src="assets/images/mine/unlove.png" class="pics" @click="change" >
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "maybelike",
        props:["data"],
        data(){
            return {
                num:0
            }
        },
        methods : {
            change() {
                this.num++;
                if (this.num % 2 == 1) {
                    console.log(this.num)
                    this.$refs.pic.src = "assets/images/mine/love.png"
                } else {
                    this.$refs.pic.src = "assets/images/mine/unlove.png"
                }

            }
        }
    }
</script>

<style scoped>
    /*::-webkit-scrollbar {*/
    /*    width: 0 !important;*/
    /*}*/
    /*::-webkit-scrollbar {*/
    /*    width: 0 !important;height: 0;*/
    /*}*/
    .f-maybelike-title{
        text-align: center;
        padding:0.1rem 0rem;
        background-color: white;
        position: relative;
    }
    .f-maybelike-title:before{
        content:"";
        width:0.5rem;
        height:0.01rem;
        background-color: rgb(238,238,238);
        position: absolute;
        top:50%;
        left:1rem;
    }
    .f-maybelike-title:after{
        content:"";
        width:0.5rem;
        height:0.01rem;
        background-color: rgb(238,238,238);
        position: absolute;
        top:50%;
        right:1rem;
    }
    .f-maybelike-conlist{
        width:100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .f-maybelike-conlist li{
        width: 46%;
        height: 2.77rem;
        position: relative;
        text-align: left;
        background-color: white;
        border:1px solid rgba(0,0,0,0.1);
        margin-top:0.1rem;
    }
    .f-maybelike-conlist h3,.f-maybelike-conlist p{
        padding-left:0.05rem;
    }
    .price{
        position: absolute;
        bottom: 0.1rem;
        left: 0.1rem;
        color: #2c3e50;
        font-weight: bold;
    }
    .picone{
        width:100%;
        height:1.765rem ;
        border-bottom:1px solid rgba(0,0,0,0.1);
    }
    .pics{
        width:0.2rem;
        height:0.2rem;
        position: absolute;
        bottom: 1.3rem;
        right:0.15rem;
    }
</style>