<template>
  <div class="post-container">
    <post-item v-for="post in postDataSorted" :key="post.id" :post="post">
      <button-styled v-if="filtered" type="remove" @click="handleRemove(post.id)">Remove</button-styled>
      <button-styled v-if="!filtered" type="append" @click="handleAppende(post.id)">Append</button-styled>
    </post-item>
    <div v-if="!postDataSorted.length" class="post-empty">No user posts</div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  name: 'Posts',
  props: {
    postData: {
      type: Array,
      requred: true
    },
    filtered: {
      type: Boolean,
      default: false,
    }
  },
  setup (props, { root: { $store } }) {
    const token = $store.getters.getToken
    const handleRemove = (id) => {
      $store.dispatch('removePost', {id, token})
    }
    const handleAppende = (id) => {
      $store.dispatch('appendPost', {id, token})
    }
    const postDataSorted = computed(() => {
      return props.postData.sort((a, b) => a.id - b.id) 
    })

    return {
      postDataSorted,
      handleRemove,
      handleAppende
    }
  }
}
</script>

<style scoped>
.post-container {
  display:flex;
  flex-direction: column;
  padding: 1rem;
}
.post-empty {
  padding: 1rem;
  color: rgba(128, 128, 128, 0.342);
}
</style>