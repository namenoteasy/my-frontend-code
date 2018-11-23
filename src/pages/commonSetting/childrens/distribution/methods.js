import one from '../../../../libs/ol3-extend/img/one.png'
import two from '../../../../libs/ol3-extend/img/two.png'
import ball from '../../../../libs/ol3-extend/img/ball.png'
import ol from '../../../../libs/ol3/ol.js'
import mapConfig from '../../../../libs/ol3/ol_config.js'
export default {
  // 显示地图
  mapShow () {
    let layers = this.layers

      // 地图主窗体
    this.map = new ol.Map({
      layers: [
        new ol.layer.Group({
          title: '离线地图',
          layers: [
            // 底图,瓦片
            new ol.layer.Tile({
              title: '高德平面地图',
              type: 'base',
              visible: mapConfig.aMapOfflineVisible,
              source: new ol.source.TileImage({
                url: mapConfig.aMapOfflineUrl,
                project: mapConfig.mapProject
              })
            })
          ]// 高德地图
        }),
        new ol.layer.Group({
          title: '搜索设备点',
          layers: [
            layers.searchDevice // 设备点
          ]
        }),
        new ol.layer.Group({
          title: '叠加图层',
          layers: [
            layers.device,
            layers.parking,
            layers.berth
          ]
        })
      ], // 图层
      target: this.$refs.map, // 挂载在哪个对象上
      view: new ol.View({
        center: ol.proj.fromLonLat(mapConfig.center),
        project: mapConfig.mapProject,
        // minZoom: mapConfig.minZoom,
        // maxZoom: mapConfig.maxZoom,
        zoom: mapConfig.zoom
      }),
      loadTilesWhileAnimating: true, // 将这个设置为true，默认为false
      interactions: ol.interaction.defaults().extend([]),
      logo: mapConfig.attribution ? mapConfig.attributionLogo : null
    })
  },

  // 地图的各种图层
  layerSetting () {
    this.layers = {
      // 设备点层
      searchDevice: new ol.layer.Vector({
        title: '设备点图层',
        source: new ol.source.Vector()
      }),
      // 设备点层
      device: new ol.layer.Vector({
        title: '设备点图层',
        source: new ol.source.Vector(),
        style (f) {
          return new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 1],
              src: f.get('icon') ? f.get('icon') : one,
              imgSize: [32, 32]
            })
          })
        }
      }),
      // 停车点层
      parking: new ol.layer.Vector({
        title: '停车点图层',
        source: new ol.source.Vector(),
        style (f) {
          return new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 1],
              src: f.get('icon') ? f.get('icon') : two,
              imgSize: [32, 32]
            })
          })
        }
      }),
      // 泊位点层
      berth: new ol.layer.Vector({
        title: '泊位点图层',
        source: new ol.source.Vector(),
        style (f) {
          return new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 1],
              src: f.get('icon') ? f.get('icon') : ball,
              imgSize: [32, 32]
            })
          })
        }
      })

    }
  },

  // 添加元素
  addFeature (data, layerName) {
    // 设备点
    data.forEach((item) => {
      if (item.geometry != null && item.geometry !== '') {
        let geoArr = item.geometry.split(' ')
        let feature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([parseFloat(geoArr[0]), parseFloat(geoArr[1])], 'EPSG:4326', 'EPSG:3857'))
        })
        if (item.imgPath) {
          feature.setStyle(new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 1],
              src: item.focused ? item.imgSelectPath : item.imgPath,
              scale: 0.875
            })
          }))
          feature.setId(item.deviceId)
        }
        let source = this.layers[layerName].getSource()
        source.addFeature(feature)
      }
    })
  },

  // 清除地图上的指定图层
  clearFeature (layerName) {
    this.layers[layerName].getSource().clear()
  },
  // 点击列表一行
  focusToCenter (event, item) {
    _.each(this.searchDeviceData, (i) => {
      i.focused = false
    })
    item.focused = true

    this.methods('clearFeature', 'searchDevice')
    this.methods('addFeature', this.searchDeviceData, 'searchDevice')

    let geoArr = item.geometry.split(' ')
    this.map.getView().animate({center: ol.proj.transform([parseFloat(geoArr[0]), parseFloat(geoArr[1])], 'EPSG:4326', 'EPSG:3857')})
  },
  // 获取所有地点
  async getAllFeature () {
    let res = await this.request('listOverlay')
    this.deviceData = res.device
    this.parkingData = res.parking
    this.berthData = res.berth
  },
  // 查询设备
  async getDeviceFeature () {
    let res = await this.request('listDevice', {
      queryString: this.queryString
    })
    _.each(res, (item) => {
      item.focused = false
    })
    this.searchDeviceData = res
    return res
  },
  // 选择显示哪种点图层
  showLayer (layerName) {
    for (let key in this.layers) {
      if (key === 'searchDevice') { continue }
      this.layers[key].setVisible(false)
    }
    this.layers[layerName].setVisible(true)
  }
}
