<template>
  <div class="import-wrapper">
    <div class="import-container" v-show="uploadOne">
      <div class="upload-container">
        <el-upload
          drag
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleSuccess"
          :on-error="handleError"
          :on-progress="handleProgress"
          :before-upload="beforeUpload">
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
    <div class="import-container" v-show="uploadTwo">
      <div class="upload-container">
        <span class="import-progress-number">
          {{progress}}%
        </span>
        <span class="import-in">导入中</span>
      </div>
    </div>
    <div class="import-container" v-show="uploadThree">
      <div class="upload-container">
        <div class="upload-result">
          <span>共导入134条数据,5条失败,</span><a href="javascript:;">下载导入报告</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "./index.scss";
</style>
