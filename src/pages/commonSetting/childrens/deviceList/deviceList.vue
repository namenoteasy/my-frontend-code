<template>
  <t-container title="设备列表">
    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="70px" slot="searchLeft">
        <div class="search-left">

          <el-form-item label="停车点">
            <t-parking-select v-model="search.parkingCode"></t-parking-select>
          </el-form-item>
          <el-form-item label="SN">
            <el-select v-model="search.deviceCode">

            </el-select>
          </el-form-item>
          <el-form-item label="设备类型">
            <t-dict-select v-model="search.deviceType" type="deviceType"></t-dict-select>
          </el-form-item>
        </div>

      </el-form>
      <div slot="searchRight">
        <el-button type="primary" class="search-btn" @click="handleClickSearch">搜索</el-button>
      </div>
    </t-search>
    <!--/搜索-->

    <div class="mt-17">
      <div class="btn-container">
        <el-button type="primary" @click="handleClickAddDevice('add')">添加</el-button>
        <el-button type="primary" @click="importVisible = true" style="margin-left: 20px;">导入</el-button>
      </div>
      <!--表格-->
      <t-table-pagination
        :columns="columns"
        :tableData="tableData"
        :totalSize="total"
        :pageSize="page.pageSize"
        :currentPage.sync="page.no"
        @current-change="handleCurrentChange">
        <template slot="parking" slot-scope="scope">
          <t-parking-text :rowData="scope.row"></t-parking-text>
        </template>
        <el-table-column
          label="操作"
          width="137">
          <template slot-scope="scope">
            <a href="javascript:;" class="table-link" @click="handleClickEditDevice('edit',scope.row)">编辑</a>
            <a href="javascript:;" class="table-link" @click="handleConfirmDelete(scope.row, oldPage)">删除</a>
          </template>
        </el-table-column>

      </t-table-pagination>
      <!--/表格-->
    </div>


    <!--操作弹窗-->
    <el-dialog :title="dialogTitle" width="465px" :visible.sync="deviceJoinVisible">
      <div class="comparison-dialog-content">
        <el-form :inline="true" :model="deviceJoinForm" ref="deviceJoinForm" :rules="deviceJoinRules"
                 label-width="114px">
          <el-form-item label="停车点" prop="parkingCode">
            <div class="long-input">
              <t-parking-select v-model="deviceJoinForm.parkingCode" size="medium"></t-parking-select>
            </div>

          </el-form-item>
          <el-form-item label="设备SN" class="long-input" prop="deviceCode">
            <div class="long-input">
              <el-input v-model="deviceJoinForm.deviceCode"
                        size="medium"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="设备类型" class="long-input" prop="deviceType">
            <div class="long-input">
              <t-dict-select v-model="deviceJoinForm.deviceType" type="deviceType" size="medium"></t-dict-select>
            </div>
          </el-form-item>
          <el-form-item label="名称" class="long-input">
            <div class="long-input">
              <el-input v-model="deviceJoinForm.name"
                        size="medium"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="MAC" class="long-input" prop="mac">
            <div class="long-input">
              <el-input v-model="deviceJoinForm.mac"
                        size="medium"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="经纬度" class="long-input">
            <div class="long-input">
              <t-geo-input :mapAside="true" :value.sync="deviceJoinForm.geo"></t-geo-input>
            </div>
          </el-form-item>
          <div class="center-container">
            <el-button type="primary" @click="handleConfirmAddDevice">确定</el-button>
          </div>
        </el-form>
      </div>
    </el-dialog>
    <!--/操作弹窗-->
    <!--导入弹窗-->
    <el-dialog title="导入" width="1278px" :visible.sync="importVisible">
      <t-import uploadUrl="http://localhost:8080/static/mock-api/client.upload.uploadExcel.json"></t-import>
    </el-dialog>
    <!--/导入弹窗-->


  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
