<template>
<div>
<!-- 需求: 1.有一个姓,有一个名,最终组合成姓名 
           2. 当修改姓名的时候,姓和名同时进行更改
-->
    姓: <input v-model="firstName" /><br/>
    名: <input v-model="lastName" /><br/>
    姓名: <input v-model="fullName" />
    
</div>
</template>
    
<script>
export default {
    name: 'NameView',
    data() {
        return {
            firstName: '皇甫',
            lastName: '幼望'
        } 
    },
    computed: {
        // 计算属性完整的写法
        // fullName: {
        //     get() {
        //         console.log("get");
        //         return this.firstName + '-'  +  this.lastName
        //     },
        //     set(newValue) {
        //       ///  console.log(value,'value');
        //         console.log( newValue.split('-'))
        //         let result = newValue.split('-')
        //         this.firstName = result[0]
        //         this.lastName = result[1]
               
        //     }
        // }
        // 计算属性的简写
        fullName() {
                return this.firstName + '-'  +  this.lastName
            }
        
        
    }
}
</script>
<style>
</style>