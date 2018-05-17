<template lang="pug">
header#header.container-fluid
  div#logo-container.row
    div.col-xs-12
      img#logo.img-responsive(src="./../assets/logo-250.png")
  
  div#header-title.row
    div.col-xs-12
      h1.bold 小丸子美国代购
</template>

<script>
export default {
  name: 'WanziHeader',
  data() {
    return {
    };
  }
};
</script>

<style scoped>
#logo {
  animation: bounce-in 0.6s;
  transform: rotate(0deg) scale(1) translateZ(0);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  margin: 0 auto 18px;
  width: 166.66px;
}
#logo:hover {
  transform: rotate(-15deg) scale(1.1);
}
@keyframes bounce-in {
  0% {
    opacity: 1;
    transform: scale(.3);
  } 
  50% {
    opacity: 1;
    transform: scale(1.1);
  } 
  70% {
    opacity: 1;
    transform: scale(.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
