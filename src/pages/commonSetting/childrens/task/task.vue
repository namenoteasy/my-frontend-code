<template>
  <t-container title="任务中心">
    <div class="shadow" style="padding: 17px 10px 17px 10px;background-color: #fff;">
      <el-tabs type="border-card" ref="tab" value="1" @tab-click="clickTabs">
        <el-tab-pane label="导入任务" name="1">
            <!--表格-->
            <t-table-pagination
              class="mt-17"
              :columns="importColumns"
              :tableData="importTable"
              :totalSize="importTotal"
              :offset="17"
              @current-change="handleImportChange"
              :pageSize="pageSize">
              <el-table-column
                label="操作"
                width="300px">
                <template slot-scope="scope">
                  <a :href="scope.row.originalFileURL" class="table-link">下载原文件</a>
                  <a :href="scope.row.importReportURL" class="table-link">下载导入报告</a>
                </template>
              </el-table-column>
            </t-table-pagination>
            <!--/表格-->
        </el-tab-pane>
        <el-tab-pane label="导出任务" name="2">
          <!--表格-->
          <t-table-pagination
            v-if="activeTab==='2'"
            class="mt-17"
            :columns="exportColumns"
            :tableData="exportTable"
            :totalSize="exportTotal"
            :offset="17"
            @current-change="handleExportChange"
            :pageSize="pageSize">
            <el-table-column
              label="操作"
              width="300px">
              <template slot-scope="scope">
                <a href="javascript:;" class="table-link">下载原文件</a>
              </template>
            </el-table-column>
          </t-table-pagination>
          <!--/表格-->
        </el-tab-pane>
        <el-tab-pane label="定时任务" name="3">
          <!--表格-->
          <t-table-pagination
            v-if="activeTab==='3'"
            class="mt-17"
            :columns="timedColumns"
            :tableData="timedTable"
            :totalSize="timedTotal"
            :offset="17"
            @current-change="handleTimedChange"
            :pageSize="pageSize">
          </t-table-pagination>
          <!--/表格-->
        </el-tab-pane>
      </el-tabs>
    </div>
  </t-container>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
