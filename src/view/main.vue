<template>
        <div>
            <mc-header></mc-header>
            <mc-footer></mc-footer>
            <router-view></router-view>
            <a href="#/detail" class="detail">魏杰</a>

<!--            购物车   返回定顶部-->

        </div>
</template>

<script>
    import header from "./main/header";
    import footer from "./main/footer";
    export default {
        name: "vmain",
        components:{
            'mc-footer':footer,
            'mc-header':header
            // eslint-disable-next-line vue/no-unused-components
        }
    }
</script>

<style scoped>
    .detail{
        position: fixed;
        right:0.5rem;
        top:5rem;
        background-color: red;
        height: 1rem;
        width: 1rem;
        z-index: 1000;
    }
</style>