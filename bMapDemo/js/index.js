// 框架 请勿改动

$(function () {
  var polygon = null
  var isShowDetails = false
  var mockData = [
    {
      lng: 104.08934,
      lat: 30.590685,
      userName: '张三',
      idCard: '510902199508776655',
      address: '四川省成都市锦江区银海芯座',
      gender: '女',
      nation: '汉',
      avatarUrl:
        'https://p8.itc.cn/images01/20210808/f822dbe92ee64acd95c6b8773bb69f55.png',
    },
    {
      lng: 104.064118,
      lat: 30.582588,
      userName: '张三2',
      idCard: '510902199508776644',
      address: '四川省成都市锦江区银海芯座',
      gender: '女',
      nation: '汉',
      avatarUrl:
        'https://pic1.zhimg.com/80/v2-43bb06e8f954a8ea29606dffefac1178_1440w.jpg',
    },
    {
      lng: 104.064317,
      lat: 30.575849,
      userName: '张三3',
      idCard: '510902199508776644',
      address: '四川省成都市锦江区银海芯座',
      gender: '女',
      nation: '汉',
      avatarUrl:
        'https://pic1.zhimg.com/80/v2-43bb06e8f954a8ea29606dffefac1178_1440w.jpg',
    },
    {
      lng: 104.072548,
      lat: 30.575808,
      userName: '张三4',
      idCard: '510902199508776644',
      address: '四川省成都市锦江区银海芯座',
      gender: '女',
      nation: '汉',
      avatarUrl:
        'https://pic1.zhimg.com/80/v2-43bb06e8f954a8ea29606dffefac1178_1440w.jpg',
    },
    {
      lng: 104.050473,
      lat: 30.574213,
      userName: '张三5',
      idCard: '510902199508776644',
      address: '四川省成都市锦江区银海芯座',
      gender: '女',
      nation: '汉',
      avatarUrl:
        'https://pic1.zhimg.com/80/v2-43bb06e8f954a8ea29606dffefac1178_1440w.jpg',
    },
  ]
  // 创建Map实例
  var map = new BMap.Map('map', { enableMapClick: false })
  map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放

  var handleInfoPopup = function (point, data, isOpen) {
    let opts = {
      width: 400, // 信息窗口宽度
      height: 140, // 信息窗口高度
    }

    let html =
      "<div style='height:140px;display:flex;justify-content: space-between;font-size:0.8vw;background:rgba(0,255,255,0.1)'>" +
      "<img style='width: 36%;height:100%' src=" +
      data.avatarUrl +
      " alt=''>" +
      "<div style='width:55%;height:100%;display:flex;justify-content: space-between;flex-flow:column;'>" +
      "<div style='display:flex;line-height:2.5vh;padding-right:10px;justify-content: space-between;border-bottom:1px solid rgba(255,255,255,.5)'>" +
      '<span>姓名：</span>' +
      '<span>' +
      data.userName +
      '</span>' +
      '</div>' +
      "<div style='line-height:2.5vh;padding-right:10px;display:flex;justify-content: space-between;border-bottom:1px solid rgba(255,255,255,.5)'>" +
      '<span>性别：</span>' +
      '<span>' +
      data.gender +
      '</span>' +
      '</div>' +
      "<div style='line-height:2.5vh;padding-right:10px;display:flex;justify-content: space-between;border-bottom:1px solid rgba(255,255,255,.5)'>" +
      '<span>民族：</span>' +
      '<span>' +
      data.nation +
      '</span>' +
      '</div>' +
      "<div style='line-height:2.5vh;padding-right:10px;display:flex;justify-content: space-between;border-bottom:1px solid rgba(255,255,255,.5)'>" +
      '<span>身份证号：</span>' +
      '<span>' +
      data.idCard +
      '</span>' +
      '</div>' +
      "<div style='line-height:2.5vh;padding-right:10px;display:flex;justify-content: space-between;border-bottom:1px solid rgba(255,255,255,.5)'>" +
      '<span>住址：</span>' +
      '<span>' +
      data.address +
      '</span>' +
      '</div>' +
      '</div>' +
      '</div>'
    let infoWindows = new BMap.InfoWindow(html, opts)
    if (isOpen) {
      map.openInfoWindow(infoWindows, point)
    } else {
      map.closeInfoWindow(infoWindows)
    }
  }

  var getBounds = function () {
    var bounds = map.getBounds() // 获取地图可视区域
    var sw = bounds.getSouthWest() // 获取西南角的经纬度(左下端点)
    var ne = bounds.getNorthEast() // 获取东北角的经纬度(右上端点)
    var wn = new BMap.Point(sw.lng, ne.lat) // 获取西北角的经纬度(左上端点)
    var es = new BMap.Point(ne.lng, sw.lat) // 获取东南角的经纬度(右下端点)

    polygon = new BMap.Polygon(
      [
        new BMap.Point(sw.lng, sw.lat), //左下
        new BMap.Point(wn.lng, wn.lat), //左上
        new BMap.Point(ne.lng, ne.lat), //右上
        new BMap.Point(es.lng, es.lat), //右下
      ],
      { strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5 }
    )
    console.log(polygon, 'polygon===')
  }

  var getMarker = function (point, avatarUrl, data) {
    var avatarSize = 60
    // 创建图标对象
    var myIcon = new BMap.Icon(
      avatarUrl,
      new BMap.Size(avatarSize, avatarSize),
      {
        offset: new BMap.Size(0, 0),
      }
    )
    myIcon.setImageSize(new BMap.Size(avatarSize, avatarSize)) //重点重点，设置图片大小
    // 创建标注对象并添加到地图
    var marker = new BMap.Marker(point, {
      icon: myIcon,
    })

    map.addOverlay(marker)
    marker.setAnimation(BMAP_ANIMATION_DROP) //坠落动画
    // 鼠标点击标注点
    marker.addEventListener('click', function (e) {
      handleInfoPopup(point, data, true)
    })
    // 鼠标移开标注点
    marker.addEventListener('mouseout', function () {
      handleInfoPopup(point, data, false)
    })
  }

  var IsInPolygon = function (x, y) {
    let point = new BMap.Point(x, y)
    if (BMapLib.GeoUtils.isPointInPolygon(point, polygon)) {
      console.log('在区域内')
      return true
    } else {
      console.log('不再区域内')
      return false
    }
  }
  // 删除所有标记点
  var deletePoint = function () {
    var allOverlay = map.getOverlays()
    for (var i = 0; i < allOverlay.length; i++) {
      map.removeOverlay(allOverlay[i])
    }
  }

  var listenerFunc = function () {
    getBounds()

    if (isShowDetails) {
      deletePoint()
      addmark()
    }
  }

  var renderMap = function () {
    // 初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom('成都市', 16) // 初始化地图,设置中心点坐标和地图
    // map.addOverlay(point)
    var geolocation = new BMap.Geolocation()
    var gc = new BMap.Geocoder() // 创建地理编码器
    // 开启SDK辅助定位
    // geolocation.enableSDKLocation()
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point)
        map.addOverlay(mk)
        var pt = r.point
        console.log(r.point, '当前位置经纬度===')
        map.panTo(pt) // 移动地图中心点
        getBounds()

        // gc.getLocation(pt, function (rs) {
        //   var addComp = rs.addressComponents

        //   var address =
        //     addComp.province +
        //     addComp.city +
        //     addComp.district +
        //     addComp.street +
        //     addComp.streetNumber
        //   console.log(address, '当前位置===')
        // })
      } else {
        console.error('failed' + this.getStatus())
      }
    })
  }

  var addmark = function () {
    for (var i = 0; i < mockData.length; i++) {
      ;(function (i) {
        var item = mockData[i]
        if (IsInPolygon(item.lng, item.lat)) {
          var point = new BMap.Point(item.lng, item.lat)
          getMarker(point, item.avatarUrl, item)
        }
      })(i)
    }
  }

  map.addEventListener('dragend', listenerFunc)
  map.addEventListener('zoomend', listenerFunc)

  $('#btn_test').on('click', function () {
    isShowDetails = true
    addmark()
  })
  var init = function () {
    renderMap()
  }

  init()
})
