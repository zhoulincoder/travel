
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入景点旅游
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
    <div class="test"></div>
  </div>
</template>

<script>
// 1rem = 50 px
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background-color $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      height .64rem
      background-color #fff
      border-radius .1rem
      padding-left .2rem
      margin-top .12rem
      line-height 0.64rem
      margin-left .2rem
      flex 1
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
      color #ffffff
      .arrow-icon
        margin-left .04rem
        font-size .24rem


</style>