<template>
  <t-container title="模拟设备">
    <!--搜索-->
    <t-search right-width="320">
      <el-form :inline="true" :model="requestData" slot="searchLeft">
        <el-form-item label="设备类型" label-width="70px">
          <el-select v-model="requestData.deviceType" placeholder="">
            <el-option label="类型1" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预设位" label-width="70px">
          <el-select v-model="requestData.prePos" placeholder="">
            <el-option :label="1" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="目标设备" label-width="70px">
          <el-select v-model="requestData.deviceCode" placeholder="">
            <el-option :label="1" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图片数量" label-width="70px">
          <el-select v-model="requestData.numbersOfImg" placeholder="">
            <el-option  :label="1" :value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="searchRight">
          <span style="margin-right: 20px;">
            <span style="line-height: 34px;">自动刷新</span>
            <span v-show="timeout" style="margin-right: 10px">({{countdown}}/10)</span><el-switch v-model="autoFresh" @change="clickRefresh($event)"></el-switch>
          </span>
        <el-button type="info" @click="clickGetImgList">刷新本页图像</el-button>
      </div>
    </t-search>
    <!--/搜索-->
    <t-small-container class="mt-17 shadow" title="选择图片">
      <el-row :gutter="17">
        <el-col :span="12">
          <!--大图-->
          <t-viewer>
            <div class="children-center" style="background-color:#C8D1DD;height: 518px;">
              <t-img-lazyload v-if="bigImgShow" class="big-img" :src.sync="bigImgPath" style="width: 100%;height: 100%;">
              </t-img-lazyload>
              <p v-else class="bigimg-tip">请在右侧图像栏选择图像</p>
            </div>
          </t-viewer>
          <!--大图-->
        </el-col>
        <el-col :span="12">
          <div class="gray-border" style="height: 518px;overflow: auto">
            <t-img-list imgDefaultHeight="100" :imgData="imgList">
              <template slot-scope="scope">
                <t-device-list-img :item="scope.item" @click-img="clickSelectImg($event, scope.item)">

                </t-device-list-img>
              </template>
            </t-img-list>
          </div>
        </el-col>
      </el-row>
    </t-small-container>
    <!--模拟条件-->
      <el-form ref="elForm" class="t-form shadow mt-17" style="padding: 10px;background-color: #fff;" :rules="rules2" :model="simulator">
        <t-flex-form>
          <!--左-->
          <t-form-item label="行为" prop="evt" label-width="105px" content-width="200px">
            <el-select v-model="simulator.evt">
              <el-option value="" label="s" key="0"></el-option>
              <el-option value="s" label="s" key="1"></el-option>
              <el-option value="d" label="s" key="2"></el-option>
            </el-select>
          </t-form-item>
          <t-form-item label="车辆型号" prop="carType" label-width="105px" content-width="200px">
            <el-select v-model="simulator.carType">
              <el-option value="s"></el-option>
              <el-option value="d"></el-option>
            </el-select>
          </t-form-item>
          <t-form-item label="异常停车类型" prop="abnormalType" label-width="105px" content-width="200px">
            <el-select v-model="simulator.abnormalType">
              <el-option value="s"></el-option>
              <el-option value="d"></el-option>
            </el-select>
          </t-form-item>
          <t-form-item label="泊位号" prop="berthCode" label-width="105px" content-width="200px">
            <el-select v-model="simulator.berthCode">
              <el-option value="s"></el-option>
              <el-option value="d"></el-option>
            </el-select>
          </t-form-item>
          <t-form-item label="行为置信度" label-width="105px" content-width="200px">
            <el-select v-model="simulator.actionCredible">
              <el-option value="s"></el-option>
              <el-option value="d"></el-option>
            </el-select>
          </t-form-item>
          <t-form-item label="车牌置信度" label-width="105px" content-width="200px">
            <el-select v-model="simulator.plateCredible">
              <el-option value="s"></el-option>
              <el-option value="d"></el-option>
            </el-select>
          </t-form-item>
          <t-form-item label="品牌" label-width="105px" content-width="200px">
            <el-input v-model="simulator.carBrand"></el-input>
          </t-form-item>
          <t-form-item label="车牌" label-width="105px" content-width="200px">
            <el-input v-model="simulator.plateNumber"></el-input>
          </t-form-item>
          <t-form-item label="车身颜色" prop="plateColor" label-width="105px" content-width="200px">
            <el-input v-model="simulator.plateColor"></el-input>
          </t-form-item>
          <!--提示-->
          <p slot="tip" style="padding-left: 10px;">注意：带 “*”的为必填选项</p>
          <!--右-->
        <el-button slot="right" type="primary" @click="clickConfirm">模拟设备发送</el-button>
      </t-flex-form>
    </el-form>
  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
