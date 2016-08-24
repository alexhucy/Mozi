<template>
	<div class="mz-center-cover">
		<div class="mz-center-name">
			{{user.info.user_name}}
		</div>

		<div class="mz-flex mz-container">
			<div class="mz-flex">
					<div class="mz-center-info mz-pop" v-link="{name:'info'}">
							完善资料
					</div>
			</div>
			<div class="mz-center-avatar mz-item">
				<div class="mz-center-crown">{{level}}</div>
				<img :src="user.info.user_avatar" class="mz-center-img-avatar"><!--
			--></div>
			<div class="mz-flex">
				<div class="mz-center-billboard mz-pop" v-link="{name:'billboard'}">
						积分<br>排行榜
				</div>
			</div>
		</div>

		<div class="mz-signature mz-center-item">
			个人战绩: 坚持打卡<span class="mz-bold">{{user.info.duration}}</span>天
		</div>

		<div class="mz-center-point mz-center-item">
			{{user.info.score}}积分
		</div>

		<div class="mz-center-item">
			<a href="javascript:;" class="mz-href" @click="awardIntroduce"> 积分奖励说明</a>
		</div>
	</div>

	<card :zan="123"
				:comments="12"
				title="连续12天打卡"
				content="连续12天打卡"
				cover="http://img6.cache.netease.com/photo/0001/2016-08-05/BTMRH6L600AO0001.png"
				:activity-id="2"
				:sign-id="2">

	</card>

	<dialog></dialog>
</template>

<style>
.mz-container{
	padding: 0 10px;
}
.mz-flex{
	display: flex;
	flex: 1;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}
.mz-center-cover{
	padding: 10px 0;
	background-image: url("/images/cover.png");
	background-repeat: no-repeat;
	height: 200px;
	text-align: center;
	background-size:100% 100%;

}
.mz-center-info{
	background-image: url("/images/info.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 55px;
	width: 58px;
	padding: 12px 12px 12px 8px;
}
.mz-center-billboard{
	background-image: url("/images/billboard.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	height: 61px;
	width: 61px;
	padding: 12px 0 0 0;
}
.mz-center-img-avatar{
	height: 75px;
	width: 75px;
	border-radius: 50%;
}
.mz-pop{
	box-sizing: border-box;
	line-height: 16px;
	color: #fff;
	font-size: 1.4rem;
	text-align: center;
}
.mz-center-name{
	color: #fff;
	font-size: 1.6rem;
	margin-bottom: 10px;
}
.mz-center-point{
	background: #fff;
	border-radius: 5px;
	color:#333;
	width:106px;
	height: 27px;
	line-height: 27px;
	margin: 0 auto;
}
.mz-href{
	color:#fff;
	text-decoration: underline;
}
.mz-signature{
	font-size:1.4rem;
	color:#333;
}
.mz-signature .mz-bold{
	font-weight: bold;
	font-size: 2rem;
}
.mz-center-item{
	margin-bottom: 4px;
}
.mz-center-crown{
	background-image: url("/images/title.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	width: 50px;
	position: absolute;
	top:-8px;
	left: 50%;
	margin-left: -25px;
}

</style>

<script>
import card from '../../components/card/cardWithoutAvatar.vue'
import dialog from './awardDialog.vue'
import {childInfoQuery,userUpInfoQuery} from '../../vuex/actions/userAction'
import {getUserUpInfo} from '../../vuex/getters/userGetter'

export default {
	data(){
		return {
			level: String
		}
	},
	components: {
		card,
		dialog
	},
	methods: {
		awardIntroduce: function () {
			this.$broadcast('showDialog')
		}
	},
	vuex: {
		actions: {
			childInfoQuery,
			userUpInfoQuery
		},
		getters: {
			user: getUserUpInfo
		}
	},
	ready: function(){
		this.userUpInfoQuery()
		this.childInfoQuery()
		switch (this.user.info.score_level){
			case 0:
				this.level = '小白'
			break
			case 1:
				this.level = '幼儿园'
			break
			case 2:
				this.level = '小学'
			break
			case 3:
				this.level = '初中'
			break
			case 4:
				this.level = '高中'
			break
			case 5:
				this.level = '大学'
			break
			default:
				this.level = '小白'
			break
		}
	}
}
</script>