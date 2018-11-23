<template>
  <t-container title="图像/巡检">
    <!--搜索-->
    <t-search right-width="260">
      <el-form :inline="true" :model="requestData" slot="searchLeft">
        <el-form-item label="设备类型" label-width="70px">
          <t-dict-select v-model="requestData.evt" type="evt"></t-dict-select>
        </el-form-item>
        <el-form-item label="停车点" label-width="70px">
          <t-parking-select v-model="requestData.parkingCode"></t-parking-select>
        </el-form-item>
      </el-form>
      <div slot="searchRight">
          <span style="margin-right: 20px;">
            <span style="line-height: 34px;">告警优先</span>
            <el-switch v-model="requestData.alarmFirst" @change="clickAlertFirst"></el-switch>
          </span>
          <el-button type="primary" @click="clickFreshDeviceList">刷新本页图像</el-button>
      </div>
    </t-search>
    <!--/搜索-->
    <!--图片列表-->
    <t-viewer>
    <t-stretch-container class="mt-17">
        <t-img-list imgDefaultHeight="300" :imgData="imgList">
          <template slot-scope="scope">
            <t-device-live-img :item="scope.item">
              <span class="manualAlarm"  @click="alarmManual(scope)">人工告警{{scope.width}}</span>
            </t-device-live-img>
          </template>
        </t-img-list>
    </t-stretch-container>
    </t-viewer>
    <!--弹窗-->
    <el-dialog top="17px" width="1280px" :title="`${detailData.alarmType} - ${detailData.parkingName} - ${detailData.parkingCode}`" :visible.sync="dialogTableVisible">
      <el-container>
        <el-main>
          <!--大图-->
          <t-viewer>
            <t-img-lazyload  class="big-img" :src="detailData.imgPath" >
            </t-img-lazyload>
          </t-viewer>
          <!--大图-->
        </el-main>
        <el-aside width="440px">
          <t-dialog-info-box title="停车点信息" class="gray-border">
            <ul class="info-content">
              <li class="item">
                <span class="label">停车区域编码</span>
                <span class="content">{{detailData.parkingCode}}</span>
              </li>
              <li class="item">
                <span class="label">停车区域名称</span>
                <span class="content">{{detailData.parkingName}}</span>
              </li>
              <li class="item">
                <span class="label">设备类型</span>
                <span class="content">{{detailData.deviceType}}</span>
              </li>
              <li class="item">
                <span class="label">设备编号</span>
                <span class="content">{{detailData.deviceCode}}</span>
              </li>
              <li class="item">
                <span class="label">设备名称</span>
                <span class="content">{{detailData.deviceName}}</span>
              </li>
            </ul>
          </t-dialog-info-box>
          <t-dialog-info-box title="当前状态" class="gray-border margin-top">
            <ul class="info-content">
              <li class="item">
                <span class="label">上传时间</span>
                <span class="content">{{detailData.uploadTime}}</span>
              </li>
              <li class="item">
                <span class="label">产品温度</span>
                <span class="content">{{detailData.productTemperature}}</span>
              </li>
              <li class="item">
                <span class="label">CPU使用率</span>
                <span class="content">{{detailData.cpuUsage}}</span>
              </li>
              <li class="item">
                <span class="label">内存使用率</span>
                <span class="content">{{detailData.memoryUsage}}</span>
              </li>
              <li class="item">
                <span class="label">GPS模块工作状态</span>
                <span class="content">{{detailData.gpsmoduleWorkStatus}}</span>
              </li>
              <li class="item">
                <span class="label">TF卡状态</span>
                <span class="content">{{detailData.tfcardStatus}}</span>
              </li>
              <li class="item">
                <span class="label">TF卡容量状态</span>
                <span class="content">{{detailData.tfcardCapacityStatus}}</span>
              </li>
            </ul>
          </t-dialog-info-box>
          <div class="gray-border margin-top">
            <t-dialog-info-box title="设备保修">
              <ul class="info-content">
                <li class="item">
                  <el-radio-group v-model="manualCause" class="t-radio-group">
                    <div>
                      <el-radio label="镜头被遮挡">镜头被遮挡</el-radio>
                      <el-radio :label="6">备选项</el-radio>
                      <el-radio :label="9">备选项</el-radio>
                    </div>
                    <div>
                      <el-radio :label="3">备选项</el-radio>
                      <el-radio :label="6">备选项</el-radio>
                      <el-radio :label="9">备选项</el-radio>
                    </div>
                    <div>
                      <el-radio :label="3">备选项</el-radio>
                      <el-radio :label="6">备选项</el-radio>
                      <el-radio :label="6">备选项</el-radio>
                    </div>
                    <div>
                      <el-radio :label="3">备选项</el-radio>
                      <el-radio :label="6">备选项</el-radio>
                    </div>
                  </el-radio-group>
                </li>
              </ul>
            </t-dialog-info-box>
          <div class="info-box-button">
            <el-button type="info" size="small" @click="clickConfirm">确认告警</el-button>
            <el-button type="info" size="small" @click="dialogTableVisible = false">取消</el-button>
          </div>
          </div>
        </el-aside>
      </el-container>
    </el-dialog>
    <!--弹窗-->
  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
