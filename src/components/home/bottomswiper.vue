<template>
    <div class="swiper-container swiper2">
        <div class="swiper-wrapper">
            <div class="swiper-slide myibanner">
                <img src="assets/images/s1.jpg"><br>
                <p>title</p>
                <p>￥3920</p>
            </div>
            <div class="swiper-slide myibanner">
                <img src="assets/images/s2.png"><br>
                <p>title</p>
                <p>￥3920</p>
            </div>
            <div class="swiper-slide myibanner">
                <img src="assets/images/s1.jpg"><br>
                <p>title</p>
                <p>￥3920</p>
            </div>
            <div class="swiper-slide myibanner">
                <img src="assets/images/s2.png"><br>
                <p>title</p>
                <p>￥3920</p>
            </div>
            <div class="swiper-slide myibanner">
                <img src="assets/images/s1.jpg"><br>
                <p>title</p>
                <p>￥3920</p>
            </div>
            <div class="swiper-slide myibanner">
                <img src="assets/images/s2.png"><br>
                <p>title</p>
                <p>￥3920</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "homeswiper",
        methods:{
            _initSwiper(){
                new Swiper('.swiper-container',{
                    slidesPerView : 3,
                    spaceBetween : 20,
                })
            }
        },
        mounted(){
            this._initSwiper()
        },
    }
</script>


<style>
    @import "../../../node_modules/swiper/css/swiper.css";
    .myibanner {
        width:0.94rem !important;
        height:0.92rem;
        text-align: center;
    }
    .myibanner img{
        width:0.94rem;
        height:0.92rem;
    }
    .swiper2 .swiper-pagination-bullet-active{
        background-color: #F8F8F8;
    }
    .swiper2 .swiper-pagination-bullet{
        background-color: orangered;
    }
</style>