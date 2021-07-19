<template>
  <div v-show="loading" class="loding-container">
    <p>Loading...</p>
  </div>
</template>

<script>

export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.loding-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  animation-name: fadeIn;
  animation-duration: 0.5s;
  z-index: 1000;
}
.loding-container>p {
  font-size: 1.5rem;
  color: white;
}
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>