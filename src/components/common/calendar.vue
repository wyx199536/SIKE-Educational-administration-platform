<template>
	<div :class="{'calendar-area-a':ifA,'calendar-area-b':ifB,'calendar-area-c':ifC,}">
		<div id="calendar-title">
			<span class="calendar-title-element">{{year}}年{{month}}月</span>
			<span class="calendar-title-element calendar-change-element" @click="monthDel">&lt;</span>
			<span class="calendar-title-element calendar-change-element" @click="monthAdd">&gt;</span>
			<button @click="test">test</button>
		</div>
		<div id="calendar-weeks">
			<div v-for="w in weeks" :key="w" class="week-box">
				{{w}}
			</div>
		</div>
		<div>
			<div v-for="weekLine in calendarArray" :key="weekLine.line" class="calendar-week-element">
				<div v-for="day in weekLine" :key="day.index" class="calendar-day-element">
					<span>
						{{day.day}}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'calender',
		data(){
			return{
				ifA: this.$store.state.cssTypeA,
				ifB: this.$store.state.cssTypeB,
				ifC: this.$store.state.cssTypeC,
				date: this.$store.state.initialDate,
				year: 0,
				month: 0,
				weeks: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
				calendarArray: []
			}
		},
		props:{
			lessons: {
				type: Array,
			}
		},
		methods:{
			monthAdd(){
				if(this.month < 12){
					this.month = ++this.month
				}else{
					this.month = 1
					this.year = ++this.year
				}
			},
			monthDel(){
				if(this.month > 1){
					this.month = --this.month
				}else{
					this.month = 12
					this.year = --this.year
				}
			},
			getCalendarArray(year,month){
				let calendar = []
				let date = new Date()
				date.setFullYear(year,month-1,1)
				let week = date.getDay()//获取传入月份的1号是周几
				date.setFullYear(year,month,0)
				let monthLength = date.getDate()//获取传入月份的天数
				let exactDay = 1
				let index = 1
				for(let i = 0; i < 6;i++){
					let weekLine = []
					if(i == 0){
						//填充第一行特殊情况
						for(let j = 0; j < 7;j++){
							let day = {line: 0,index: index}
							if(j < week){
								//日历的空白
								day.day = '1'
							}else{
								//日历的开始
								day.day = exactDay.toString()
								++exactDay
							}
							index++
							weekLine.push(day)
						}
					}else{
						//第二行到最后一行						
						for(let j = 0; j < 7;j++){
							let day = {line: j,index: index}
							if(exactDay <= monthLength){
								//月份长度内的天数
								day.day = exactDay.toString()
								++exactDay
							}else{
								day.day = '1'
							}
							index++
							weekLine.push(day)
						}
					}	
					calendar.push(weekLine)
				}
				return calendar
			},
			test(){
				console.log(this.calendarArray)
			}
		},
		created(){
			let y = this.$store.state.initialYear
			this.year = Number(y)
			let m = this.$store.state.initialMonth
			this.month = Number(m)
			this.calendarArray = this.getCalendarArray(this.year,this.month)
		}
	}
</script>

<style scoped>
	.calendar-area-a{
		
	}
	.calendar-area-b{
		min-width: 1040px;
		width: 1040px;
		height: 100%;
		user-select: none;
	}
	.calendar-area-c{
		min-width: 1200px;
		width: 1200px;
		height: 100%;
		user-select: none;
	}
	.calendar-title-element{
		margin-right: 15px;
	}
	.calendar-change-element{
		cursor: pointer;
	}
	.calendar-week-element{
		width: 100%;
	}
	.calendar-day-element{
		display: inline-block;
		width: calc(100% / 7 - 2px);
		height: 100px;
		border: 1px #000000 solid;
	}
	#calendar-title{
		font-size: 20px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.week-box{
		display: inline-block;
		width: calc(100% / 7 - 2px);
		text-align: center;
		border: 1px #000000 solid;
	}
</style>
