<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CommonComponent msg="app_local 引用了 app_expoese 的 CommonComponent 组件" />
    <CommonComp msg="defineAsyncComponent + import + finally 加载完组件执行逻辑" />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    CommonComponent: defineAsyncComponent(() => import('app_exposes/CommonComponent.vue')),
    CommonComp: defineAsyncComponent(() =>
      // 注意app_exposes是本项目中vue.config.js的ModuleFederationPlugin中配置的remotes中指定的名称。
      // 后面跟着的是在app-exposes项目的vue.config.js中exposes里配置的模块路径
      import('app_exposes/CommonComponent.vue').finally(() => {
        console.log('加载远程组件完毕！')
      })
    )
  }
})
</script>
