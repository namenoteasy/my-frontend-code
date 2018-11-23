<template>
  <t-container title="事件_违停审核">
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
        :currentPage.sync="page.no"
        :pageSize="page.pageSize"
        @current-change="handleCurrentChange">
        <template slot="plate" slot-scope="scope">
          <t-car-number :plateData="scope.row"></t-car-number>
        </template>
        <el-table-column
          label="操作"
          width="200">
          <template slot-scope="scope">
            <a href="javascript:;" class="table-link" @click="handleClickDetails(scope.row)">查看证据</a>
          </template>
        </el-table-column>
      </t-table-pagination>
      <!--/表格-->
    </div>


    <!--操作弹窗-->
    <el-dialog :title="details.title" width="1278px" top="7vh" :visible.sync="details.visible">
      <div class="comparison-dialog-content">
        <!--证据图片-->
        <div class="comparison-dialog-top">
          <el-row :gutter="20">
            <el-col :span="12" v-for="(item,index) in details.data.picArr" :key="index">
              <t-img-lazyload :src="item.imgPath" style="height: 334px;overflow: hidden;margin-bottom: 20px;">
              </t-img-lazyload>
            </el-col>
          </el-row>
        </div>
        <div class="comparison-dialog-bottom">
          <!--车牌信息-->
          <el-row>
            <el-col :span="3">
              <t-viewer>
                <img :src="details.data.plateData.plateImg" class="plate-img" :alt="details.data.plateData.plateNumber">
              </t-viewer>
            </el-col>
            <el-col :span="18">
              <div class="car-info">
                <div class="info-content">
                  <el-row>
                    <el-col :span="8">
                      <div class="item">
                        <span class="label">检测时间</span>
                        <span class="content">{{details.data.infoData.time}}</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item">
                        <span class="label">路口</span>
                        <span class="content">{{details.data.infoData.road}}</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item">
                        <span class="label">预置位</span>
                        <span class="content">{{details.data.infoData.preset}}</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item">
                        <span class="label">停车泊位</span>
                        <span class="content">{{details.data.infoData.berthCode}}</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="item">
                        <span class="label">违章</span>
                        <span class="content">{{details.data.infoData.disobey}}</span>
                      </div>
                    </el-col>

                  </el-row>
                </div>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="button-container">
                <el-button type="primary" @click.native="handleClickDisobeyRust(1)">取证可信</el-button>
              </div>
              <div class="button-container">
                <el-button type="primary" @click.native="handleClickDisobeyRust(0)">取证不可信</el-button>
              </div>
            </el-col>
          </el-row>
          <!--/车牌信息-->
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
