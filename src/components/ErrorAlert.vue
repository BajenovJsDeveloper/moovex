<template>
  <div v-show="show" class="error-container">
    <p class="error-text">{{ msg }}</p>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  name: 'ErrorAlert',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const show = computed(() => !!props.msg)
    return {
      show
    }
  }
}
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 100px;
  padding: 0 2rem;
  border-radius: 5px;
  background-color: #ff000094;
  color: white;
  box-shadow: 0 0 10px #905a5a;
  animation-name: slideRight;
  animation-duration: 0.5s;
}
@keyframes slideRight {
  0%{ opacity: 0; bottom: -300px; }
  100%{ opacity: 1; }
}
</style>