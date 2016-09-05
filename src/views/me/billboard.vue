<template>
	<scroller v-ref:scroller
			  lock-x>

	<div class="mz-billboard mz-item">
		<loading v-ref:loading
		         @on-refresh="query">
		</loading>

		<div v-if="$index == 0" class="mz-billboard-top-1" v-for="item in items">

			<i class="mz-billboard-rank">NO.{{$index+1}}</i>

			<div class="mz-billboard-avatar">

					<img src="/images/crown.png" class="mz-billboard-top-1-crown">
					<img :src="item.user_avatar" class="mz-billboard-img-avatar">

				  <div class="mz-billboard-top-1-decorate">
					  {{item.user_name}}
				  </div>

			</div>

		</div>

		<div v-if="$index > 0" class="mz-billboard-item" :class="[item.id%2 == 0 ? 'mz-item-odds' : 'mz-item-even']" v-for="item in items">

			<span class="mz-billboard-item-rank-number">NO.{{$index+1}}</span>
			<img :src="item.user_avatar" class="mz-billboard-img-avatar">

			<div>
				<p class="mz-billboard-name">{{item.user_name}} <span class="mz-billboard-level">v{{item.score_level}}</span></p>
				<p class="mz-billboard-point">打卡次数:{{item.signin_count}}</p>
			</div>

		</div>

	</div>
	</scroller>
</template>

<style>
.mz-billboard-top-1{
	height: 133px;
	background: #72e4dc;
	color: #fff;
	display: flex;
	align-items: center;
	justify-items: center;
	justify-content: center;
}
.mz-billboard-rank{
	position: absolute;
	top:57px;
	left: 0;
	width: 68px;
	height: 20px;
	background: #fc8087;
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;
	font-style: normal;
	font-size: 1.6rem;
	line-height: 20px;
	text-align: center;
}
.mz-billboard-top-1 .mz-billboard-img-avatar{
	height: 60px;
	width: 60px;
	border-radius: 50%;
}
.mz-billboard-item{
	height:60px;
	display: flex;
	align-items: center;
}
.mz-billboard-item .mz-billboard-img-avatar{
	height: 50px;
	width: 50px;
	border-radius: 50%;
	margin: 0 20px 0 0;
}
.mz-item-odds{
	background: #fff7e6;
}
.mz-item-even{
	background: #fffcf5;
}
.mz-billboard-name{
	color:#333;
	font-size: 1.6rem;
}
.mz-billboard-point{
	color:#6cd9d1;
	font-size:1.4rem;
}
.mz-billboard-item-rank-number{
	color: #ffba27;
	font-size: 2.4rem;
	margin: 0 31px 0 16px;
}
.mz-billboard-avatar{
	position: relative;
}
.mz-billboard-top-1-crown{
	position: absolute;
	width: 44px;
	top:-15px;
	left:50%;
	margin-left: -22px;
}
.mz-billboard-top-1-decorate{
	width: 152px;
	height: 40px;
	background-image: url("/images/decorate.jpg");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: 50%;
	margin-left: -77px;
	bottom: -6px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
.mz-billboard-level{
	display: inline-block;
	border:2px solid #FBDF86;
	border-radius:50%;
	background-color: #F7BE32;
	font-size:10px;
	color: #FFFFFF;
	text-align: center;
	vertical-align: middle;
	width:15px;
	height:15px;
	line-height: 16px;
}
</style>

<script>
import {getRankList} from '../../vuex/getters/activityGetter'
import {rankListQuery} from '../../vuex/actions/activityAction'
import loading from '../../components/load/loading.vue'
import Scroller from '../../../node_modules/vux/dist/components/scroller/index'
export default{
	vuex: {
		getters: {
			items: getRankList
		},
		actions: {
			rankListQuery
		}
	},
	components: {
		Scroller,
		loading
	},
	methods: {
		query: function () {
			var _self = this;
			this.$refs.loading.OnLoading()
			this.rankListQuery().then(function (data) {
//				if(isEmptyObject(_self.items)){
//					_self.$refs.loading.OnEmpty()
//				}
//				else{
					_self.$refs.loading.OnHide()
//				}
			}).catch(function () {
				_self.$refs.loading.OnError()
			})
		},
		loaded: function () {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		}
	},
	watch:{
		items:function () {
			this.loaded()
		}
	},
	ready:function () {
		if (this.items.length === 0){
			this.query()
		}
	}
}
</script>