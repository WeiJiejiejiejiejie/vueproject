<template>
    <div class="f-register">
        <header class="f-register-header">
            <div class="f-go-back" @click="toback"><img src="../../../public/assets/images/mine/mm_title_back.png"/></div>
            <div class="f-use-register">Fashion 购用户注册</div>
        </header>
        <div class="f-register-box">
            <div class="f-register-user-number">
                <span class="f-register-quhao">+86<img class="f-register-arrow-down" src="../../../public/assets/images/mine/arrow_down.png"/></span>
                <input class="f-register-userNum" type="text" placeholder="请输入手机号码" v-model="username" @blur="codestyle"/>
            </div>
            <div class="f-register-user-password">
                <input class="f-register-userPwd" type="password" placeholder="请输入验证码" v-model="usercode" @blur="mpanduan"/>
                <div class="f-register-code" :class="{fchangestyle:b}" @click="sendCode">获取验证码</div>
            </div>
            <div class="f-register-agreement">
                注册即代表您同意<a href="#">《Fashion 淘用户协议》</a>和<a href="#">《用户隐私协议》</a>
            </div>
            <button class="f-register-submitBtn" @click="fregister" :class="{fchangestyle:a}">注册</button>
            <div class="f-to-login">
                <a href="#/login" class="f-register-login">我已有账号去登录</a>
            </div>
            <div class="otherway">
                <h4 class="title">其他方式登录</h4>
                <div class="third-app">
                    <div class="application"><img src="../../../public/assets/images/mine/iconfont_weixin.png"/>微信</div>
                    <div class="application"><img src="../../../public/assets/images/mine/iconfont_qq.png"/>QQ</div>
                    <div class="application"><img src="../../../public/assets/images/mine/iconfont_weibo.png"/>新浪</div>
                    <div class="application"><img src="../../../public/assets/images/mine/iconfont_zhifubao.png"/>支付宝</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "register",
        data(){
            return{
                username:"",
                usercode:"",
                a:false,
                b:false,
            }
        },
        methods:{
            toback(){
                this.$router.go(-1);
            },
            codestyle(){
                if(this.username != ""){
                    // console.log(true)
                    this.b = true
                }else{
                    this.b = false
                }
            },
            mpanduan(){
                if(this.username != "" && this.usercode != ""){
                    // console.log(true)
                    this.a = true
                }else{
                    this.a = false
                }
            },
            sendCode(){
                if(!(/^1[34578]\d{9}$/.test(this.username))){
                    Toast.fail('手机号格式错误，请重新输入');
                }else{
                    Toast.success('验证码发送成功，请注意查收');
                }
            },
            fregister(){
                if(this.username != "" && this.usercode != ""){
                    if(!(/^\d{5}$/.test(this.usercode))){
                        Toast.fail('验证码输入错误');
                    }else{
                        // 发送username给后端判断用户是否已经注册
                        localStorage.setItem("username",this.username)
                        // 表示登录成功，跳转路由
                        this.$router.push('/main/mine')
                    }
                }else{
                    Toast.fail('内容不能为空');
                }
            }
        }
    }
</script>

<style scoped>
    .f-register{
        width:100%;
        height:100%;
        background-color: white;
    }
    .f-register-header{
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        position: fixed;
        top:0;
        z-index:1;
        background-color: #FBF8FC;
        border-bottom: 1px solid #DDDDDD;
    }
    .f-use-register{
        width:100%;
        font-size: 0.18rem;
    }
    .f-go-back{
        height:0.5rem;
        position: absolute;
        left: 0;
        width:20%;
        display: flex;
        align-items: center;
    }
    .f-go-back img{
        width:0.28rem;
        height:0.28rem;
        margin-left: 0.1rem;
    }
    .f-register-box{
        width:3.55rem;
        margin: 0 auto;
        padding: 0.25rem 0.08rem 0rem;
        box-sizing: border-box;
    }
    .f-register-user-number,.f-register-user-password{
        width:98%;
        height:0.35rem;
        margin-bottom: 0.25rem;
        border-bottom: 1px solid #dbdbdb;
        position: relative;
    }
    .f-register-quhao{
        display: inline-block;
        width:20%;
        height:0.35rem;
        vertical-align: middle;
        line-height: 0.35rem;
        font-size: 0.16rem;
        position: relative;
    }
    .f-register-arrow-down{
        width:0.14rem;
        height:0.14rem;
        position: absolute;
        right:0.1rem;
        top:0.1rem;
    }
    .f-register-userNum{
        width:78%;
        height:0.35rem;
        border:none;
        outline: none;
    }
    .f-register-userPwd{
        width:100%;
        height:0.35rem;
        border:none;
        outline: none;
    }
    .f-register-submitBtn{
        width:100%;
        height:0.45rem;
        border-radius: 5px;
        color:#fafafa;
        margin-top: 0.8rem;
        font-size: 0.16rem;
    }
    .f-register-code{
        width:1.25rem;
        height:0.3rem;
        line-height:0.3rem;
        border-radius: 5px;
        color:#fdf7f2;
        background-color: rgb(221,221,221);
        text-align: center;
        position: absolute;
        right:0;
        top: 0;
    }
    .f-register-agreement{
        margin:0.2rem 0 0.2rem 0rem;
        font-size: 0.1rem;
    }
    .f-register-agreement a{
        color:#ee7f35;
    }
    .f-to-login{
        margin-top: 0.6rem;
        text-align: center;
    }
    .f-register-login{
        color: #ee7f35;
        text-decoration: underline;
    }
    .tip-cuowu{
        width: 2rem;
        height: 1rem;
        line-height: 1rem;
        border-radius: 5px;
        text-align: center;
    }
    .fchangebtn{
        background-color: #ee7f35!important
    }
    .fchangestyle{
        background-color: #ee7f35!important;
    }
</style>