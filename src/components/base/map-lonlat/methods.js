import ol from '../../../libs/ol3/ol.js'
import mapConfig from '../../../libs/ol3/ol_config.js'
export default {
  // 显示地图
  mapShow () {
    // 地图主窗体
    let map = this.map = new ol.Map({
      layers: this.mapLayers, // 图层
      target: this.$refs.map, // 挂载在哪个对象上
      view: new ol.View({
        center: ol.proj.fromLonLat(mapConfig.center),
        project: mapConfig.mapProject,
        zoom: mapConfig.zoom,
        minZoom: mapConfig.minZoom,
        maxZoom: mapConfig.maxZoom
      }),
      loadTilesWhileAnimating: true, // 将这个设置为true，默认为false
      interactions: ol.interaction.defaults().extend([]),
      logo: mapConfig.attribution ? mapConfig.attributionLogo : null
    })

    // 下面把上面的图标附加到地图上，需要一个ol.Overlay
    let anchor = new ol.Overlay({
      element: this.$refs.anchor,
      positioning: 'bottom-center'
    })
    // 关键的一点，需要设置附加到地图上的位置
    anchor.setPosition(ol.proj.fromLonLat(mapConfig.center))
    // 然后添加到map上
    map.addOverlay(anchor)

    map.on('pointermove', (event) => {
      let center = map.getView().getCenter()
      anchor.setPosition(center)
      let centerLonLat = ol.proj.toLonLat(center)
      this.center.longitude = centerLonLat[0].toFixed(4)
      this.center.latitude = centerLonLat[1].toFixed(4)
    })
  },

  // 地图的各种层
  layerSetting () {
    let layers = {
      // 底图,瓦片
      tile: new ol.layer.Tile({
        title: '高德平面地图',
        type: 'base',
        visible: mapConfig.aMapOfflineVisible,
        source: new ol.source.TileImage({
          url: mapConfig.aMapOfflineUrl,
          project: mapConfig.mapProject
        })
      })

    }

    this.mapLayers = [
      new ol.layer.Group({
        title: '离线地图',
        layers: [layers.tile]// 高德地图
      })
    ]
  },
  closeMap () {
    this.$emit('change-location', this.center)
  }

}
