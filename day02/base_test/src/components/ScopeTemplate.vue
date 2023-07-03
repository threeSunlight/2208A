<template>
    <div>
        <!-- 子组件准备好参数 -->
        <slot :games="games" name="xiaoong">

        </slot>
    </div>
</template>
<script>
    export default {
        name: "ScopedTemplate",
        data() {
            return {
                games: ['英雄联盟','王者荣耀', '和平精英', '绝地求生']
            }
        }
    }
</script>
<style >
</style>