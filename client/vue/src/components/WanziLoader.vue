<template lang="pug">
div.loader
  div.ball-scale-multiple
    div
    div
    div
</template>

<script>
export default {
  name: 'WanziLoader',
  data() {
    return {
    };
  }
};
</script>

<style scoped>
@-webkit-keyframes scale {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; }
  45% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 0.7; }
  80% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; } }
@keyframes scale {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; }
  45% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 0.7; }
  80% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; } }

@-webkit-keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 0; }
  5% {
    opacity: 1; }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }

@keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 0; }
  5% {
    opacity: 1; }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }

.ball-scale-multiple {
  position: relative;
  -webkit-transform: translateY(-30px);
          transform: translateY(-30px); }
  .ball-scale-multiple > div:nth-child(2) {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s; }
  .ball-scale-multiple > div:nth-child(3) {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s; }
  .ball-scale-multiple > div {
    background-color: #1cb495;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    position: absolute;
    left: -30px;
    top: 0px;
    opacity: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
            animation: ball-scale-multiple 1s 0s linear infinite; }

</style>
