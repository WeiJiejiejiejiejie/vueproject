<template>
   <div>
       <div class="box">
           <img src="assets/images/new2.jpg">
           <div class="new">
               <h4>抗衰修复眼霜令你重焕迷人双眸</h4>
               <p>弹走细纹,呵护眼周肌肤</p>
               <img src="assets/images/fav.png"/>&nbsp;
               <span>8153</span>&nbsp;&nbsp;
               <img src="assets/images/see.png"/>&nbsp;
               <span>1.2w</span>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "myarticle"
    }
</script>

<style scoped>
    .box{
        margin-top: 0.1rem;
        width: 100%;
        height: 2.5rem;
        position: relative;
    }
    .box img{
        width: 100%;
        height: 100%;
    }
    .new{
        position: absolute;
        bottom:0.13rem;
        left:0.45rem;
        color: white;
        font-size: 0.2rem;
    }
    .new p{
        font-size: 0.15rem;
    }
    .new span{
        font-size: 0.1rem;
    }
    .new img{
        width: 0.1rem;
        height: 0.1rem;
    }
</style>