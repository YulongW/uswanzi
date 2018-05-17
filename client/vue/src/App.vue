<template>
  <div id="app">
    <WanziHeader></WanziHeader>
    <WanziTracking></WanziTracking>
    <WanziFooter></WanziFooter>
  </div>
</template>

<script>
import WanziHeader from './components/WanziHeader';
import WanziFooter from './components/WanziFooter';
import WanziTracking from './components/WanziTracking';

export default {
  name: 'app',
  components: {
    WanziHeader,
    WanziFooter,
    WanziTracking
  }
};
</script>

<style>
body {
  font-family: Verdana, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif !important;
  /* https://www.zhihu.com/question/19911793 */
}

a {
  cursor: pointer;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 50px 18px 0;
}

#content {
  margin: 12px 0 20px;
}

#header,
#content {
  max-width: 414px;
  margin: 0 auto;
}

.bold {
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
