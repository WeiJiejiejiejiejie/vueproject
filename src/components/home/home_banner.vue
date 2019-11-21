<template>
    <div class="swiper-container swiper1" >
        <div class="btn">
            <input type="text" class="swiper-button-prev y-swiper-button-prev y-swiper-button" value="精选">
            <input type="text" class="swiper-button-next y-swiper-button-next y-swiper-button" value="推荐">
        </div>
<!--        <div class="swiper-pagination one"></div>-->
        <div class="swiper-wrapper">
            <div class="swiper-slide box1"  >
                <homeswiper></homeswiper>
                <type></type>
                <hot></hot>
                <myarticle></myarticle>
            </div>
            <div class="swiper-slide box2"   >
                <goods></goods>
            </div>

        </div>

    </div>
</template>

<script>
    // eslint-disable-next-line no-undef
    import Swiper from "swiper"
    import homeswiper from './homeswiper'
    import type from './type'
    import hot from './hot'
    import myarticle from './myarticle'
    import goods from './goods'
    // eslint-disable-next-line vue/no-unused-components
    export default {
        name: "home_banner",
        // props:['data'],
        mounted() {
            this._initSwiper()
        },
        components:{
            homeswiper,type,hot,myarticle,goods
        },
        methods: {
            _initSwiper() {
                new Swiper(".swiper1", {
                    // direction: "vertical",
                    // effect: "flip",
                    // 如果需要分页器


                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable :true,

                    },
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
                })
            }
        }
    }

</script>

<style >
    @import "../../../node_modules/swiper/css/swiper.css";
.swiper1 {
    width: 100%;
    min-height: 1.85rem;
    /*margin-top: -0.2rem;*/
    padding-top: 0.30rem;
    background-color: white;
    text-align: center;
    padding-bottom: 0.3rem;

}
.btn{
    position: absolute;
    width: 100%;
    top: 0;
}
.y-swiper-button{
    width: 50%;
    height: 0.3rem;
    text-align: center;
    margin: 0!important;
    border: none;
    border-bottom: 2px solid white;
    outline: none;
}
    .swiper-slide{
        scrollbar-face-color: #889B9F;
        scrollbar-shadow-color: #3D5054;
        scrollbar-highlight-color: #C3D6DA;
        scrollbar-3dlight-color: #3D5054;
        scrollbar-darkshadow-color: #85989C;
        scrollbar-track-color: #95A6AA;
        scrollbar-arrow-color: #FFD6DA;
    }
.swiper-button-disabled{
    color: firebrick;
    border: none;
    border-bottom: 2px solid firebrick;
}
</style>