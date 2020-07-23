export const data = {
  config: {
    show: true,
    selected: 0,
    color: '#707070',
    selectedColor: '#3963BC',
    borderStyle: '#f6f6f6',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: '/pages/index/index',
        iconPath: require('../../images/tab-icon/home.png'),
        selectedIconPath: require('../../images/tab-icon/home_fill1.png'),
        text: '首页'
      }, {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/cart.png'),
        badge: '20',
        selectedIconPath: require('../../images/tab-icon/cart_fill.png'),
        text: '购物车'
      },
      {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/my.png'),
        selectedIconPath: require('../../images/tab-icon/my_fill1.png'),
        text: '我的'
      },
    ]
  },

  config2: {
    show: true,
    selected: 0,
    color: '#707070',
    selectedColor: '#3963BC',
    borderStyle: '#f6f6f6',
    backgroundColor: '#fff',
    fontSize: 11,
    list: [
      {
        pagePath: '/index/index',
        iconPath: require('../../images/tab-icon/home.png'),
        iconSize: 25,
        selectedIconPath: require('../../images/tab-icon/home_fill1.png'),
        text: '首页'
      }, {
        pagePath: '/index2/index',
        iconSize: 25,

        iconPath: require('../../images/tab-icon/cart.png'),
        selectedIconPath: require('../../images/tab-icon/cart_fill.png'),
        text: '购物车'
      }, {
        iconSize: 25,
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/discover.png'),
        redDot: true,
        selectedIconPath: require('../../images/tab-icon/discover_fill.png'),
        text: '发现'
      }, {
        iconSize: 25,
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/my.png'),
        selectedIconPath: require('../../images/tab-icon/my_fill1.png'),
        text: '我的'
      },
    ]
  },
  config3: {
    show: true,
    selected: 0,
    color: '#707070',
    selectedColor: '#ef6c13',
    borderStyle: '#f6f6f6',
    backgroundColor: '#fff',
    fontSize: 11,
    list: [
      {
        pagePath: '/index/index',
        iconPath: require('../../images/tab-icon/favor.png'),
        selectedIconPath: require('../../images/tab-icon/favor_fill.png'),
        text: '发现'
      }, {
        pagePath: '/index/index',
        iconPath: require('../../images/tab-icon/discover.png'),
        selectedIconPath: require('../../images/tab-icon/discover_fill2.png'),
        text: '我的音乐'
      }, {
        pagePath: '/index2/index',
        iconSize: 40,
        iconPath: require('../../images/tab-icon/video.png'),
        selectedIconPath: require('../../images/tab-icon/video_fill.png'),
        // text: ""
      }, {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/mark.png'),
        badge: 99,
        selectedIconPath: require('../../images/tab-icon/mark_fill1.png'),
        text: '音乐圈'
      }, {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/my.png'),
        redDot: false,
        selectedIconPath: require('../../images/tab-icon/my_fill2.png'),
        text: '个人中心'
      },
    ]
  },
  config4: {
    show: true,
    selected: 0,
    color: '#707070',
    selectedColor: '#f4ea2a',
    borderStyle: '#f6f6f6',
    backgroundColor: '#fff',
    fontSize: 22,
    list: [
      {
        pagePath: '/index/index',
        iconPath: require('../../images/tab-icon/home.png'),
        selectedIconPath: require('../../images/tab-icon/home_fill.png'),
        text: '首页'
      }, {
        pagePath: '/index/index',
        iconPath: require('../../images/tab-icon/baby.png'),
        selectedIconPath: require('../../images/tab-icon/baby_fill.png'),
        text: '鱼塘'
      }, {
        pagePath: '/index2/index',
        iconSize: 50,
        style: 'circle',
        iconPath: require('../../images/tab-icon/add.png'),
        selectedIconPath: require('../../images/tab-icon/add.png'),
        text: '发布'
      }, {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/mark.png'),
        badge: 99,
        selectedIconPath: require('../../images/tab-icon/mark_fill.png'),
        text: '消息'
      }, {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/my.png'),
        redDot: true,
        selectedIconPath: require('../../images/tab-icon/my_fill.png'),
        text: '我的'
      },
    ]
  },

  config5: {
    show: true,
    selected: 0,
    color: '#fff',
    selectedColor: '#f8ee28',
    borderStyle: '#f6f6f6',
    backgroundImg: 'https://wx4.sinaimg.cn/mw690/005QbH5Kly1fzr6hrfi6cj30ks02qq2w.jpg',
    fontSize: 22,
    list: [
      {
        pagePath: '/index/index',
        iconPath: require('../../images/tab-icon/tao.png'),
        selectedIconPath: require('../../images/tab-icon/tao1.png'),
        text: '首页'
      }, {
        pagePath: '/index/index',
        iconPath: require('../../images/tab-icon/we.png'),
        selectedIconPath: require('../../images/tab-icon/we_fill.png'),
        text: '微淘'
      }, {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/mark1.png'),
        selectedIconPath: require('../../images/tab-icon/mark_fill.png'),
        text: '消息'
      }, {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/cart1.png'),
        badge: 99,
        selectedIconPath: require('../../images/tab-icon/cart_fill2.png'),
        text: '购物车'
      }, {
        pagePath: '/index2/index',
        iconPath: require('../../images/tab-icon/people.png'),
        redDot: true,
        selectedIconPath: require('../../images/tab-icon/people_fill1.png'),
        text: '我的淘宝'
      },
    ]
  }
}