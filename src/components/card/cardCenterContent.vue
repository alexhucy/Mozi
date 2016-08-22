<template>
    <div>
        <div style="margin:15px;padding:5px;border:1px solid #b0d160;" class="vux-center">
            <div style="text-align:center;" class="mz-icon mz-icon-addChild">{{content}}</div>
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
</style>

<script>
    export default {
        data: function () {
            return {
                content: '添加孩子信息'

            }
        }
    }
</script>
