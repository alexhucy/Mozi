<template>
    <group title="小名">
        <x-input placeholder="请输入姓名" type="text"  :value.sync="name"></x-input>
    </group>
    <group title="性别">
        <radio :options="radio001" :value.sync="value3" @on-change="change"></radio>
    </group>
    <group title="生日">
        <date-time :value.sync="value2" placeholder="请选择日期" :max-year=2016 format="YYYY-MM-DD" @on-change="changebirth" title="选择日期" year-row="{value}年" month-row="{value}月" day-row="{value}日" confirm-text="完成" cancel-text="取消"></date-time>
    </group>
    <group>
        <x-button type="primary" @click="updateInfo">确认添加</x-button>
    </group>
</template>
<style>
    .weui_btn_primary{
        background-color:#72e4dc;
    }
</style>
<script>
import Group from '../../../node_modules/vux/dist/components/group/index'
import xInput from '../../../node_modules/vux/dist/components/x-input/index'
import Radio from '../../../node_modules/vux/dist/components/radio/index'
import DateTime from '../../../node_modules/vux/dist/components/datetime/index'
import xButton from '../../../node_modules/vux/dist/components/x-button/index'
import Cell from '../../../node_modules/vux/dist/components/group/index'
import {childUpdateQuery,alterChildInfoQuery} from '../../vuex/actions/userAction'
    export default {
        data() {
            return {
                radio001: [ '男', '女' ],
                sex: '',
                birth: '',
                value2: '',
                value3: '',
                name: '',
                id: ''
            }
        },
        vuex: {
          actions: {
              childUpdateQuery,
              alterChildInfoQuery
          }
        },
        components: {
            Group,
            Cell,
            xInput,
            xButton,
            Radio,
            DateTime
        },
        route:{
            data({to: {query: {nickname,birth,avatar,gender,id}}}){
                this.name = nickname
                this.value3 = gender == 'male' ? '男' : '女'
                this.value2 = birth
                this.id = id
            }
        },
        methods: {
            change: function (value) {
                this.sex = value == '男' ? '1' : '0'
            },
            updateInfo: function () {
                var _sefl = this
                if(this.id != 0){
                    console.log(this.id)
                    this.alterChildInfoQuery(this.id).then(function () {
                        _sefl.$router.go({name: 'info'})
                    })
                }else {
                    this.childUpdateQuery(this.name, this.sex, this.birth).then(function () {
                        _sefl.$router.go({name: 'info'})
                    })
                }
            },
            changebirth: function (value) {
                this.birth = value
            },
            changename: function (value) {
                this.name = value
            }
        },

    }
</script>