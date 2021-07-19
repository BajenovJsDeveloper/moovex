<template>
   <div class="form-item">
      <input
        :class="{ 'error': error }"
        :value="value"
        :type="type"
        :name="label"
        :id="label"
        :style="{ zIndex }"
        @input="handleInput"
      />
      <p v-if="error" class="error-msg">{{ msg[prop] }}</p>
      <label :for="label">{{label}}</label>
    </div>
</template>

<script>
import { computed } from '@vue/composition-api'

export default {
  name: 'InputField',
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      reqiored: true
    },
    label: {
      type: String,
      required: true
    },
    msg: {
      type: Object,
      required: true
    },
    prop: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const handleInput = (ev) => {
      emit('input', ev.target.value )
    }
    const zIndex = computed(() => {
      return props.value? 10: 'auto'
    })
    const error = computed(() => {
      return props.msg[props.prop] ? true : false
    })
    return {
      error,
      zIndex,
      handleInput
    }
  }
}
</script>

<style scoped>
.form-item {
  position: relative;
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 3rem;
  margin-bottom: 0.5rem;
}
.form-item>input.error {
  border: 1px solid rgb(204, 9, 58);
}
.form-item>.error-msg {
  position: absolute;
  color: rgb(204, 9, 58);
  font-size: 0.7rem;
  margin: 2px 0;
  bottom: 0.5rem;
}
.form-item>label{
  padding-left: 1rem;
  position: relative;
  bottom: 50%;
  color: rgba(128, 128, 128, 0.692);
  font-size: 0.7rem;
  transition: 0.3s;
}
.form-item>input {
  font-size: 1rem;
  padding: 8px;
  border: 1px solid rgb(69, 199, 250);
  border-radius: 5px;
}
.form-item>input:focus {
  box-shadow: 0 0 10px rgba(135, 207, 255, 0.685);
}
.form-item>input:focus ~ label{
  /* color: rgba(0, 0, 0, 0.6); */
  color: rgb(69, 199, 250);
  bottom: 110%;
  margin-left: -1rem;
  font-size: 1rem;
  transition: 0.3s;
}
</style>