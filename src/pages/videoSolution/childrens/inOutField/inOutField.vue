<template>
  <t-container title="出入场查询">

    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="70px" slot="searchLeft">
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
        <el-form-item label="抓拍日期">
          <el-date-picker
            v-model="timeValue"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="handleChangeTimer">
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
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <a href="javascript:;" class="table-link" @click="handleClickCheckProof(scope.row)">查看证据</a>
          </template>
        </el-table-column>
      </t-table-pagination>
    </div>
    <!--/表格-->

    <!--操作弹窗-->
    <el-dialog :title="checkProof.title" width="1278px" :visible.sync="checkProof.visible">
      <div class="comparison-dialog-content">
        <div class="comparison-dialog-top">
          <div class="comparison-dialog-status">
            <div class="car-plate-container">
              <t-car-plate height="113px" :plateData="checkProof.data.plateData"></t-car-plate>
            </div>
          </div>
          <div class="comparison-dialog-right">
            <t-info-box title="详细流水信息">
              <div class="info-content">
                <div class="item">
                  <span class="label">检测时间</span>
                  <span class="content">{{checkProof.data.infoData.time}}</span>
                </div>
                <div class="item">
                  <span class="label">停在泊位</span>
                  <span class="content">{{checkProof.data.infoData.berthCode}}</span>
                </div>
              </div>
            </t-info-box>
          </div>
          <div class="cl"></div>
        </div>
        <div class="comparison-dialog-bottom">
          <div class="comparison-photo">
            <t-small-title title="进场图片"></t-small-title>
            <div class="photo-container">
              <t-swiper :swiperOption="swiperOption" :swiperData="checkProof.data.picArr"></t-swiper>
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
