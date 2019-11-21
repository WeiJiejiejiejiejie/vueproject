<template>
    <div>
        <div class="xiangqing-header">
            <a href="#/main/chengQ"><span class="xiangqing-header-left">&lt;</span></a>
            <span class="xiangqing-header-center">买家秀详情</span>
            <span class="xiangqing-header-right">分享</span>
        </div>
        <div class="xiangqing-all">
            <div class="maijiaxiu-user">
                <img src="../../../assets/images/chengQ/maijiaxiu/tuijainuser.png" alt="">
                <span>jsycyoma</span>
                <p>10月21日  18:27</p>
            </div>
            <div class="maijiaxiu-img">
                <ul>
                    <li><img src="../../../assets/images/chengQ/maijiaxiu/maijiaxiumax.png" alt=""></li>
                </ul>
            </div>
            <div class="maijiaxiu-neirong">
                <p>项链超美！非常喜欢！</p>
            </div>
            <div class="maijiaxiu-dianzan">
                <span><img src="../../../assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png" alt=""></span>
            </div>
        </div>
        <div class="maijiaxiu-lianjie">
            <div class="maijiaxiu-lianjie-top">
                <img src="../../../assets/images/chengQ/maijiaxiu/tuijainuser.png" alt="">
                <span>豌豆君英伦小铺</span>
                <p>中国</p>
            </div>
            <div class="maijiaxiu-lianjie-body">
                <img src="../../../assets/images/chengQ/maijiaxiu/lianjie-img.png" alt="">
                <div class="maijiaxiu-lianjie-body-right">
                    <h3>SWAROVSKI</h3>
                    <P>国内现货  施华洛世奇  宝格丽同款  彩色混搭时尚转运珠项链  锁骨链</P>
                    <h4>￥<span>658</span></h4>
                    <a href="#">查看商品</a>
                </div>
            </div>
        </div>
<!--        瀑布流-->
        <div class="waterfall-wrapper">
            <ul class="left-waterfall waterfall-wrapper-ul" ref="left">
                <li class="item" v-for="(item, index) in leftItems" v-bind:key="index">
                    <div class="item1">
                        <img :src="item.userimg" alt="">
                        <span>{{item.username}}</span>
                    </div>
                    <div class="item2">
                        <img :src="item.img" alt="">
                    </div>
                    <p class="item-p">{{item.pinglun}}</p>
                    <div class="item-bttom">
                        <p>{{item.shangpin}}</p>
                        <a href="#">
                            <span>{{item.dianzan}}</span>
                            <img :src="item.dianzanimg" alt="">
                        </a>
                    </div>
                </li>
            </ul>
            <ul class="right-waterfall waterfall-wrapper-ul" ref="right">
                <li class="item" v-for="(item, index) in rightItems" v-bind:key="index">
                    <div class="item1">
                        <img :src="item.userimg" alt="">
                        <span>{{item.username}}</span>
                    </div>
                    <div class="item2">
                        <img :src="item.img" alt="">
                    </div>
                    <p class="item-p">{{item.pinglun}}</p>
                    <div class="item-bttom">
                        <p>{{item.shangpin}}</p>
                        <a href="#">
                            <span>{{item.dianzan}}</span>
                            <img :src="item.dianzanimg" alt="">
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<!--{-->
<!--height: 120,-->
<!--userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",-->
<!--username:"蜜汁尴尬1",-->
<!--img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",-->
<!--pinglun:"很好！",-->
<!--shangpin:"LOUSTAL SWAROVSKI",-->
<!--dianzan:1,-->
<!--dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"-->
<!--},-->
<script>
    export default {
        name: "chengQ-maijiaxiu-xiangqing",
        data () {
            return {
                data: [
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 140,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 100,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 160,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 140,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 100,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 160,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 140,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 100,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 160,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 140,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬1",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu1.png",
                        pinglun:"很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬2",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu2.png",
                        pinglun:"很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 100,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬3",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu3.png",
                        pinglun:"很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                    {
                        height: 160,
                        userimg:"assets/images/chengQ/maijiaxiu/tuijainuser.png",
                        username:"蜜汁尴尬4",
                        img:"assets/images/chengQ/maijiaxiu/maijiaxiu-pubuliu4.png",
                        pinglun:"很好！很好！很好！很好！很好！很好！很好！",
                        shangpin:"LOUIS VUITTON",
                        dianzan:1,
                        dianzanimg:"assets/images/chengQ/maijiaxiu/xiangqing-dianzan.png"
                    },
                ],
                leftItems: [],
                rightItems: []
            }
        },
        mounted () {
            // TODO GET DISPLAY_DATA
            this.updateWaterfall()
        },
        methods: {
            updateWaterfall () {
                const leftHeight = this.$refs.left.clientHeight
                const rightHeight = this.$refs.right.clientHeight
                let item = this.data.shift()
                // console.log(leftHeight)
                // console.log(rightHeight)
                if (item == null) {
                    return
                }
                if (leftHeight <= rightHeight) {
                    this.leftItems.push(item)
                }
                else {
                    this.rightItems.push(item)
                }
                this.$nextTick(function () {
                    this.updateWaterfall()
                })
            }
        }
    }
</script>

<style scoped>
    .xiangqing-all{
        background-color: white;
        width: 96%;
        margin: 0 auto;
        border-radius: 1.5%;
    }
    .xiangqing-header{
        font-size: 0.2rem;
        width: 95%;
        height: 0.4rem;
        position: fixed;
        top: 0rem;
        background-color: white;
        padding: 0 0.1rem;
        z-index: 10;
        line-height: 0.4rem;
    }
    .xiangqing-header-left{
        display: inline-block;
        margin: 0 auto;
    }
    .xiangqing-header-center{
        margin-left: 33%;
    }
    .xiangqing-header-right{
        float: right;
    }
    .maijiaxiu-user{
        text-align: left;
        height: 0.3rem;
    }
    .maijiaxiu-user img{
        width: 10%;
        border-radius: 50%;
        position: absolute;
        left: 0.1rem;
        top: 0.55rem;
    }
    .maijiaxiu-user span{
        font-size: 0.16rem;
        position: absolute;
        left: 0.5rem;
        top: 0.6rem;
    }
    .maijiaxiu-user p{
        font-size: 0.16rem;
        float: right;
        padding-right: 0.1rem;
        padding-top: 0.1rem;
    }
    .maijiaxiu-img{
        margin-top: 0.1rem;
    }
    .maijiaxiu-img li{
        width: 96%;
        margin: 0 auto;
    }

    .maijiaxiu-img img{
        width: 100%;
        margin: 0 auto;
    }
    .maijiaxiu-neirong{

    }
    .maijiaxiu-neirong p{
        font-size: 14px;
        padding: 0.06rem 0.1rem;
        border-bottom: 0.01rem solid #999;
    }
    .maijiaxiu-dianzan{
        text-align: center;
        padding: 0.1rem 0;
    }
    .maijiaxiu-dianzan img{
        border-radius: 50%;
    }
    .maijiaxiu-lianjie{
        background-color: white;
        width: 96%;
        margin: 0 auto;
        margin-top: 0.1rem;
        border-radius: 2%;
    }
    .maijiaxiu-lianjie-top{
        position: relative;
        padding: 0.05rem 0;
        border-bottom: 0.01rem solid #999;
    }
    .maijiaxiu-lianjie-top img{
        width: 10%;
        margin-left: 0.1rem;
    }
    .maijiaxiu-lianjie-top span{
        position: absolute;
        top: 0.1rem;
        font-size: 0.14rem;
        padding-left: 0.05rem;
    }
    .maijiaxiu-lianjie-top p{
        float: right;
        padding-top: 0.05rem;
        padding-right: 0.1rem;
        font-size: 0.14rem;
    }
    .maijiaxiu-lianjie-body{
        position: relative;
    }
    .maijiaxiu-lianjie-body img{
        display: inline-block;
        width: 45%;
    }
    .maijiaxiu-lianjie-body-right{
        display: inline-block;
        width: 45%;
        text-align: center;
        position: absolute;
        top: 0.05rem;
    }
    .maijiaxiu-lianjie-body-right h3{
        font-size: 0.2rem;
    }
    .maijiaxiu-lianjie-body-right p{
        font-size: 0.14rem;
    }
    .maijiaxiu-lianjie-body-right h4{
        font-size: 0.2rem;
        color: #ee7f35;
    }
    .maijiaxiu-lianjie-body-right a{
        font-size: 0.16rem;
        line-height: 0.3rem;
        display: inline-block;
        width: 1rem;
        height: 0.3rem;
        background-color: #ee7f35;
        border-radius: 0.04rem;
        color: white;
    }
/*    瀑布流*/
    .waterfall-wrapper {
        width: 96%;
        margin: 0 auto;
    }
    .waterfall-wrapper-ul {
        width: 50%;
    }
    .left-waterfall {
        float: left;
    }
    .right-waterfall {
        float: right;
    }
    .item {
        width: 95%;
        background-color: white;
        margin: 10px;
    }
    .item1{
        position: relative;
    }
    .item1 span{
        position: absolute;
        top: 0.04rem;
    }
    .item1 img{
        width: 15%;
        border-radius: 50%;
    }
    .item2 img{
        width: 100%;
        display: block;
    }
    .item-p{
        padding: 0.05rem 0;
    }
    .item-bttom{
        text-align: right;
        position: relative;
    }
    .item-bttom p{
        display: inline-block;
        font-size: 14px;
        float: left;
        padding-top:0.05rem;
    }
    .item-bttom span{
        position: absolute;
        top: 0.05rem;
        right: 25px;
        font-size: 14px;
    }
    .item-bttom img{
        width: 13%;
        display: inline-block;
    }
</style>