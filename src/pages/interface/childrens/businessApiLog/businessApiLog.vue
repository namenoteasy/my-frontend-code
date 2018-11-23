<template>
  <t-container title="业务系统_API收发日志">

    <!--搜索-->
    <t-search>

      <el-form :inline="true" :model="search" label-width="70px" slot="searchLeft">
          <el-form-item label="API">
            <el-select v-model="search.apiTypeCode">

            </el-select>
          </el-form-item>
          <el-form-item label="业务系统">
            <el-select v-model="search.businessSystem">

            </el-select>
          </el-form-item>
          <el-form-item label="请求时间">
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
        <template slot="plate" slot-scope="scope">
          <t-car-number :plateData="scope.row"></t-car-number>
        </template>
        <el-table-column
          label="操作"
        width="200">
          <template slot-scope="scope">
            <a href="javascript:;" class="table-link" @click="handleClickCheckApi(scope.row)">查看请求和返回</a>
          </template>
        </el-table-column>
      </t-table-pagination>
    </div>
    <!--/表格-->
    <el-dialog title="查看请求和返回" top="8vh" width="1278px" :visible.sync="dialogVisible">
      <div class="panel">
        <div class="params-wrap">
          <t-small-title title="请求"></t-small-title>
          <div class="panel-content">
            <t-ace-editor>{{apiData.paramsContent}}</t-ace-editor>
          </div>
        </div>
        <div class="response-wrap">
          <t-small-title title="响应"></t-small-title>
          <div class="panel-content">
            <t-ace-editor>{{apiData.responseContent}}</t-ace-editor>
          </div>
        </div>
        <div class="cl"></div>
      </div>
    </el-dialog>

  </t-container>
</template>
<script>
  export default {
    components: {
      editor: require('vue2-ace-editor')
    }
  }
</script>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
