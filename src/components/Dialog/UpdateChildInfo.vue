<template>
    <group title="小名">
        <x-input placeholder="请输入姓名" is-type="china-name"></x-input>
    </group>
    <group title="性别">
        <radio :options="radioValue" value="男"></radio>
    </group>
    <group title="生日">
        <date-time :value.sync="value" placeholder="请选择日期" :max-year=2016 format="YYYY-MM-DD" @on-change="change" title="选择日期" year-row="{value}年" month-row="{value}月" day-row="{value}日" confirm-text="完成" cancel-text="取消"></date-time>
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
    export default {
        data() {
            return {
                radioValue: ['男','女'],
                value:''
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
        methods: {
            change (value) {
                console.log('change', value)
            },
            clearValue (value) {
                this.$data.value = ''
            },
            updateInfo: function () {
                console.log(this.$data.value)
            }
        }
    }
</script>