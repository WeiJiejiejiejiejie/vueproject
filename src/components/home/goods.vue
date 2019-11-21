<template>
    <ul>
        <li>
            <goods-type></goods-type>
        </li>
        <li>
            <goods-type></goods-type>
        </li>
        <li>
            <goods-type></goods-type>
        </li>
        <li>
            <goods-type></goods-type>
        </li>
    </ul>
</template>

<script>
    import goodsType from './goodsType'
    export default {
        name: "goods",
        components:{
            goodsType
        }
    }
</script>

<style scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    li{
        width: 1.75rem;
        margin-top: 0.08rem;
        padding-left:0.08rem;
    }
    ul li:nth-child(2n){
        padding-right: 0.08rem;
    }
</style>