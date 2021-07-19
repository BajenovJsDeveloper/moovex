<template>
  <div class="post-item">
    <div class="post-description">
      <p><strong>#{{ post.id }}</strong></p>
      <h3 class="post-item__header">{{ post.title | capitalize }}</h3>
      <p>{{ post.body | trimText }}</p>
    </div>
    <div class="post-actions">
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      reqired: true
    }
  },
  filters: {
    capitalize(value) {
      return value.replace(/^\w/, c => c.toUpperCase());
    },
    trimText(text) {
      return text.length > 100 ? text.slice(0, 100) + '...' : text
    }
  },
  setup () {
    
    return {

    }
  }
}
</script>

<style scoped>
.post-item {
  display: flex;
  text-align: left;
  justify-content: space-between;
  padding:  0 1rem;
  border: 2px solid rgba(44, 126, 248, 0.685);
  border-radius: 5px;
}
.post-item:not(:first-child) {
  margin-top: 1rem;
}
.post-actions {
  padding: 1rem  0 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>