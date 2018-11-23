<template>
  <t-container :title="'数据比对审核'">

    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="90px" slot="searchLeft">
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
        <el-form-item label="结论">
          <el-select v-model="search.conclusion">

          </el-select>
        </el-form-item>
        <el-form-item label="业务系统">
          <el-select v-model="search.businessSystem">

          </el-select>
        </el-form-item>
        <el-form-item label="机报入场日期">
          <el-date-picker
            v-model="search.time"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="searchRight">
        <el-button type="primary" class="search-btn" @click.native="handleClickSearch">搜索</el-button>
      </div>
    </t-search>
    <!--/搜索-->

    <div class="mt-17">
      <!--表格-->
      <t-table-pagination
        :columns="columns"
        :tableData="tableData"
        :totalSize="total"
        :pageSize="page.pageSize"
        :currentPage.sync="page.no"
        @current-change="handleCurrentChange">
        <template slot="plate" slot-scope="scope">
          <t-car-number :plateData="scope.row"></t-car-number>
        </template>
        <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <a href="javascript:;" class="table-link" @click="handleClickDetails(scope.row)">详细对比</a>
          </template>
        </el-table-column>
      </t-table-pagination>
      <!--/表格-->
    </div>

    <!--操作弹窗-->
    <el-dialog :title="details.title" width="1278px" :visible.sync="details.visible" top="7vh">
      <div class="comparison-dialog-content">
        <div class="comparison-dialog-top">
          <div class="comparison-dialog-status">
            <div class="status-text">
              <span class="small-text">疑似:</span>
              <span class="big-text">{{details.data.conclusion}}</span>
            </div>
            <div class="car-plate-container">
              <t-car-plate :plateData="details.data.plateData"></t-car-plate>
            </div>
          </div>
          <div class="comparison-dialog-time">
            <t-small-title title="进出场时间"></t-small-title>
            <div class="timer-container">
              <t-timer-line @handleToIndexPhoto="handleToIndexPhoto"></t-timer-line>
            </div>
          </div>
          <div class="cl"></div>
        </div>
        <div class="comparison-dialog-bottom">
          <div class="comparison-photo">
            <t-small-title title="进场图片"></t-small-title>
            <div class="photo-container">
              <t-swiper :swiperOption="swiperOption" ref="enterSwiper" :swiperData="details.data.picArr"></t-swiper>
            </div>
          </div>
          <div class="cl"></div>
        </div>
      </div>
    </el-dialog>
    <!--/操作弹窗-->
  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
