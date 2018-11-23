<template>
  <t-container title="登录日志">
    <t-search right-width="260">
      <el-form :inline="true" :model="search" slot="searchLeft">
        <el-form-item label="时间" label-width="68px">
          <el-date-picker
            v-model="search.time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="操作对象" label-width="68px">
          <el-input clearable placeholder="请输入" v-model="search.searchOperationObject"></el-input>
        </el-form-item>
        <el-form-item label="操作行为" label-width="68px">
          <el-input clearable placeholder="请输入" v-model="search.searchOperationActive"></el-input>
        </el-form-item>
      </el-form>
      <div slot="searchRight">
        <el-button type="primary" @click="handleFilterSearchClick">查询</el-button>
        <el-button type="primary" @click="handleFilterResetClick">重置</el-button>
      </div>
    </t-search>
    <t-stretch-container :border="false" class="mt-17">
      <el-container>
        <!--左侧-->
        <el-main>
          <t-small-container title="操作记录" :border="true">
          <t-table-pagination
            :offset="20"
            ref="table"
            :totalSize="total"
            :pageSize="page.pageSize"
            :tableData.sync="tableData"
            @current-change="handlePageChange"
            :highlightCurrentRow="true"
            @row-click="handleRowClick"
            :columns="[
            {prop:'operationObject',label:'对象'},
            {prop:'operationActive',label:'行为'},
            {prop:'userRealName',label:'用户'},
            {prop:'operationTime',label:'时间'}
          ]">
          </t-table-pagination>
          </t-small-container>
        </el-main>
        <!--左侧-->
        <!--右侧-->
        <el-aside width="450px">
          <t-small-container title="操作用户" :border="true" :shadow="false">
            <t-key-value label="姓名" label-width="40px">{{operationLogs.userRealName ? operationLogs.userRealName : '— —'}}</t-key-value>
            <t-key-value label="电话" label-width="40px">{{operationLogs.userRealPhone ? operationLogs.userRealPhone : '— —'}}</t-key-value>
          </t-small-container>
          <t-small-container class="mt-17" title="操作详情" :border="true" :shadow="false">
              <t-key-value label="时间" label-width="60px">{{operationLogs.operationTime ? operationLogs.operationTime : '— —'}}</t-key-value>
              <t-key-value label="行为" label-width="60px">{{operationLogs.operationActive ? operationLogs.operationActive : '— —'}}</t-key-value>
              <t-key-value label="对象" label-width="60px">{{operationLogs.operationObject ? operationLogs.operationObject : '— —'}}</t-key-value>
              <t-key-value label="IP地址" label-width="60px">{{operationLogs.operationIp ? operationLogs.operationIp : '— —'}}</t-key-value>
              <t-key-value label="参数" label-width="60px">{{operationLogs.operationParams ? operationLogs.operationParams : '— —'}}</t-key-value>
          </t-small-container>
        </el-aside>
        <!--右侧-->
      </el-container>
    </t-stretch-container>
  </t-container>
</template>
<style scoped lang="scss">
</style>
