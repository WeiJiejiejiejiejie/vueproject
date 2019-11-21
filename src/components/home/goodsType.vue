<template>
    <div class="Allgoods">
        <img src="assets/images/good2.png">
        <h3>OFF-WHITE</h3>
        <p>秋冬御寒神器</p>
        <span class="price">￥799</span>
    </div>
</template>

<script>
    export default {
        name: "goodsType"
    }
</script>

<style scoped>
    .Allgoods{
        width: 1.75rem;
        height: 2.77rem;
        border: 1px solid rgba(0,0,0,0.1);
        position: relative;
    }
    .price{
        position: absolute;
        bottom: 0.1rem;
        left: 0.1rem;
        color: #2c3e50;
        font-weight: bold;
    }
    .Allgoods img{
        width: 100%;
        height:1.765rem ;
    }
</style>