<template>
    <div>
        <all-kind-of></all-kind-of>
        <myarticle></myarticle>
        <bottomswiper></bottomswiper>
        <myarticle></myarticle>
        <bottomswiper></bottomswiper>
        <myarticle></myarticle>
        <bottomswiper></bottomswiper>
        <myarticle></myarticle>
        <bottomswiper></bottomswiper>
    </div>
</template>

<script>
    import allKindOf from "./kinds/allKindOf"
    import myarticle from "./myarticle"
    import bottomswiper from './bottomswiper'
    export default {
        name: "kinds",
        components:{
            allKindOf,myarticle,bottomswiper
        }
    }
</script>

<style scoped>

</style>