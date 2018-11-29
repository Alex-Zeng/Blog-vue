<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <keep-alive include="header-all">
    <router-view v-if="isRouterAlive"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () { // 注册一个方法
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    // 刷新方法
    reload () {
      this.isRouterAlive = false
      // $nextTick 会在DOM更新后 立即执行
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
