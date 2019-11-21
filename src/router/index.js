// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
// import  login from "../components/login";
import home from "../view/main/home";
import mine from "../view/main/mine";
import findSingle from "../view/main/findSingle";
import chengQ from "../view/main/chengQ";
import main from "../view/main";
// 延玉琳
import series from "../components/findSingle/y_detail_classify/series";
import specific from "../components/findSingle/y_detail_classify/specific";
import sort_content from "../components/findSingle/y_detail_classify/sort_content";
import look_all from "../components/findSingle/y_detail_classify/look_all";
import brand_shop from "../components/findSingle/y_detail_classify/brand_shop";
import look_all_brand from "../components/look_all_brand";
// 魏杰
import detail from "../view/detail";
import cart from "../view/cart";
// 张先森
import  maijiaxiuxiangqing from "../components/chengQ/chengQ-maijiaxiu/chengQ-maijiaxiu-xiangqing";
import  tuijianmaxxiangqing from "../components/chengQ/chengQ-tuijian/chengQ-tuijian-max-xiangqing";
import  tuijianminxiangqing from "../components/chengQ/chengQ-tuijian/chengQ-tuijian-min-xiangqing";
// 刘丰
import hotgoods from "../components/home/hotgoods";
import kinds from "../components/home/kinds";
// 殷方方
import login from "../components/login/login";
import register from "../components/login/register";
import findpwd from "../components/login/findpwd";
import setpwd from "../components/login/setpwd";
import myorder from "../components/main/myorder";
import allorder from "../components/main/allorder";
import daifukuan from "../components/main/daifukuan";
import daifahuo from "../components/main/daifahuo";
import daishouhuo from "../components/main/daishouhuo";
import daipingjia from "../components/main/daipingjia";
import tuikuan from "../components/main/tuikuan";
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[

        {path:'/',redirect:'/main/home'},
        {
            path:'/main',
            component:main,
            children:[
                {
                    path:'home',
                    component:home
                },
                {
                    path:'findSingle',
                    component:findSingle
                },
                {
                    path:'mine',
                    component:mine,
                    // requiresAuth: true
                },
                {
                    path:'chengQ',
                    component:chengQ
                }
            ]
        },
        // 延玉琳
        {path:'/specific', component:specific},
        {path:'/lookall',component:look_all},
        {path:'/brandshop',component:brand_shop},
        {path:'/lookallbrand',component:look_all_brand},

        {
            path:'/series', component:series,
            redirect:'/series/sortcontent1',
            children:[
                {
                    path:'sortcontent:id',
                    component:sort_content
                }
            ]
        },
        // 魏杰
        {path:'/detail',component:detail},
        {path:'/cart',component:cart},
        // 张先森
        {path:'/maijiaxiu', component:maijiaxiuxiangqing},
        {path:'/tuijianmjx', component:tuijianmaxxiangqing},
        {path:'/tuijianmjxmin', component:tuijianminxiangqing},
        // 刘丰
        {path:'/hotgoods', component:hotgoods},
        {path:'/kinds', component:kinds},
        // 殷方方
        {
            path:'/login',
            component:login,
            // children:[
            //     {path:'findpwd', component:findpwd}
            // ]
        },
        {path:'/register', component:register},
        {path:'/findpwd', component:findpwd},
        {path:'/setpwd',component:setpwd},
        {path:'/myorder',redirect:'/myorder/allorder'},
        {
            path:'/myorder',component:myorder,
            children:[
                {path:'allorder', component:allorder},
                {path:'daifukuan', component:daifukuan},
                {path:'daifahuo', component:daifahuo},
                {path:'daishouhuo', component:daishouhuo},
                {path:'daipingjia', component:daipingjia},
                {path:'tuikuan', component:tuikuan},
            ]
        }
    ],

})

// router.beforeEach((to,from,next) => {
//     console.log(to.path)
//     console.log(from.path)
//     let token = localStorage.getItem('token')
//     // next()
//     if(token){
//        next('/main/mine')
//     }else{
//        next('/login')
//     }
// })

export default router