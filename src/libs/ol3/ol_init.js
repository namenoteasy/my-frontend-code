var mapInit = function () {

};
export default mapInit;

//高德离线平面地图
var aMapOfflineLayer = new ol.layer.Tile({
  title: '高德平面地图',
  type: 'base',
  visible: mapConfig.aMapOfflineVisible,
  source: new ol.source.TileImage({
    url: mapConfig.aMapOfflineUrl,
    project: mapConfig.mapProject
    //crossOrigin: 'anonymous', //跨域访问设置
    //attributions: mapConfig.attribution ? [mapConfig.copyright] : []
  })
});

//鹰眼地图
var overviewMapLayer = new ol.layer.Tile({
  source: new ol.source.TileImage({
    url: mapConfig.aMapOfflineUrl, //高德离线平面地图
    project: mapConfig.mapProject
  })
});

//元素图层
var elementSource = new ol.source.Vector({
  wrapX: false,
  features: []
});
var elementLayer = new ol.layer.Vector({
  title: '元素图层',
  source: elementSource
});

//高亮元素图层
var elementCursorSource = new ol.source.Vector({
  wrapX: false,
  features: []
});
var elementCursorLayer = new ol.layer.Vector({
  title: '高亮元素图层',
  source: elementCursorSource
});

//选择绘制图层
var drawSource = new ol.source.Vector({wrapX: false});
var drawStyle = new ol.style.Style({
  image: new ol.style.Circle({
    radius: 6,
    snapToPixel: false,
    stroke: new ol.style.Stroke({
      width: 2,
      color: [255, 255, 0, 1]
    }),
    fill: new ol.style.Fill({
      color: [255, 255, 255, 0.2]
    })
  }),
  stroke: new ol.style.Stroke({
    width: 2,
    color: [255, 255, 0, 1]
  }),
  fill: new ol.style.Fill({
    color: [255, 255, 255, 0.2]
  })
});
var drawLayer = new ol.layer.Vector({
  title: '选择绘制图层',
  source: drawSource,
  style: drawStyle
});

//图层集合
var mapLayers = [
  new ol.layer.Group({
    title: '离线地图',
    layers: [aMapOfflineLayer]
  }),
  new ol.layer.Group({
    title: '叠加图层',
    layers: [drawLayer, elementLayer, elementCursorLayer]
  })
];

//控制器集合
var mapControls = [];

//鼠标位置经纬度显示栏是否显示
if (mapConfig.mousePositionControl == true) {
  mapControls.push(new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(6),
    projection: mapConfig.mapProject,
    showZoom: true,
    isgcj: true,
    className: 'custom-mouse-position',
    undefineHTML: '&nbsp;'
  }));
}

//地图图层控制栏是否显示
if (mapConfig.layerSwitcher == true) {
  mapControls.push(new ol.control.LayerSwitcher());
}

//鹰眼图是否显示
if (mapConfig.overviewMap == true) {
  mapControls.push(new ol.control.OverviewMap({
    className: 'ol-overviewmap custom-overviewmap',
    layers: [overviewMapLayer],
    collapseLabel: '\u00BB',
    label: '\u00AB',
    collapsed: false,
    tipLabel: '折叠/展开鹰眼图'
  }));
}

//比例尺是否显示
if (mapConfig.scaleLine == true) {
  mapControls.push(new ol.control.ScaleLine({
    className: 'custom-scale-line ol-scale-line'
  }));
}

//全屏功能是否可用
if (mapConfig.fullScreen == true) {
  mapControls.push(new ol.control.FullScreen({
    className: 'ol-full-screen custom-full-screen',
    tipLabel: '全屏'
  }));
}

//返回地图初始范围是否可用
if (mapConfig.zoomToExtent == true) {
  mapControls.push(new ol.control.ZoomToExtent({
    extent: ol.proj.transformExtent(mapConfig.extent, mapConfig.mapProject, mapConfig.sysProject),
    className: 'custom-zoom-extent',
    tipLabel: '返回起始点',
    label: '●'
  }));
}

//重定义缩放按钮的位置
var controlOptions = {
  zoomOptions: {className: 'custom-zoom'},
  attribution: mapConfig.attribution,
  rotateOptions: {
    className: 'ol-rotate custom-rotate',
    tipLabel: '恢复方向为正北'
  }
};

//地图主窗体
var map = new ol.Map({
  layers: mapLayers,
  target: document.getElementById('map'),
  view: new ol.View({
    center: ol.proj.fromLonLat(mapConfig.center),
    project: mapConfig.mapProject,
    zoom: mapConfig.zoom,
    minZoom: mapConfig.minZoom,
    maxZoom: mapConfig.maxZoom
  }),
  controls: ol.control.defaults(controlOptions).extend(mapControls),
  interactions: ol.interaction.defaults().extend([]),
  logo: mapConfig.attribution ? mapConfig.attributionLogo : null
});

//屏蔽地图右键菜单
document.getElementById('map').oncontextmenu = function (evt) {
  //evt.preventDefault();
}

//地图弹出框
var popoverLayer = new ol.Overlay({
  element: document.createElement('div')
});
map.addOverlay(popoverLayer);

//选择绘制提示标签
var drawTooltipLayer = new ol.control.Tooltip();
map.addOverlay(drawTooltipLayer);

//地图元素提示标签
var featureTooltipLayer = new ol.control.Tooltip();
map.addOverlay(featureTooltipLayer);

//地图选择绘制操作
var drawInteraction;
var drawTooltips = {
  Point: '点击地图选择，Esc键取消',
  LineString: '点击地图开始绘制，双击结束，Esc键取消',
  Polygon: '点击地图开始绘制，双击结束，Esc键取消',
  Rect: '点击地图开始绘制，再次点击结束，Esc键取消',
  Circle: '点击地图开始绘制，再次点击结束，Esc键取消'
};
var mapDraw = function (type, func, escfunc, msg) {
  map.removeInteraction(drawInteraction);
  drawSource.clear();
  if (type == 'Rect') {
    drawInteraction = new ol.interaction.Draw({
      source: drawSource,
      type: 'Circle',
      geometryFunction: ol.interaction.Draw.createBox()
    });
  } else {
    drawInteraction = new ol.interaction.Draw({
      source: drawSource,
      type: type
    });
  }
  map.addInteraction(drawInteraction);
  //绘图完成触发函数
  var drawFunc = function (evt) {
    if (func) {
      func(evt);
    }
    drawTooltipLayer.hide();
    setTimeout(function () {
      map.removeInteraction(drawInteraction);
    }, 10); //延迟执行解决双击结束绘图时会触发地图放大问题
  };
  drawInteraction.on('drawend', drawFunc);
  drawTooltipLayer.show(msg ? msg : drawTooltips[type]);

  //ESC键退出绘图操作
  document.onkeydown = function (evt) {
    if (evt.which == 27) {
      mapDrawCancel();
      if (escfunc) {
        escfunc(evt);
      }
    }
  }
};
var mapDrawCancel = function () {
  drawSource.clear();
  drawTooltipLayer.hide();
  map.removeInteraction(drawInteraction);
  //ESC键退出绘图操作
  document.onkeydown = null;
};

//地图事件监听
map.on('click', function (evt) {
  //弹出框出现
  var element = popoverLayer.getElement();
  var feature = map.forEachFeatureAtPixel(evt.pixel,
    function (feature) {
      return feature;
    });
  if (feature) {
    if (feature.get('popover') == true) {
      $(element).popover('destroy');
      setTimeout(function () {
        $(element).popover({
          placement: 'auto',
          title: feature.get('title'),
          content: '<div class="ol-popover">' + feature.get('content') + '</div>',
          html: true
        });
        var coordinate = evt.coordinate;
        popoverLayer.setPosition(coordinate);
        $(element).popover('show');
      }, 250);
    } else {
      $(element).popover('destroy');
    }
  } else {
    $(element).popover('destroy');
  }
});
map.on('pointermove', function (evt) {
  var feature = map.forEachFeatureAtPixel(evt.pixel,
    function (feature) {
      return feature;
    });
  if (feature) {
    //设置标题的元素出现提示框
    if (feature.get('title')) {
      featureTooltipLayer.show(feature.get('title'));
    } else {
      featureTooltipLayer.hide();
    }
    //设置弹框的元素出现手指鼠标手势
    if (feature.get('popover') == true) {
      map.getTarget().style.cursor = 'pointer';
    } else {
      map.getTarget().style.cursor = 'auto';
    }
  } else {
    map.getTarget().style.cursor = 'auto';
    featureTooltipLayer.hide();
  }

  //提示框跟随移动
  drawTooltipLayer.setPosition(evt.coordinate);
  featureTooltipLayer.setPosition(evt.coordinate);
});
//测试获取地图经纬度用
//map.on('dblclick', function (evt) {
//    var c = ol.proj.toLonLat(evt.coordinate);
//    document.getElementById('show_latlon').innerHTML = c[0].toFixed(6) + ', ' + c[1].toFixed(6);
//});

//修改图层
var modifyFeatures = new ol.Collection();
var modifyFeatureOverlay = new ol.layer.Vector({
  source: new ol.source.Vector({features: modifyFeatures}),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      width: 5,
      color: [0, 153, 255, 1]
    })
  })
});
modifyFeatureOverlay.setMap(map);
var modifyInteraction = new ol.interaction.Modify({
  features: modifyFeatures,
  deleteCondition: function (event) {
    return ol.events.condition.shiftKeyOnly(event) &&
      ol.events.condition.singleClick(event);
  }
});
map.addInteraction(modifyInteraction);

