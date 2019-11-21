<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <mine-personal></mine-personal>
        </div>
    </div>


</template>

<script>
    import Bscroll from "better-scroll"
    import personal from "../../components/main/personal";
    export default {
        name: "mine",
        components:{
            "mine-personal":personal
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {})
            })
        }
    }
</script>

<style scoped>
    .wrapper{
        height:6rem;
    }
</style>