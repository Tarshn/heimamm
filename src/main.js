import Vue from 'vue'
import App from './App.vue'

// 导入自定义的组件
import mingren from './components/mingren.vue';
import zuozhu from './components/zuozhu.vue';

// 下载安装vue-router
// 导入vue-router
// Vue.use()
// 实例router并且配置

// 导入 vue-router
import VueRouter from 'vue-router';
//注册 vue-router
Vue.use(VueRouter);
// 实例化
const router = new VueRouter({
  //这里就是路由的配制项
  routes: [
    {
      path: '/',
      component: mingren //这里要填入一个组件名(填入import的名字)，也就是上面地址对应的组件
    },
    {
      path: '/zuozhu',
      component: zuozhu
    }
  ]
});

// Vue提示
Vue.config.productionTip = false;
new Vue({
  // 将router实例放在Vue里面
  router,
  render: h => h(App),
}).$mount('#app')
