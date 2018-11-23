<template>
  <t-container title="事件总汇查询">
    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="70px" slot="searchLeft">

          <el-form-item label="清洗状态">
            <t-dict-select v-model="search.clearStatus" type="evtStatus"></t-dict-select>
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
          <el-form-item label="事件类型">
            <t-dict-select v-model="search.evt" type="evt"></t-dict-select>
          </el-form-item>
          <el-form-item label="泊位号">
            <el-select v-model="search.berthCode">

            </el-select>
          </el-form-item>
          <el-form-item label="抓拍日期">
            <el-date-picker
              v-model="timeValue"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              @change="handleTimerChange">
            </el-date-picker>
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
        :pageSize="page.pageSize"
        :currentPage.sync="page.no"
        @current-change="handleCurrentChange">
        <template slot="parking" slot-scope="scope">
          <t-parking-text :rowData="scope.row"></t-parking-text>
        </template>
        <template slot="plate" slot-scope="scope">
          <t-car-number :plateData="scope.row"></t-car-number>
        </template>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <a href="javascript:;" class="table-link" @click="handleClickShowViewer(scope.row)">浏览图片</a>
          </template>
        </el-table-column>
      </t-table-pagination>
      <!--/表格-->
    </div>

    <!--图片查看器图片放置处-->
    <div id="berthOccupyState_parkingImg" v-show="false">
      <img v-for="(item,index) in imgData" :src="item.imgPath" :alt="item.time">
    </div>
    <!--/图片查看器图片放置处-->


  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
