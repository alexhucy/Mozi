<template>
	<dialog :show.sync="showNoScroll" :scroll="false">
		<div class="mz-dialog-box">

			<div class="mz-dialog-success">
				<div class="mz-dialog-tip">

				</div>
				<h4>支付成功</h4>
			</div>

			<m-button type="glass" large @click="confirm">
				我要打卡
			</m-button>

			<m-button type="success" large>
				随便看看
			</m-button>
		</div>
	</dialog>
</template>

<style>
.mz-dialog-box{
	background: #fff7e6;
	padding: 20px 10px;
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
</style>

<script>
import Dialog from '../../../node_modules/vux/dist/components/dialog/index'
import MButton from '../button/button.vue'

export default {
	data: function () {
		return {
			showNoScroll: false
		}
	},
	components: {
		Dialog,
		MButton
	},
	type: {
		type: String
	},
	methods: {
		confirm : function () {
			this.showNoScroll = !this.showNoScroll;
		}
	},
	events: {
		'showDialog': function () {
			this.confirm()
		}
	}
}
</script>