<template>
  <div id="app">
   <Menu/>
   <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import overview from './pages/overview.vue'

export default {
  name: 'App',
  components: {
    Menu,
    overview
 
  }
}

</script>


