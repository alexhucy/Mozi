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

        <address v-if="type == 3" :title="title" :value.sync="value1" raw-value></address>

    </group>

    <group>

        <x-button type="primary"
                  @click="update">
            确认修改
        </x-button>

    </group>

    <loading :show="show"></loading>
</template>
<style>

</style>
<script>
    import xButton from '../../../node_modules/vux/dist/components/x-button/index'
    import xInput from '../../../node_modules/vux/dist/components/x-input/index'
    import Group from '../../../node_modules/vux/dist/components/group/index'
    import Loading from '../../../node_modules/vux/dist/components/loading/index'
    import Radio from '../../../node_modules/vux/dist/components/radio/index'
    import Address from '../../../node_modules/vux/dist/components/address/index'
    import {alterUserInfoFirstQuery,alterUserInfoSecondQuery} from '../../vuex/actions/userAction'

    export default{
        data() {
          return {
              show: false,
              type: Number,
              radio001: [ '男', '女' ],
              title: '',
              value: '',
              value1: Array,
              sex: Number,
              obj1: {
                  headImgUrl: String,
                  nickname: String
              },
              obj2: {
                  location: String,
                  gender: Number
              }
          }
        },
        components: {
            xButton,
            Group,
            xInput,
            Loading,
            Radio,
            Address
        },
        route: {
            data ({to: {query: {title,value,type}}}) {
                this.title = title
                this.value = value
                this.type = type
                console.log(type)
                console.log(value)
                switch (type){
                    case 1:
                    break
                    case 2:
                    break
                    case 3:
                    break
                    case 4:
                    break
                }
            }
        },
        vuex: {
          actions: {
              alterUserInfoFirstQuery
          }
        },
        methods: {
            update: function () {
                var _self = this
                _self.show = true
                if (this.type == 1 || this.type == 4) {
                    console.log(this.value)
                    _self.alterUserInfoFirstQuery({nickname:this.value}).then(function () {
                        _self.show = false
                    })
                }else {
                    _self.alteerUserInfoSecondQuery(this.obj2).then(function () {
                        _self.show = false
                    })
                }
            },
            change: function (value) {
                this.sex = value == '男' ? '1' : '0'
                this.obj2.gender = this.sex
            }
        }
    }
</script>