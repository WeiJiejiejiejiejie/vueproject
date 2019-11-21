<template>
    <div class="swiper-container swiperl">
        <div class="swiper-wrapper">
            <div class="swiper-slide ibanner">
                <img src="assets/images/s1.jpg">
            </div>
            <div class="swiper-slide ibanner">
                <img src="assets/images/s2.png">
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
                /*eslint-disable no-new*/
                new Swiper('.swiperl',{
                    pagination:{
                        el:".swiper-pagination",
                    },
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
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
    .ibanner {
        width:3.75rem;
        height:1.875rem;
    }
    .ibanner img{
        width: 100%;
        height: 100%;
    }
    .swiperl .swiper-pagination-bullet-active{
        background-color: #F8F8F8;
    }
    .swiperl .swiper-pagination-bullet{
        background-color: orangered;
    }
</style>