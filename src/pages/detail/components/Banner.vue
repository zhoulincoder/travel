<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/p/tts8/1708/cf/3a4f35b9e4636502.jpg_r_640x420x90_06bdec70.jpg" />
      <div class="banner-info">
        <div class="banner-title">长隆旅游度假区（AAA）</div>
        <div class="banner-number">
          <span>1/16</span>
          <span class="iconfont banner-icon">&#xe796;</span>
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"/>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://img1.qunarzz.com/p/tts8/1708/cf/3a4f35b9e4636502.jpg_r_1280x840x90_092cf7a8.jpg', 'https://img1.qunarzz.com/p/tts8/1708/cf/3a4f35b9e4636502.jpg_r_1280x840x90_092cf7a8.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height 0.6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        font-size .32rem
        padding 0 .2rem
        flex 1
      .banner-number
        display flex
        height 0.32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .2rem
        border-radius .2rem
        // background rgba(0, 0, 0, .5)
        font-size .24rem
        vertical-align middle
        .banner-icon
          font-size .32rem
          width 100%
</style>
