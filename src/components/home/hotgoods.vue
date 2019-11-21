<template>
    <div>
        <ul>
            <li>
                <fingoods></fingoods>
            </li>
            <li>
                <fingoods></fingoods>
            </li>
            <li>
                <fingoods></fingoods>
            </li>
            <li>
                <fingoods></fingoods>
            </li>
        </ul>
    </div>
</template>

<script>
    import fingoods from "./fingoods"
    export default {
        name: "hotgoods",
        components:{
            fingoods
        }
    }
</script>

<style scoped>
    ul{
        display: flex;
        flex-wrap:wrap ;
    }
    li{
        width: 1.75rem;
        height: 2.77rem;
        margin-top: 0.08rem;
        margin-left:0.06rem;
        position: relative;
        border: 1px solid rgba(0,0,0,0.1);
    }
    ul li:nth-child(2n){
        margin-right: 0.08rem;
    }
</style>