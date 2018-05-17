<template lang="pug">
footer#footer.container-fluid
  div#footer-qrcode.row
    div.code.col-xs-7
      img(class="img-responsive" src="./../assets/qr.png")
      p.code-desc 微信号：
        span 小丸子妹
    div.txt.col-xs-5
      p
        strong 扫描二维码
      p 让小丸子带你
      p#buybuybuy
        strong 买
        strong 买
        strong 买!
  
  div#copyright-container
    small#copyright © uswanzi
</template>

<script>
export default {
  name: 'WanziFooter'
};
</script>

<style scoped>
#footer {
  margin-top: 30px;
}

#footer-qrcode {
  max-width: 360px;
  margin: 0 auto;
  position: relative;
}

#footer-qrcode .code {
  float: left;
  border: 1px solid #ccc;
  padding: 15px 15px 5px;
  margin: 0 0 10px 0;
}

#footer-qrcode .txt {
  padding-right: 0;
}

#footer-qrcode .code-desc {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}

#footer-qrcode p > span {
  color: #d2c199;
}

#footer-bg {
  position: relative;
}

#buybuybuy strong {
  display: block;
}
#buybuybuy strong:nth-child(1) {
  font-size: 18px;
}
#buybuybuy strong:nth-child(2) {
  font-size: 28px;
}
#buybuybuy strong:nth-child(3) {
  font-size: 38px;
}

#copyright-container {
  text-align: center;
  margin: 50px 0;
}
</style>
