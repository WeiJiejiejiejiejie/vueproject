<template>
    <div class="Allgoods">
        <img src="assets/images/good4.png" class="picone">
        <h3>OFF-WHITE</h3>
        <p>秋冬御寒神器</p>
        <span class="price">￥799</span>
        <img ref="pic" src="assets/images/unlove.png" class="pics" @click="chage" >
    </div>
</template>

<script>
    export default {
        name: "fingoods",
        data(){
            return {
                num:0
            }
        },
        methods : {
            chage(){
                this.num++;
                if( this.num%2==1){
                    this.$refs.pic.src="assets/images/love.png"
                }else{
                    this.$refs.pic.src="assets/images/unlove.png"
                }

            }
        }
    }
</script>

<style scoped>
    .Allgoods{
        width: 1.75rem;
        height: 2.77rem;
        position: relative;
        text-align: center;
    }
    .price{
        position: absolute;
        bottom: 0.1rem;
        left: 0.1rem;
        color: #2c3e50;
        font-weight: bold;
    }
    .picone{
        width: 1.75rem;
        height:1.765rem ;
    }
    .pics{
        width:0.2rem;
        height:0.2rem;
        position: absolute;
        bottom: 1.3rem;
        right:0.15rem;
    }
</style>