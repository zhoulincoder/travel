<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
       
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
       recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/p/tts9/1809/f0/dfcedf0e0b984702.jpg_r_480x320x90_c98002f9.jpg',
          title: '南昌-巴厘岛七天游玩',
          desc: '烂漫浪吗烂漫浪吗烂漫浪吗烂漫浪吗烂漫'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/fd121193-f155-4fcd-86b9-13c0a194aa45.jpg_r_480x320x90_41c79014.jpg',
          title: '南昌-巴厘岛七天游玩哈',
          desc: '烂漫浪吗烂漫浪吗烂漫浪吗烂漫ellipsis()ellipsis()浪吗烂漫'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/b684b0e6-89a7-452c-9f4a-e9f192cd119c.jpg_r_480x320x90_5bbbfed3.jpg',
          title: '南昌-巴厘岛七天游玩的',
          desc: '烂漫浪吗烂漫浪吗烂漫浪吗烂浪吗烂漫吗烂浪吗烂吗烂浪吗烂吗烂浪吗烂吗烂浪吗烂吗烂浪吗烂吗烂浪吗烂'
        }
      ]
    }
   
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins'
  .title
    margin-top .2rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height 0.54rem
      font-size .32rem
    .item-desc
      line-height: .4rem
      ellipsis()
      color #cccccc
    


</style>