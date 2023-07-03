<template>
    <div>
        <!-- 插槽: slot 是占位符 -->
        <!-- 匿名插槽 -->
        <slot></slot>
        <!-- 具名插槽 -->
        <slot name="jonk"></slot>
        <!-- 作用域插槽 -->
        <slot name="lpl" :travel="travel"></slot>
    </div>
</template>
<script>
export default {
    name: 'slotTemplate',
    data() {
        return {
            travel: [
                {
                    name: '西藏',
                    fineView: '布达拉宫',
                },
                {
                    name: '缅甸',
                    fineView: '见识身体结构',
                },
                {
                    name: '桂林',
                    fineView: '桂林山水甲天下',
                }
            ]
        }
    },
    methods:{

    }
}
</script>
<style>
</style>