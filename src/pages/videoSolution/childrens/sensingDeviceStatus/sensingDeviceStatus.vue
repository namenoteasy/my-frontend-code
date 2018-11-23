<template>
  <t-container title="设备状态">
    <!--搜索-->
    <t-search>
      <el-form :inline="true" :model="requestData" slot="searchLeft">
        <el-form-item label="设备类型" label-width="70px">
          <el-select v-model="requestData.deviceType">
            <el-option label="类型1" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="停车点" label-width="70px">
          <t-parking-select v-model="requestData.parkingCode"></t-parking-select>
        </el-form-item>
      </el-form>
      <div slot="searchRight">
        <el-button type="primary" @click="clickGetDeviceList">搜索</el-button>
      </div>
    </t-search>
    <!--/搜索-->
    <!--图片列表-->
    <div class="mt-17">
      <!--表格-->
      <t-table-pagination
        :columns="columns"
        :tableData="tableData"
        :totalSize="totalSize"
        @current-change="handleCurrentChange"
        :pageSize="requestData.pageSize">
        <template slot="parking" slot-scope="scope">
          <t-parking-text :rowData="scope.row"></t-parking-text>
        </template>
        <el-table-column
          label="操作"
        width="300px">
          <template slot-scope="scope">
            <a v-if="scope.row.alarmType=='人工告警'" href="javascript:;" class="table-link" @click="clickAlarmRelease">具体</a>
            <a v-else href="javascript:;" class="table-link" @click="clickAlarmRelease">解除告警</a>
            <a :href="scope.row.logUrl" class="table-link">下载日志</a>
          </template>
        </el-table-column>
      </t-table-pagination>
      <!--/表格-->
    </div>
    <!--弹窗-->
    <el-dialog top="17px" width="1280px" :title="`${detailData.alarmType} - ${detailData.parkingName} - ${detailData.parkingCode}`" :visible.sync="dialogTableVisible">
      <el-container>
        <el-main>
          <div style="border:1px solid #ddd;">
            <el-radio-group v-model="deviceImgType" style="padding: 12px;" @change="clickGetStatusImg">
              <el-radio-button label="告警时">告警时</el-radio-button>
              <el-radio-button label="最新">最新</el-radio-button>
            </el-radio-group>
            <t-viewer>
              <t-img-lazyload  style="height: 745px;" :src="detailData.imgPath">
              </t-img-lazyload>
            </t-viewer>
          </div>
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
          <div class="gray-border margin-top" v-if="detailData.alarmType==='人工告警'">
            <t-dialog-info-box title="被人工告警为">
              <ul class="info-content">
                <li class="item">
                  <t-cause-card :cause="detailData.cause" :time="detailData.alarmTime"></t-cause-card>
                </li>
              </ul>
            </t-dialog-info-box>
            <div class="info-box-button">
              <el-button type="info" size="small" @click="clickConfirm">解除告警</el-button>
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
