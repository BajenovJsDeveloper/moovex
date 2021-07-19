<template>
    <button 
      :class="{'button': true, [type]: true }"
      @click="handleClick"
    >
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'ButtonStyled',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click')
    }
    return {
      handleClick
    }
  }
}
</script>

<style scoped>
button.button {
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  color: white;
  cursor: pointer;
}
button.button:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.315);
  transition: 0.3s;
}
.button.primary {
  border: 1px solid rgb(60, 167, 255);
  background-color: rgba(85, 173, 255, 0.719);
}
.button.remove {
  border: 1px solid rgb(255, 139, 183);
  background-color: rgba(236, 65, 165, 0.719);
}
.button.append {
  border: 1px solid rgb(156, 255, 139);
  background-color: rgba(12, 206, 22, 0.719);
}
</style>