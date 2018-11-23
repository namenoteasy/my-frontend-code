<template>
  <t-container title="泊位对应关系列表">

    <div class="mg-container">
      <t-small-title title="停车区内设备列表"></t-small-title>
      <el-row :gutter="20" type="flex">
        <el-col :span="tableSpan">
          <!--表格-->
          <t-table-pagination
            :columns="columns"
            :tableData="tableData"
            :totalSize="total"
            :pageSize="page.pageSize"
            :cursor="true"
            ref="tables"
            :offset="10"
            :highlight="true"
            @current-change="handleCurrentChange"
            @row-click="handleRowClick">
            <template slot="parking" slot-scope="scope">
              <t-parking-text :rowData="scope.row"></t-parking-text>
            </template>
          </t-table-pagination>
          <!--/表格-->
        </el-col>
        <el-col :span="8" v-if="sidebarVisible" class="nexus-container">
          <div>
            <div class="close-btn" @click="handleCloseSidebar">
              <span>×</span>
            </div>
            <div class="nexus-top">
              <div class="title">
                <div>{{berthSidebar.parkingName}}({{berthSidebar.parkingCode}})</div>
                <div>{{berthSidebar.deviceType}}</div>
                <div>{{berthSidebar.deviceCode}}</div>
              </div>
            </div>
            <div class="nexus-body">
              <el-row>
                <el-col :span="12">
                  <div class="title">设备内设置的泊位号</div>
                </el-col>
                <el-col :span="12">
                  <div class="title">正式泊位号</div>
                </el-col>
              </el-row>
            </div>
            <div class="nexus-body" :style="`height:${window.document.body.offsetHeight - 508}px`">
              <el-row :gutter="20" v-for="(item, index) in berthSidebar.berthArr" :key="index">
                <el-col :span="12">
                  <div class="column">
                    <div class="row">
                      <el-input v-model="item.deviceBerthCode" placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="column">
                    <div class="row">
                      <el-select v-model="item.berthCode">
                        <el-option v-for="(code,i) in berthSidebar.berthCodeArr" :key="i" :value="code.berthCode">{{code.berthCode}}</el-option>
                      </el-select>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="nexus-bottom">
              <el-button type="primary" @click="handleClickSaveBerth">保存</el-button>
              <el-button type="primary" @click="handleClickRecoveryBerth">恢复</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>


  </t-container>
</template>
<style lang="scss">
  .nexus-body .column .row .el-input__inner {
    width: 100%;
  }
</style>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
