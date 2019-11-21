<template>
    <ul>
        <li>19新冬新款</li>
        <li>腰包</li>
        <li>杨幂同款</li>
        <li>爱马仕</li>
        <li>旅行箱</li>
        <li>CHANEL</li>
    </ul>
</template>

<script>
    export default {
        name: "allKindOf"
    }
</script>

<style scoped>
    ul{

    }
    li{
        display: inline-block;
        width: 1.11rem;
        height: 0.35rem;
        margin: 0.05rem;
        text-align: center;
        line-height: 0.35rem;
    }
    li:nth-child(2n){
        background-color: #F9F4EC;
    }
    li:nth-child(2n-1){
        background-color: #FDF1F2;
    }
</style>