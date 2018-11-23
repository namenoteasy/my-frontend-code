<template>
  <t-container title="停车订单查询">

    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="70px" slot="searchLeft">
          <el-form-item label="业务系统">
            <el-select v-model="search.businessSystem" placeholder="活动区域">

            </el-select>
          </el-form-item>
          <el-form-item label="车牌" class="car-plate-input">
            <el-input
              type="text"
              v-model="search.plateNumber"
              placeholder="请输入内容"
              clearable>
              <t-plate-color slot="append" v-model="search.plateColor"></t-plate-color>
            </el-input>
          </el-form-item>
          <el-form-item label="停车点">
            <t-parking-select v-model="search.parkingCode"></t-parking-select>
          </el-form-item>
          <el-form-item label="入场时间">
            <el-date-picker
              v-model="timeValue"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
      </el-form>
      <div slot="searchRight">
        <el-button type="primary" class="search-btn" @click.native="handleClickSearch">搜索</el-button>
      </div>
    </t-search>
    <!--/搜索-->

    <!--表格-->
    <div class="mt-17">
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
        <template slot="plate" slot-scope="scope">
          <t-car-number :plateData="scope.row"></t-car-number>
        </template>
      </t-table-pagination>
    </div>
    <!--/表格-->


  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
