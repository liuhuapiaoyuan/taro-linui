export default {
  pages: [
    'pages/index/index',
    'pages/home/home',
    'pages/about/about',
    'pages/content/index',

    //按钮
    'pages/components/basic/button/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'TaroLinUI',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    "color": "#bbbbbb",
    "selectedColor": "#3963BC",
    "backgroundColor": "#ffffff",
    "borderStyle": "white",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "组件",
        "iconPath": "./images/tabbar/base.png",
        "selectedIconPath": "./images/tabbar/base-select.png"
      },
      {
        "pagePath": "pages/home/home",
        "text": "过滤器",
        "iconPath": "./images/tabbar/filter.png",
        "selectedIconPath": "./images/tabbar/filter-select.png"
      },
      {
        "pagePath": "pages/about/about",
        "text": "关于",
        "iconPath": "./images/tabbar/team.png",
        "selectedIconPath": "./images/tabbar/team-select.png"
      }
    ]
  },
} 