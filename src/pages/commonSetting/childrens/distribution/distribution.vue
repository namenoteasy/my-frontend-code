<template>
  <t-container title="分布图">
    <t-stretch-container style="position:relative;border:none">
      <div style="height: 100%" ref="map" @contextmenu.prevent="preventContextMenu">

      </div>
      <!--搜索栏-->
      <div class="searcher">
        <el-input v-model="queryString" size="medium" placeholder="输入SN/停车点编号/泊位编号/名称">
          <i @click="getDeviceFeature" slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <t-stretch-container style="margin-top:10px" :offset="66">
          <ul class="map-list">
            <!--循环-->
            <li v-for="item in searchDeviceData" :class="{'list-item': true,focused:item.focused}" @click="focusToCenter($event,item)">
              <div class="list-icon children-center">
                <img v-if="item.focused===false" width="46" height="46" :src="item.imgPath" :alt="item.deviceType">
                <img v-else width="46" height="46" :src="item.imgSelectPath" :alt="item.deviceType">
              </div>
              <div class="list-content">
                <p>{{item.title}}</p>
                <p>{{item.alt}}</p>
              </div>
            </li>
          </ul>
        </t-stretch-container>
      </div>
      <el-radio-group v-model="layerRadio" class="layer-button-group" @change="showLayer($event)">
        <el-radio-button label="device">设备</el-radio-button>
        <el-radio-button label="parking">停车点</el-radio-button>
        <el-radio-button label="berth">泊位</el-radio-button>
      </el-radio-group>
    </t-stretch-container>
  </t-container>
</template>
<style lang="scss">
  /*Openlayers样式*/
  @import '../../../../libs/ol3/ol.css';
  /*Openlayers扩展样式*/
  @import '../../../../libs/ol3-extend/ol-extend.css';
  @import "index.scss";
</style>
