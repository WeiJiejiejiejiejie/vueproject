<template>
    <div>
        <div class="title">

            <div class="h-nav-l-row" >
                <div class="h-nav-item" @click="styleItem(n,h)" :key="h" v-for="(n,h) in 4">
                    <a :href="`#/series/sortcontent`+n">
                        <span :class="{cheched_item:i===h}">热门</span>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <y-sort-content></y-sort-content>
        </div>
    </div>
</template>

<script>
    import sort_content from "./sort_content"
    export default {
        name: "sort",
        data(){
            return{
            // show:true
            i:0
            }
        },
        components:{
            'y-sort-content':sort_content
        },
        methods:{
            styleItem(n,h){
                this.i=h;
                // this.flag = n.flag;
                // this.show = true
            }
        },
    }
</script>

<style scoped>


    .h-nav-l-row{
        /*overflow-x:auto ;*/
        /*display: -webkit-box;*/
        display: flex;
        justify-content: left;
        margin-top: 0.4rem;
        background-color: white;
        width: 100%;
    }
    .h-nav-item{
        padding:0 0.32rem;
    }
    .h-nav-item span{
        display: block;
        width: auto;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.13rem;
    }
    .cheched_item{
        border-bottom: 0.01rem solid #ff6700;
        color: #ff6700;
    }
</style>