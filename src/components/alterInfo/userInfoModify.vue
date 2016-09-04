<template>
    <group>
        <x-input :title="title"
                 type="text"
                 :value.sync="value"
                 v-if="type == 1">

        </x-input>

        <radio v-if="type == 2"
               :options="radio001"
               :value.sync="value"
               @on-change="change">

        </radio>

        <address v-if="type == 3"
                 :title="title"
                 :value.sync="value"
                 raw-value
                 :list="addressData"
                 hide-district>

        </address>

    </group>

    <group>

        <x-button type="primary"
                  @click="update"
        >
            确认修改
        </x-button>

    </group>
</template>
<style>

</style>
<script>
import xButton from '../../../node_modules/vux/dist/components/x-button/index'
import xInput from '../../../node_modules/vux/dist/components/x-input/index'
import Group from '../../../node_modules/vux/dist/components/group/index'
import Radio from '../../../node_modules/vux/dist/components/radio/index'
import Address from '../../../node_modules/vux/dist/components/address/index'
import AddressChinaData from '../../../node_modules/vux/src/components/address/list.json'
import {alterUserInfoFirstQuery,alterUserInfoSecondQuery} from '../../vuex/actions/userAction'
import {getUserUpInfo} from '../../vuex/getters/userGetter'
import value2name from '../../filter/value2name'

export default{
  data() {
    return {
      type: Number,
      radio001: [ '男', '女' ],
      title: '',
      value: '',
      sex: Number,
      obj: {},
      addressData: AddressChinaData
    }
  },
  components: {
    xButton,
    Group,
    xInput,
    Radio,
    Address
  },
  route: {
    data ({to: {query: {title, value, type}}}) {
      this.title = title
      this.value = value
      this.type = type
      //判断type，进来的是性别，转换为0,1
      if (type == 2){
        this.sex = value
        this.value = value == 1 ? '男' : '女'
      }
      else if (type == 3){
        this.value = value.split(' ')
      }
    }
  },
  vuex: {
    actions: {
      alterUserInfoFirstQuery,
      alterUserInfoSecondQuery
    },
    getters: {
      user: getUserUpInfo
    }
  },
  methods: {
    update: function () {
      var _self = this
	    this.$dispatch('loading')
      //用于修改头像和昵称
      if (this.type == 1 || this.type == 4) {
        if (this.type == 1) {
          this.obj.nickname = this.value
        }
        else {
          this.obj.headImgUrl = this.value
        }
        _self.alterUserInfoFirstQuery(this.obj).then(function () {
          //判断类型修改本地数据
          if (_self.type == 1){
            _self.user.user_name = _self.value
          }
          else {
            _self.user.user_avatar = _self.value
          }
	        _self.$dispatch('loading')
	        _self.$dispatch('success','修改成功')
	        window.history.back()
        }).catch(function (err) {
	        _self.$dispatch('loading')
	        if(err.status === 400){
		        _self.$dispatch('error',err.data.error_message)
	        }
	        else if(err.status === 0){
		        _self.$dispatch('error','请求超时请重试')
	        }
	        else{
		        _self.$dispatch('error','内容错误请重试')
	        }
        })
      }
      //用于修改地址和性别
      else {
        if (this.type == 2){
          this.obj.gender = this.sex
        }
        else {
          this.value1 = value2name(this.value, AddressChinaData)
          this.obj.location = this.value1.toString()
        }
        _self.alterUserInfoSecondQuery(this.obj).then(function () {
	        _self.$dispatch('loading')
	        _self.$dispatch('success','修改成功')
	        //判断修改本地数据
          if (_self.type == 2){
            _self.user.sex = _self.sex
          }else {
            _self.user.address = _self.obj.location
          }
	        window.history.back()
        }).catch(function (err) {
	        _self.$dispatch('loading')
	        if(err.status === 400){
		        _self.$dispatch('error',err.data.error_message)
	        }
	        else if(err.status === 0){
		        _self.$dispatch('error','请求超时请重试')
	        }
	        else{
		        _self.$dispatch('error','内容错误请重试')
	        }
        })
      }
    },
    change: function (value) {
      this.sex = value == '男' ? '1' : '0'
    }
  }
}
</script>