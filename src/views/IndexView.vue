<script setup lang="ts">

import HeadMenu from "@/layout/HeadMenu.vue";
import FootView from "@/layout/FootView.vue";
</script>
<template>
  <HeadMenu style="width: 100vw"/>
  <div style="max-width: 100vw; background-color: aquamarine">
    <router-view style="width: 80vw; margin-left: 10vw; background-color: aliceblue"></router-view>
  </div>
  <FootView></FootView>
</template>
<style scoped>

</style>