<template>
  <div class="post-container">
    <loading :loading="$store.getters.isPostLoading" />
    <navigation-tab
      title="User posts" 
      :nav="navData"
      :count="postActiveData.length"
      @select="handleSelect"
    >
      <Posts :postData="postActiveData" :filtered="filtered"/>
    </navigation-tab >
  </div>
</template>

<script>
import { onMounted, ref, computed, watch } from '@vue/composition-api'
import Posts from './posts.vue'
export default {
  components: { Posts },
  name: '',
  setup (props, { root: { $store }}) {
    const navData = ref([
      {
        label: 'User Posts',
        name: 'my-posts',
        active: true
      },
      {
        label: 'All Posts',
        name: 'all-posts'
      }
    ])
    const filtered = ref(false)
    const postsData = ref({
      'my-posts': computed(() => $store.getters.userPosts),
      'all-posts': computed(() => $store.getters.restPosts)
    })
    const handleSelect = (item) => {
      navData.value.forEach(nav => nav.active = nav.name === item.name ? true : false)
    }
    const postActiveData = computed(() => {
      const activeNavItem = navData.value.find(item => item.active)
      return activeNavItem ?  postsData.value[activeNavItem.name] : []
    })
    watch(() => postActiveData.value, () => {
      const activeNavItem = navData.value.find(item => item.active)
      filtered.value = activeNavItem.name === 'my-posts' ? true : false
    })
    onMounted(() => {
      $store.dispatch('fetchPosts', $store.getters.getToken)
    })
    return {
      navData,
      filtered,
      postActiveData,
      handleSelect
    }
  }
}
</script>

<style scoped>
.post-container{
  display: flex;
  justify-content: center;
}
</style>