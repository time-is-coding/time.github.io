<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CommonComponent msg="我在8081中"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonComponent from '@/components/CommonComponent.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    CommonComponent
  }
})
</script>
