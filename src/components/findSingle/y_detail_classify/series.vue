<template>
    <div class="seriesBoss">
        <div class="y_header" @click="goback"> back</div>
        <div class="title_btn_boss">
            <a href="#/specific" v-for="(type,index) in 10" :key="index" class="title_btn">单肩包</a>
        </div>
        <y-sort></y-sort>
    </div>
</template>

<script>
    import sort from "./sort";
    export default {
        name: "series",
        components:{
            'y-sort':sort
        },
        methods:{
            goback(){
                this.$router.push('/main/findsingle')
            }
        }
    }
</script>

<style scoped>
    .y_header{
        height: 0.4rem;
        line-height: 0.4rem;
        padding-left: 0.5rem;
        background-color: #F56D02;
    }

    .seriesBoss{
        margin-top: -0.4rem!important;
    }
    .title_btn_boss{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0.03rem 0;
        height: 0.3rem;
        line-height: 0.3rem;

    }
    .title_btn{
        width: 0.7rem;
        display: block;
        border-radius: 0.05rem;
        margin-top: 0.04rem;
        background-color: white;
        font-size: 0.12rem;
        text-align: center;
    }
</style>