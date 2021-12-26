<template>
  <div class="j-container">
    <div class="j-container_title">
      <img class="logo" src="@/assets/logo.png" alt="" />
      <span> 颜色分辨力挑战 </span>
    </div>
    <!-- <div class="j-container_ornament"></div> -->
    <div class="j-container_main">
      <div class="j-container_header">
        <slot name="header"></slot>
      </div>
      <div class="j-container_body">
        <slot></slot>
      </div>
      <div class="j-container_footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>
<style lang="scss">
.j-container {
  // border: 1px solid #ddd;

  max-width: 600px;
  width: 95%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.j-container_title {
  position: absolute;
  top: -90px;
  // top: -126px;
  width: 100%;
  text-align: center;
  color: #f77635;
  font-size: 36px;
  z-index: 1;

  .logo {
    width: 60px;
    height: 60px;
    vertical-align: middle;
    // position: absolute;
    // left: -68px;
    // top: -4px;
  }

  span {
    vertical-align: middle;
    // position: relative;
  }
}

.j-container_main {
  border-radius: 30px;
  // background-color: hsla(0, 0%, 100%, 0.55);
  background-color: #fff;
  box-shadow: 0 10px 12px 0 rgb(2 25 44 / 26%);
  border: 5px solid rgba(124, 225, 255, 0.55);
  // border: 5px solid rgb(120 224 255);
}

.j-container_header {
}

.j-container_body {
  // max-height: 280px;
  // overflow: auto;
  margin: 0 45px;
  // box-sizing: border-box;
  // padding: 18px;
  // background-color: #fff;
  // border: 1px solid #b0eafb;
  // line-height: 30px;
  // color: #555;
  // font-size: 20px;
  // text-indent: 40px;
}

.j-container_footer {
  padding: 28px 0 40px;
  text-align: center;
}

// .j-container_ornament {
//   background: url('@/assets/icons.png') no-repeat 99.699% 0;
//   background-size: 510px auto;
//   width: 178px;
//   height: 95px;
//   position: absolute;
//   top: 0;
//   right: -40px;
//   transform: translateY(-98%);
// }
</style>
