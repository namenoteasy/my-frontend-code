<template>
  <t-container title="陌生设备发现">
    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="70px" slot="searchLeft">

          <el-form-item label="设备SN">
            <el-select v-model="search.deviceCode">

            </el-select>
          </el-form-item>
          <el-form-item label="设备类型">
            <t-dict-select v-model="search.deviceType" type="deviceType"></t-dict-select>
          </el-form-item>

      </el-form>
      <div slot="searchRight">
        <el-button type="primary" class="search-btn" @click="handleClickSearch">搜索</el-button>
      </div>
    </t-search>
    <!--/搜索-->

    <div class="mt-17">
      <!--表格-->
      <t-table-pagination
        :columns="columns"
        :tableData="tableData"
        :totalSize="total"
        :currentPage.sync="page.no"
        :pageSize="page.pageSize"
        @current-change="handleCurrentChange">
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <a href="javascript:;" class="table-link" @click="handleClickJoin(scope.row)">允许加入</a>
          </template>
        </el-table-column>

      </t-table-pagination>
      <!--/表格-->
    </div>

    <!--操作弹窗-->
    <el-dialog title="设备接入" width="465px" :visible.sync="deviceJoinVisible">
      <div class="comparison-dialog-content">
        <el-form :inline="true" :model="deviceJoinForm" ref="deviceJoinForm" :rules="deviceJoinRules" label-width="114px">
          <el-form-item label="停车点" prop="parkingCode">
            <div class="long-input">
              <t-parking-select v-model="deviceJoinForm.parkingCode"></t-parking-select>
            </div>
          </el-form-item>
          <el-form-item label="设备SN" prop="deviceCode">
            <div class="long-input">
              <el-input v-model="deviceJoinForm.deviceCode" disabled
                        size="medium"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="设备类型" prop="deviceType">
            <div class="long-input">
              <el-input v-model="deviceJoinForm.deviceType" disabled
                        size="medium"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="名称">
            <div class="long-input">
              <el-input v-model="deviceJoinForm.name"
                        size="medium"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="MAC" prop="mac">
            <div class="long-input">
              <el-input v-model="deviceJoinForm.mac" disabled
                        size="medium"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="经纬度">
            <div class="long-input">
              <t-geo-input :mapAside="true" :value.sync="deviceJoinForm.geo"></t-geo-input>
            </div>
          </el-form-item>
          <div class="center-container">
            <el-button type="primary" @click="handleClickConfirmDeviceJoin">确定</el-button>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <!--/操作弹窗-->
  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
