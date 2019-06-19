<template>
    <div>
        <h1>这是Account的登录子组件</h1>
    </div>
</template>
<script>

</script>
<style scoped>
/*一展示登录页面全部变为红色 
 在style后面加上scoped属性就只有登录组价变红
 只要style在组件中出现，推荐加上scoped属性
 
 普通的style标签只支持普通的样式，如果想要启用scss或less，需要为style
 元素设置lang 属性
 */
    div{
        color: red;
    }
</style>