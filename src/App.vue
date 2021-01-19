<template>
  <div class="container-fluid">
    <h1>
      Nasa Stuff AWWWW YEAAAAAAA
    </h1>

    <div class="row">
      <results-component />
      <active-picture-component />
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import ActivePictureComponent from "./components/ActivePictureComponent.vue"
  import ResultsComponent from './components/ResultsComponent.vue'
  import { AppState } from './AppState'

  export default {
    name: 'App',
    setup() {
      return {
        appState: computed(() => AppState)
      }
    },
    components: {
      ActivePictureComponent,
      ResultsComponent,
    }
  }

</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>