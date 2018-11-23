<template>
  <el-container>
    <el-header height="50px"><span class="platform-name"><i class="iconfont icon-yunyingpingtailogo" ></i>智慧城市停车平台</span>
      <div class="sign-out fr">用户：admin<i class="iconfont icon-tuichu" ></i></div>
    </el-header>
    <el-container>
      <transition name="slide-menu">
        <el-aside v-show="isExpandMenu" width="auto">
          <el-container>
            <el-aside width="170px">
              <!--左侧菜单-->
              <el-menu>
                <template v-for="(groupItem1,i) in $store.state.app.data">
                  <!--无children，非折叠-->
                  <el-menu-item v-if="groupItem1.children.length===0&&groupItem1.authType==='menu-leaf'" :key="i" :index="i.toString()" @click="loadPage(groupItem1.authRoute);subMenuVisible=false">
                    {{groupItem1.authName}}
                  </el-menu-item>
                  <!--有children，非折叠-->
                  <el-menu-item v-else-if="groupItem1.children.length!==0&&groupItem1.authType==='menu-leaf'" :key="i" :index="i.toString()" @click="clickLoadSubMenu(groupItem1)">
                    {{groupItem1.authName}}
                  </el-menu-item>
                  <!--有children，可折叠-->
                  <el-submenu v-else :key="i" :index="i.toString()">
                    <template slot="title">
                      <span>{{groupItem1.authName}}</span>
                    </template>
                    <template v-for="(groupItem2,k) in groupItem1.children">
                      <el-menu-item :index="i.toString()+'-'+k.toString()" :key="k" @click="clickLoadSubMenu(groupItem2)">{{groupItem2.authName}}</el-menu-item>
                    </template>
                  </el-submenu>
                </template>
              </el-menu>
            </el-aside>
            <!--右侧菜单-->
            <transition name="slide-menu">
              <t-aside-submenu :title="$store.state.app.submenuData.authName" v-if="$store.state.app.submenuVisible">
                <template v-for="(groupItem1,i) in $store.state.app.submenuData.children">
                  <!--无children，非折叠-->
                  <el-menu-item v-if="groupItem1.children.length===0&&groupItem1.authType==='menu-leaf'" :key="i" :index="i.toString()" @click="loadPage(groupItem1.authRoute)">
                    {{groupItem1.authName}}
                  </el-menu-item>
                  <!--有children，可折叠-->
                  <el-submenu v-else :key="i" :index="i.toString()">
                    <template slot="title">
                      <span>{{groupItem1.authName}}</span>
                    </template>
                    <template v-for="(groupItem2,k) in groupItem1.children">
                      <el-menu-item :index="i.toString()+'-'+k.toString()" :key="k" @click="loadPage(groupItem2.authRoute)">{{groupItem2.authName}}</el-menu-item>
                    </template>
                  </el-submenu>
                </template>
              </t-aside-submenu>
            </transition>
          </el-container>
        </el-aside>
      </transition>
      <el-main style="position: relative;">
        <t-expand-button :value.sync="isExpandMenu"></t-expand-button>
        <router-view v-if="isInit"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss">
  @import "../theme/base.scss";
  @import "../theme/common.scss";
</style>
<style scoped lang="scss">
  @import "/index.scss";
</style>
