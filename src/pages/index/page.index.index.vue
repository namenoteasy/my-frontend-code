<template>
  <t-container title="监控面板">
    <!-----------------------------------停车和用户报表-------------------------------------------------->
    <t-small-container titleSize="16px" title="停车和用户报表">
      <el-row :gutter="17">
        <el-col :span="6">
          <t-dynamic-panel title="设备(个)">
            <t-dynamic-info  :value="reportList.deviceNum"><i slot="icon" style="font-size: 64px;" class="iconfont icon-shebei panel-icon"></i></t-dynamic-info>
          </t-dynamic-panel>
        </el-col>
        <el-col :span="12">
          <t-dynamic-panel title="中间件(今天)">
            <el-row>
              <el-col :span="12">
                <t-dynamic-info title="接收信息(次)" :value="reportList.receiveNum"><i slot="icon" style="font-size: 58px;" class="iconfont icon-zhongjianjian panel-icon"></i></t-dynamic-info>
              </el-col>
              <el-col class="dividing" :span="12">
                <t-dynamic-info title="发送事件(件)" :value="reportList.sendNum"><i slot="icon" style="font-size: 58px;" class="iconfont icon-zhongjianjian panel-icon"></i></t-dynamic-info>
              </el-col>
              <img class="arrow-1" src="../../../static/image/sanjiaoxing.png" alt="">
              <img class="arrow-2" src="../../../static/image/sanjiaoxing.png" alt="">
            </el-row>
          </t-dynamic-panel>
        </el-col>
        <el-col :span="6">
          <t-dynamic-panel title="业务系统">
            <t-dynamic-info title="平均响应事件(ms)" :value="reportList.callbackTime"><i slot="icon" style="font-size: 54px;" class="iconfont icon-pingtaifuwu panel-icon"></i></t-dynamic-info>
          </t-dynamic-panel>
        </el-col>
      </el-row>
    </t-small-container>
    <!------------------------------------设备校时---------------------------------------------------------->
    <t-small-container class="mt-17" titleSize="16px" title="设备校时">
      <t-server-clock :time="systemTime"></t-server-clock>
    </t-small-container>
    <!-----------------------------------------汇总----------------------------------------------------------->
    <t-small-container class="mt-17" titleSize="16px" title="汇总">
      <el-row :gutter="17">
        <el-col :span="6">
          <t-active-panel title="设备个数(个)" tip="合法接入的设备数量" :value="summaryData.deviceNum" url="commonSetting/deviceList"></t-active-panel>
        </el-col>
        <el-col :span="6">
          <t-active-panel title="陌生设备(个)" tip="近7天验签失败但又不断在上传信息的设备" :value="summaryData.unknownNum" url="/commonSetting/strangeDevice"></t-active-panel>
        </el-col>
        <el-col :span="6">
          <t-active-panel title="泊位数量(个)" tip="总泊位数量" :value="summaryData.berthNum" url="/commonSetting/berth"></t-active-panel>
        </el-col>
        <el-col :span="6">
          <t-active-panel title="停车点数量(个)" tip="停车点数量" :value="summaryData.parkingNum" url="/commonSetting/parkingSpot"></t-active-panel>
        </el-col>
      </el-row>
    </t-small-container>
    <!--------------------------------------------------实时-------------------------------------------------->
    <t-small-container class="mt-17" titleSize="16px" title="实时">
      <el-row :gutter="17">
        <el-col :span="6">
          <t-active-panel title="设备上报率(次/小时)" tip="最近60分钟，接收到设备总请求数" :value="realtimeData.deviceReportRate" url="/interface/deviceApiLog"></t-active-panel>
        </el-col>
        <el-col :span="6">
          <t-active-panel title="API调用率(次/小时)" tip="最近60分钟，业务系统调用中间件次数" :value="realtimeData.APICallRate" url="/interface/protocol"></t-active-panel>
        </el-col>
        <el-col :span="6">
          <t-active-panel title="告警设备数量(个)" tip="当前告警的设备数量" :value="realtimeData.alarmDeviceNum" url="/videoSolution/sensingDeviceStatus"></t-active-panel>
        </el-col>
        <el-col :span="6">
          <t-active-panel title="事件推送率(次/小时)" tip="最近60分钟，中间件推送事件次数" :value="realtimeData.eventPushRate" url="/interface/systemApiLog"></t-active-panel>
        </el-col>
      </el-row>
      <el-row :gutter="17" class="mt-17">
        <el-col :span="6">
          <t-active-panel title="车牌可信度偏低设备数量(个)" tip="单台车牌识别可信度低于总体车牌可信度的" :value="realtimeData.lowPlateNum" url="/videoSolution/inOutField"></t-active-panel>
        </el-col>
        <el-col :span="6">
          <t-active-panel title="行为可信度偏低设备数量(个)" tip="单台行为识别可信度低于总体行为可信度的" :value="realtimeData.lowBehaviorNum" url="/videoSolution/inOutField"></t-active-panel>
        </el-col>
        <el-col :span="6">
          <t-active-panel title="未发送事件数量(个)" tip="还在数据库中没有发送的事件数" :value="realtimeData.notSentNum" url="/interface/evtSend"></t-active-panel>
        </el-col>
      </el-row>
    </t-small-container>
    <!-----------------------------------------------当前配置-------------------------------------------------->
    <t-small-container class="mt-17" titleSize="16px" title="当前配置">
      <el-tabs class="mt-17" type="border-card">
        <el-tab-pane label="停车感知">
          <t-small-table-container class="mt-17" :shadow="false" title="自动清洗配置" url="/videoSolution/autoClearConfig">
            <t-table-notpagination
              :columns="clearConfigColumns"
              :tableData="clearConfigTable">
            </t-table-notpagination>
          </t-small-table-container>
          <t-small-table-container class="mt-17" :shadow="false" title="自动巡检配置" url="/videoSolution/inspectionParam">
            <t-table-notpagination
              :columns="inspectionColumns"
              :tableData="inspectionTable">
            </t-table-notpagination>
          </t-small-table-container>
        </el-tab-pane>
        <el-tab-pane label="停车校验">

        </el-tab-pane>
        <el-tab-pane label="违停球">
          <t-small-table-container class="mt-17" :shadow="false" title="自动巡检配置" url="/violation/autoCheckSetting">
            <t-table-notpagination
              :columns="autoCheckColumns"
              :tableData="autoCheckTable">
            </t-table-notpagination>
          </t-small-table-container>
        </el-tab-pane>
        <el-tab-pane label="接口监控">
          <t-small-table-container class="mt-17" :shadow="false" title="设备-接口配置" url="/interface/apiSetting">
            <t-table-notpagination
              :columns="apiSettingColumns"
              :tableData="apiSettingTable">
            </t-table-notpagination>
          </t-small-table-container>
          <t-small-table-container class="mt-17" :shadow="false" title="业务系统-接口配置" url="/interface/interfaceParam">
            <t-table-notpagination
              :columns="interfaceColumns"
              :tableData="interfaceTable">
            </t-table-notpagination>
          </t-small-table-container>
        </el-tab-pane>
      </el-tabs>
    </t-small-container>
  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>

