export const data = {
  placement: 'left',
  placementArr: ['top', 'left', 'right', 'bottom'],
  iconTabs: [{
    tab: '购物车',
    key: 'cart',
    icon: 'cart',
    picPlacement: 'left'

  }, {
    tab: '历史记录',
    key: 'history',
    icon: 'history',
    picPlacement: 'left'
  }, {
    tab: '我的',
    key: 'mine',
    icon: 'user',
    picPlacement: 'left'
  }],
  imagesTabs: [{
    tab: '客厅',
    key: 'dining',
    picPlacement: 'top',
    image: {
      activeImage: require('../../images/tab-icon/dining-active.png'),
      defaultImage: require('../../images/tab-icon/dining.png'),
    }
  },
  {
    tab: '卧室',
    key: 'badroom',
    picPlacement: 'top',
    image: {
      activeImage: require('../../images/tab-icon/badroom-active.png'),
      defaultImage: require('../../images/tab-icon/badroom.png'),
    }
  }, {
    tab: '厨房',
    key: 'kichten',
    picPlacement: 'top',
    image: {
      activeImage: require('../../images/tab-icon/kichten-active.png'),
      defaultImage: require('../../images/tab-icon/kichten.png'),
    }
  },
  {
    tab: '浴室',
    key: 'bathroom',
    picPlacement: 'top',
    image: {
      activeImage: require('../../images/tab-icon/bathroom-active.png'),
      defaultImage: require('../../images/tab-icon/bathroom.png'),
    }
  }
  ],
  brageCount: 5
}
