var mapConfig = {
    // aMapOfflineUrl: window.MAP_SERVER, //地图地址
    aMapOfflineUrl: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}', //高德离线平面地图（本地调试服）
    aMapOfflineVisible: true, //是否显示
    mapProject: 'EPSG:4326', //地图使用的投影：WGS84坐标系，球面墨卡托投影，用经纬度做单位的x/y坐标
    sysProject: 'EPSG:3857', //系统使用的投影：WGS84坐标系，球面墨卡托投影，用“米”做单位的x/y坐标
    center: [108.203912,22.348830], //地图初始中心点
    extent: [108.653912,21.978830, 108.653912,21.978830], //地图初始范围
    zoom: 10, //地图初始级别
    minZoom: 9, //缩放最小级别
    maxZoom: 18, //缩放最大级别,
    mapHeight: 0, //地图高度，设置为0则取屏幕高度
    mousePositionControl: true, //鼠标位置经纬度显示栏是否显示
    layerSwitcher: false, //地图图层控制栏是否显示
    overviewMap: false, //鹰眼图是否显示
    scaleLine: false, //比例尺是否显示
    fullScreen: false, //全屏功能是否可用
    zoomToExtent: false, //返回地图初始范围是否可用
    attribution: false, //系统版权信息是否显示
    copyright: '&copy; <a href="http://www.signalway.com.cn" target="_blank">北京信路威科技股份有限公司</a>',
    attributionLogo: 'ol3/img/logo.png'
};
export default mapConfig;
