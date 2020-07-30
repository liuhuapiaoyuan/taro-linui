export default {
  pages: [
    //输入radio
    'pages/components/form/pages/radio/index',
    //输入框textarea
    'pages/components/form/pages/textarea/index',
    //segment
    'pages/components/nav/pages/segment/index',

    //表单组件
    'pages/components/form/pages/rate/index',
    'pages/components/form/pages/input/index',
    // 'tabbar'
    'pages/components/nav/pages/tabbar/index',
    //进度条
    'pages/components/view/pages/progress/index',
    //视图--countdown组件
    'pages/components/view/pages/countdown/index',
    //吸顶组件-基础用法
    'pages/components/layout/pages/sticky/pages/sticky-base/index',
    //吸顶组件
    'pages/components/layout/pages/sticky/index',
    //IndexList
    'pages/components/layout/pages/index-list/index',
    'pages/home/home',
    'pages/content/index',
    'pages/about/about',

    //按钮
    'pages/components/basic/button/index',
    //list
    'pages/components/layout/pages/list/index',
    'pages/index/index',
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