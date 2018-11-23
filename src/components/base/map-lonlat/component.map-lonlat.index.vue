<template>
  <div>
    <p style="margin-bottom: 17px;">请拖动地图来改变坐标</p>
    <div class="gray-border map-dialog">
      <div style="position: relative;">
        <div ref="map" @contextmenu.prevent="preventContextMenu">

        </div>
        <img width="56" height="56" src="../../../../static/image/坐标.png" ref="anchor" alt="">
      </div>
      <el-form style="padding: 12px;background-color: #FAFAFA;border-top:1px solid #ddd;">
        <el-form-item label="坐标拾取">
          <div style="display:inline-block;width: 220px;margin-right: 20px;">
            <el-input v-model="center.longitude"></el-input>
          </div>
          <div style="display:inline-block;width: 220px;">
            <el-input v-model="center.latitude"></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div style="text-align: right;margin-top:17px;">
      <el-button type="primary" @click="closeMap">确定</el-button>
    </div>
  </div>
</template>
<style lang="scss">
  /*Openlayers样式*/
  @import '../../../libs/ol3/ol.css';
  /*Openlayers扩展样式*/
  @import '../../../libs/ol3-extend/ol-extend.css';
  @import "./index.scss";
</style>
