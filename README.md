多页应用：页面跳转-返回新的html文件；首屏时间快，seo效果好（搜索引擎识别html文件）；页面切换慢。

单页应用：页面跳转-js渲染；页面切换快，首屏时间慢，seo效果差。

vuex   vue-router后期需要深入查看

# 1. 项目配置

对文件的引用路径和本地数据请求代理

```javascript
// webpack.base.conf.js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
      'common': resolve('src/common')
    }
  },
// config/index.js
 proxyTable: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
```

# 2. 首页

## 2.1 Header中字体图标的使用

1. 打包下载好字体，将iconfont.css文件引入（修改其中关于iconfot.ttf，iconfont.eot，iconfont.wof，iconfont.svg的引入）。
2. `<div class="iconfont back-icon">&#xe624;</div>`在布局中使用。

## 2.2 Icons可滑动的图标菜单

在main.js中引入swiper样式后，循环布局分页显示：

```html
<swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
    </swiper-slide>
</swiper>
```

使用计算属性，计算图标分页：

```javascript
computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8) // 图片显示的页码
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
```



## 2.3 城市搜索

```html
<template>
  <div>
      // 输入内容框
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
      // 搜索结果显示列表
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
```

对绑定的数据keyword进行监听，对cities数据进行检索，查找函数keyword的元素，将其插入新的数组中

```javascript
watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.keyword) {
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach(value => {
                // indexOf方法，返回指定字符串首字符首次出现的位置
              if (
                value.spell.indexOf(this.keyword) > -1 ||
                value.name.indexOf(this.keyword) > -1
              ) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      } else {
        this.list = []
      }
    }
  },
}
```

## 2.4 递归组件

```html
<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
```

```json
"categoryList": [{
        "title": "成人票",
        "children": [{
          "title": "成人三馆联票",
          "children": [{
            "title": "成人三馆联票 - 某一连锁店销售"
          }]
        },{
          "title": "成人五馆联票"
        }]
      }, {
        "title": "学生票"
      }, {
        "title": "儿童票"
      }, {
        "title": "特惠票"
      }]
```

