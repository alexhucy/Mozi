<template>
    <div>
        <div @click="add" style="margin:15px;padding:5px;border:1px solid #b0d160;" class="vux-center" v-if="type == 1">
            <div style="text-align:center;" class="mz-icon mz-icon-addChild">{{content}}</div>
        </div>
        <div style="margin:15px;padding:5px;border:1px solid #b0d160;display:flex;align-items:center;justify-content:space-between" v-if="type == 2">
            <div style="display:flex;">
                <span style="margin-right:15px;width:50px;height:50px;display:inline-block"><img style="width:100%;height:100%;border-radius:50%;border:1px solid #b0d160;" src="http://static.youku.com/user/img/avatar/310/39.jpg"></span>
                <div class="selfinfo">
                <span>小名:{{nickname}}</span>
                <span>生日:{{birth1}}</span>
                </div>
            </div>
            <div class="infoicon">
                <span style="color:#FFBA29;font-size:25px;" class="mz-icon mz-icon-edit" v-link="{name: 'update',query:{nickname:nickname,birth:birth1,avatar:avatar,gender:gender,id:id}}"></span>
                <span style="font-size:25px" class="mz-icon mz-icon-delete" @click="delete"></span>
            </div>
        </div>
    </div>
    <loading :show="show"></loading>
</template>
<style>
    .vux-center-v, .vux-center-h, .vux-center {
        display: flex;
    }

    .vux-center-v, .vux-center {
        align-items: center;
    }

    .vux-center-h, .vux-center {
        justify-content: center;
    }
    .mz-icon-addChild{
        color: #b0d160;
    }
    .mz-icon-addChild:before{
        content: '\E911';
        padding-right:6px;
    }
    .mz-icon-delete{
        color: #FE7F85;
    }
    .mz-icon-delete:before{
        content: '\E907';
    }
    .selfinfo{
        display: flex;
        flex-flow: column wrap;
    }
    .infoicon{
        display: flex;
        flex-flow:row nowrap;
    }
    .infoicon span{
        margin:5px;
    }
</style>

<script>
import {deleteChildInfoQuery} from '../../vuex/actions/userAction'
import loading from '../../../node_modules/vux/dist/components/loading/index'

export default {
  data: function () {
    return {
      content: '添加孩子信息',
      birth1: '',
      show: false,
    }
  },
  components: {
    loading
  },
  props: {
    type: {
      type: String,
      default: 1
    },
    birth: Number,
    nickname: String,
    gender: String,
    id: Number,
    avatar: String
  },
  vuex: {
    actions: {
      deleteChildInfoQuery
    }
  },
  ready: function () {
    var d = new Date(this.birth)
    this.birth1 = (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" + (d.getDate());
  },
  methods: {
    delete: function () {
      var _self = this
      _self.show = true
      this.deleteChildInfoQuery(this.id).then(function () {
          _self.$dispatch('update')
	        _self.show = false
      })
    },
	  add: function () {
		  this.$emit('on-add')
	  }
  }
}
</script>
