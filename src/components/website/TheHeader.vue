<template>
  <nav class="navbar">
    <div><FakeLogo /></div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FakeLogo from './FakeLogo.vue';

export default defineComponent({
  components: { FakeLogo },
  name: 'TheHeader',
});
</script>

<style scoped></style>
