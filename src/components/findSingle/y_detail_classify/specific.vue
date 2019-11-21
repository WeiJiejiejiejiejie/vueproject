<template>
    <div class="specific">
        <header class="go_back" @click="go_back">back</header>
        <div class="y-sort">
            <y-sort></y-sort>
        </div>
    </div>
</template>

<script>
    import sort from "./sort";
    export default {
        name: "specific",
        components:{
            'y-sort':sort
        },
        methods:{
            go_back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
.specific{
    margin-top: -0.4rem!important;
}
    header{
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #F56D02;
    }
.y-sort{
    margin-top: -0.4rem;
}
</style>