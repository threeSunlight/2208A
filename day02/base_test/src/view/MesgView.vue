<template>
    <div>
        我是msg页面
    </div>
</template>
<script>
export default {
    name: "MsgView",
    created() {
         console.log(this.$route.query, ' console.log(this.$route.query);');
    },
    mounted() {
        console.log(this.$route);
        
        
    },
}
</script>
<style>
</style>