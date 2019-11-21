<template>
    <div>
        <div class="product_boss">
            <div class="y_product" v-for="(n,index) in 13" :key="index">
<!--                <div class="y_product_img">-->
                    <img src="../../../../public/assets/images/findSingle/detailClassify/product1.webp" alt="" class="product-img">
                    <img src="../../../../public/assets/images/findSingle/detailClassify/goods-f1.webp" class="goods-img">
<!--                </div>-->
                    <p class="brand">LOUIS VUTTON</p>
                <p class="desc">Louis Vuitton/路易威登帆布/配皮 经典款购物袋 M4阿萨飒飒飒飒顺丰到付</p>
                <p class="price">￥<span>9,990</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sort_content"
    }
</script>

<style scoped>
    .product_boss{
        width: 100%;
        /*padding: 0.05rem;*/
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
.y_product{
    position: relative;
    width: 46%;
}
.product-img{
    width: 100%;
    height: 1.72rem;
    display: block;
}
.goods-img{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    left: 0;
}
    .brand{
        font-size: 0.14rem;
margin-top: 0.04rem;
    }
    .desc{
        font-size: 0.12rem;
        color: #666666;
        width: 100%;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
margin: 0.05rem 0;
    }
    .price{
        font-size: 0.14rem;
        color: #ff7711;

    }
</style>