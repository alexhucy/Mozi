<template>
  <div>
    <div style="margin:15px;padding:5px;border:1px solid #b0d160;display:flex;align-items:center;justify-content:space-between">
        <div style="display:flex;">
            <span style="margin-right:15px;width:50px;height:50px;display:inline-block">
            <img style="width:100%;height:100%;border-radius:50%;border:1px solid #b0d160;" src="http://static.youku.com/user/img/avatar/310/39.jpg"></span>
            <div class="selfinfo">
              <span>小名:{{nickname}}</span>
              <span>生日:{{birthday | timestamp2date}}</span>
            </div>
        </div>
        <div class="infoicon">
            <span style="color:#FFBA29;font-size:25px;" class="mz-icon mz-icon-edit" @click="edit"></span>
            <span style="font-size:25px" class="mz-icon mz-icon-delete" @click="delete"></span>
        </div>
    </div>
  </div>
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
import userService from '../../service/userService'

export default {
  props: {
    birthday: Number,
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
  methods: {
    delete: function () {
			this.$dispatch('confirm' , '个人信息','确认删除' + this.nickname + '的信息么', this.confirm)
    },
	  confirm: function () {
		  var _self = this
		  this.$dispatch('loading')
		  userService.deleteChildInfo(this.id).then(function () {
			    _self.deleteChildInfoQuery(_self.id)
			    _self.$dispatch('loading')
			    _self.$dispatch('success', '删除成功')
		  }).catch(function (err) {
				  _self.$dispatch('loading')
			    _self.$dispatch('error', err)
		  })
	  },
	  edit: function () {
		  this.$emit('on-edit')
	  }
  }
}
</script>
