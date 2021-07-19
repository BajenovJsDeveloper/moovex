<template>
  <div class="post-nav-container">
    <h2>{{ title }}</h2>
    <div class="nav-labels">
      <div 
        :class="{'nav-label': true, 'active': item.active}" 
        v-for="item in nav" 
        :key="item.name"
        @click="handleSelectItem(item)"
      >{{ item.label }}</div>
      <div class="nav-label__count">Total: {{ count }}</div>
    </div>
    <div class="nav-inner">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationTab',
  props: {
    nav: {
      type: Array,
      reuired: true
    },
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      requred: true
    }
  },
  setup (props, { emit }) {
    const handleSelectItem = (item) => {
      emit('select', item)
    }

    return {
        handleSelectItem
      }
  }
}
</script>

<style scoped>
.post-nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 1000px;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.226);
  border-radius: 5px;
}
.post-nav-container>h2 {
  color: rgb(3, 127, 228);
}
.nav-labels {
  display: flex;
  width: 100%;
  padding-bottom: 1rem;
}
.nav-labels .nav-label {
  cursor: pointer;
  margin-right: 1.5rem;
}
.nav-labels .nav-label.active {
   border-bottom: 2px solid rgba(31, 189, 251, 0.589);
}
.nav-labels .nav-label:hover {
  color: rgba(31, 189, 251, 0.589);
}
.nav-inner {
  width: 100%;
  border: 5px;
  border: 1px solid rgba(162, 162, 162, 0.17);
}
.navi-tem {
  padding: 1rem;
}
.nav-label__count {
  margin-left: auto;
  color: rgba(128, 128, 128, 0.5);
}
</style>