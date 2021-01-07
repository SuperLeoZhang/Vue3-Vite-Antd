<template>
  <div class="hello-world">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite + Antd 2 + Vuex 4 + Vue-Router" />
      vuex count：{{count}}
  </div>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from 'vuex'
import { computed, toRefs,reactive } from 'vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore();
    const state = reactive({
      count:computed(()=>store.state.count)
    })
    return {...toRefs(state)}
  }
}
</script>
<style scoped lang="scss">
.hello-world {
  text-align: center;
  
}
</style>
