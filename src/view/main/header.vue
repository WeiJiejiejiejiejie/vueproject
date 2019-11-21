<template>
    <div class="header">
        <div class="first" v-show="'/main/home'===$route.path ?true:false">
            <div class="search">搜索</div>
            <div class="mid">logo</div>
            <div class="message">消息</div>
        </div>
        <div class=" second" v-show="'/main/chengQ'===$route.path ?true:false">
            <div class="search">搜索</div>
            <div class="message">消息</div>
        </div>
        <div class=" second" v-show="'/main/findsingle'===$route.path ?true:false">
            <div class="search">搜索</div>
            <div class="message">消息</div>
        </div>
        <div class=" four" v-show="'/main/mine'===$route.path ?true:false">
            <div class="my-fashion">我的Fashion 购</div>
            <div class="message">消息</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vheader"
    }
</script>

<style scoped>
.header{
    position: fixed;
    height: 1rem;
    width: 100%;
    top: 0;
    font-size: 0.24rem;
    /*头部吸顶保证在最顶层*/
    z-index:3;
}
.first{
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 0.5rem;
    background-color: orangered;
}
.second{
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 0.5rem;
    background-color: orangered;
}
.search{
    width: 20%;
    background-color: #666666;
}
.mid{
    width: 60%;
    background-color: #42b983;
}
.message{
    width: 20%;
    background-color: firebrick;
}


/*mine页面头部信息*/
.four{
    width:100%;
    height:0.5rem;
    line-height:0.5rem;
    display: flex;
    justify-content: space-between;
    background-color: #faf9fc;
    text-align: center;
    font-size: 0.18rem;
    color:#666666;
}
.four .my-fashion{
    width:80%;
    padding-left: 0.6rem;
    box-sizing: border-box;
}
</style>