<template>
  <div>
    <div>
      <button @click="goFind">点我跳转</button>
      <a href="#/">鸣人</a>
      <a href="#/zuozhu">佐助</a>
    </div>
    <!-- 路由出口,实际是将相对应的组件移过来 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  methods: {
    goFind() {
      this.$router.push('/zuozhu');
    }
  }
}
</script>

<style>
  a {
    margin-right: 20px;
    text-decoration: none;
    color: #000;
  }
</style>
