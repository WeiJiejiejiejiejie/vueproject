<template>
    <div>
        <div>

        </div>
        <div ref="editor" style="text-align:left">
            <!--            <div id="editor">-->
            <!--                <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>-->
            <!--            </div>-->
        </div>
        <button v-on:click="getContent">查看内容</button>
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
        name: 'text',
        data () {
            return {
                editorContent: ''
            }
        },
        methods: {
            getContent: function () {
                alert(this.editorContent)
            }
        },
        mounted() {
            var editor = new E(this.$refs.editor)
            // editor.txt.html('<p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>')
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.create()
            // editor.txt.html(this.content)
        }
    }
</script>

<style scoped>

</style>