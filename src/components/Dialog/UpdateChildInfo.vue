<template>
    <dialog :show.sync="showNoScroll" :scroll="false">
        <div class="mz-dialog-box">
            <div class="mz-icon mz-icon-addChild" style="font-size:56px"></div>
            <div class="name">
                <p>小名:</p>
                <input type="text" v-model="nickname" style="border:0px">
            </div>
            <div class="sex">
                <p>性别:</p>
                <input  type="radio" value="男" v-model="gender" name="radio1" id="a1"><label for="a1">男</label>
                <input  type="radio" value="女" v-model="gender" name="radio1" id="a2"><label for="a2">女</label>
            </div>
            <div class="birth">
                <datetime :value.sync="value" placeholder="请选择日期" :min-year=2000 :max-year=2016 format="YYYY-MM-DD" @on-change="change" title="生日:" year-row="{value}年" month-row="{value}月" day-row="{value}日" confirm-text="完成" cancel-text="取消"></datetime>
            </div>
            <m-button type="success" large @click="hidden">
                确认添加
            </m-button>
        </div>
    </dialog>
</template>
<style>
    .weui_dialog{
        width:70%;
    }
    .mz-dialog-box{
        background: #fff7e6;
        padding: 20px 10px;
        padding-top:0px;
    }
    .mz-dialog-success .mz-dialog-tip{
        height: 100px;
        background-image: url('/images/success.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    .mz-dialog-success h4{
        color: #72e4dc;
        font-size: 1.6rem;
    }

    .mz-dialog-failed .mz-dialog-tip{
        height: 100px;
        background-image: url('/images/failed.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    .mz-dialog-failed h4{
        color: #fe7f85;
        font-size: 1.6rem;
    }
    .name{
        display: flex;
        padding-bottom:10px;
        margin-right:10px;
    }
    .name p{
        margin-right:10px;
    }
    .sex{
        display: flex;
        align-items: center;
    }
    .sex p{
        margin-right:10px;
    }
    .sex input{
        margin-right:5px;
    }
    .sex label{
        margin-right:5px;
    }
    .birth{
        display: flex;
    }
    .birth a{
        padding-left:0px;
        color: #000;
    }
    .birth a div:first-child{
        margin-right:10px;
    }

</style>
<script>
    import Dialog from '../../../node_modules/vux/dist/components/dialog/index'
    import datetime from '../../../node_modules/vux/dist/components/datetime/index'
    import MButton from '../button/button.vue'
    export default{
        data: function () {
            return {
                showNoScroll: false,
                value:'',
                avatar: '',
                nickname: '',
                birthday: '',
                gender: Number
            }
        },
        components: {
            Dialog,
            MButton,
            datetime
        },
        methods: {
            hidden: function () {
                this.showNoScroll = !this.showNoScroll;
            },
            change (value) {
                console.log('change', value)
            },
            clearValue (value) {
                this.$data.value6 = ''
                console.log('clear')
            }
        },
        events: {
            'showDialog': function () {
                this.hidden()
            }
        },
        watch: {
            nickname: function () {
             console.log(this.nickname)
            },
            gender: function () {
                this.gender = '男' ? 1 : 0
                console.log(this.gender)
            }
        }
    }
</script>
