<template>
    <ul>
        <a href="#/hotgoods">
            <li>
                <div class="box">
                    <img src="assets/images/hot1.png">
                </div>
            </li>
        </a>
        <a href="#/hotgoods">
            <li>
                <div class="box">
                    <img src="assets/images/hot2.png">
                </div>
            </li>
        </a>
    </ul>
</template>

<script>
    export default {
        name: "hot"
    }
</script>

<style scoped>
  ul{
      display: flex;
     margin-top: 0.1rem;
  }
    li{
        width: 1.755rem;
        height: 1rem;
        padding-left:0.08rem;
    }
    ul li:last-child{
        padding-right: 0.08rem;
    }
    .box{
        width: 100%;
        height: 100%;
        position: relative;
        color: white;
    }
  .box img{
      width: 100%;
      height: 100%;
  }
</style>