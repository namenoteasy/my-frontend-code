<template>
  <ul class="component-simpel-menu-list" ref="list">
    <slot/>
  </ul>
</template>
<style lang="scss">
  .component-simpel-menu-list{
    overflow:auto;
    height:100%;
    li{
      cursor:pointer;
      box-sizing:border-box;
      padding-left:$padding-small;
      padding-right:$padding-small;
      line-height:$line-height-middle;
      color: #333;
      &:hover{
        color: #ffffff;
        background-color: #3E8CF7;
        .hide{
          display:block;
          button{
            span{
              color: #fff;
            }
          }
        }
      }
    }
    li.focus{
      color: #ffffff;
      background-color: #3E8CF7;
      .hide{
        display:block;
        button{
          span{
            color: #fff;
          }
        }
      }
    }
  }
</style>
