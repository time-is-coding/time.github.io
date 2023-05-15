<template>
  <div class="hello">
    <h1>msg:{{ msg }}</h1>
    <p>
      组件位置：app-exposes/src/components/CommonComponent.vue
    </p>
    <h3>组件名</h3>
    <ul>
      <li><a href="" rel="noopener">CommonComponent</a></li>
    </ul>
    <h3>使用</h3>
    <ul>
      <li><a href="" rel="noopener">webpack5-module-federation</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CommonComponent',
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  background-color: red;
  margin: 20px;
  padding: 20px;
  background-color: beige;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
