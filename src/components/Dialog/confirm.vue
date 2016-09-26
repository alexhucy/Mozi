<template>
	<dialog :show.sync="showNoScroll" :scroll="false">
		<div class="mz-dialog-box">

			<div class="mz-dialog-success">
				<div class="mz-dialog-tip">

				</div>
				<h4>报名成功</h4>
			</div>

			<m-button type="glass" large @click="confirm">
				我要打卡
			</m-button>
			<div style="margin-top: 8px">
				<m-button type="success" large @click="toggle">
					喊小伙伴参加
				</m-button>
			</div>

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
		toggle: function () {
			this.showNoScroll = !this.showNoScroll
			if (!this.showNoScroll){
				this.$emit('on-share')
			}
		},
		confirm(){
			this.$emit('on-confirm')
		}
	}
}
</script>