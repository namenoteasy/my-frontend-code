<template>
  <t-container title="停车点信息">
    <!--搜索-->
    <t-search>
      <el-form :inline="true" :model="requestData" label-width="70px" slot="searchLeft">
        <el-form-item label="停车点">
          <t-parking-select v-model="requestData.parkingCode"></t-parking-select>
        </el-form-item>
      </el-form>
      <div  slot="searchRight">
        <el-button type="primary" @click="clickGetParkingList">搜索</el-button>
      </div>
    </t-search>
    <!--/搜索-->

    <div class="mt-17">
      <div class="btn-container">
        <el-button type="primary" @click.native="dialogVisible = true">添加</el-button>
        <el-button type="primary"  @click.native="importVisible = true" style="margin-left: 20px;">导入</el-button>
      </div>
      <!--表格-->
      <t-table-pagination
        :columns="columns"
        :tableData="tableData"
        :totalSize="total"
        @current-change="handleCurrentChange"
        :pageSize="requestData.pageSize">
        <template slot="parkingName" slot-scope="scope">
          <el-input v-if="scope.row.editable" v-model="editRowData.parkingName" style="line-height: 34px"></el-input>
          <span v-else>{{scope.row.parkingName}}</span>
        </template>
        <template slot="parkingCode" slot-scope="scope">
          <el-input v-if="scope.row.editable" v-model="editRowData.parkingCode" style="line-height: 34px"></el-input>
          <span v-else>{{scope.row.parkingCode}}</span>
        </template>
        <template slot="geo" slot-scope="scope">
          <t-geo-input v-if="scope.row.editable" :value.sync="editRowData.geo" style="line-height: 34px"></t-geo-input>
          <span v-else class="underline geo-hover" @click="clickSelectLocation(scope.row.geo)">{{scope.row.geo}}</span>
        </template>
        <el-table-column
          label="操作"
          align="left"
          width="200px">
          <template slot-scope="scope">
            <span v-if="scope.row.editable">
              <a href="javascript:;" class="table-link" @click="saveEdit(scope)">保存</a>
              <a href="javascript:;" class="table-link" @click="cancelEdit(scope)">取消编辑</a>
            </span>
            <span v-else>
              <a href="javascript:;" class="table-link" @click="beginEdit(scope)">编辑</a>
              <a href="javascript:;" class="table-link" @click="deleteRow(scope)">删除</a>
            </span>
          </template>
        </el-table-column>
      </t-table-pagination>
      <!--/表格-->
    </div>

    <!--添加弹窗-->
    <t-dialog title="设备接入" width="465px" :show.sync="dialogVisible">
      <el-form ref="elForm" :inline="true" :model="appendData" :rules="rules" label-width="114px">
        <el-form-item label="停车点名称" prop="parkingName">
          <div class="long-input">
            <el-select v-model="appendData.parkingName">

            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="泊位编号" prop="parkingCode">
          <div class="long-input">
            <el-select v-model="appendData.parkingCode">

            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="经纬度" prop="geo">
          <div class="long-input">
            <t-geo-input :mapAside="true" :value.sync="appendData.geo"></t-geo-input>
          </div>
        </el-form-item>
        <div style="text-align: center;margin-top: 384px;">
          <el-button type="primary" @click="clickConfirm">确定</el-button>
        </div>
      </el-form>
    </t-dialog>
    <!--/操作弹窗-->
    <!--导入弹窗-->
    <t-dialog title="导入" width="1278px" :show.sync="importVisible">
      <div class="import-wrapper">
        <div class="import-container">
          <div class="upload-container">
            <el-upload
              drag
              action="https://baidu.com/">
              <div class="title">请把Excel文件拖放到此处</div>
              <i class="iconfont icon-excel"></i>
              <a href="javascript:;">浏览</a>
            </el-upload>
          </div>
          <div class="download-link">
            <a href="javascript:;">
              下载导入模板
            </a>
          </div>
        </div>
        <div class="import-container" v-show="false">
          <div class="upload-container">
        <span class="import-progress-number">
          55%
        </span>
            <span class="import-in">导入中</span>
          </div>
        </div>
        <div class="import-container" v-show="false">
          <div class="upload-container">
            <div class="upload-result">
              <span>共导入134条数据,5条失败,</span><a href="javascript:;">下载导入报告</a>
            </div>
          </div>
        </div>
      </div>
    </t-dialog>
    <!--/导入弹窗-->


  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
