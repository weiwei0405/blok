<template>
	<div class="from form-group">
		<div class="form-group ">
			<label class="col-sm-1 text-right">最小数：</label>
			<div class="col-sm-10">
				<input type="number" class="form-control" v-model="min" name="min" />
			</div>
		</div>
		<div class=" form-group">
			<label class="col-sm-1 text-right">最大数：</label>
			<div class="col-sm-10">
				<input type="number" class="form-control" v-model="max" name="max" />
			</div>
		</div>
		<div class=" form-group">
			<label class="col-sm-1 text-right">生成数：</label>
			<div class="col-sm-10">
				<input type="number" class="form-control" v-model="nums" name="nums" />
			</div>
		</div>
		<div class="form-group">
			<button class="col btn btn-primary" v-on:click="twonumbers()">生成两个数运算</button>

		</div>
		<div class="form-group">
			<button class="col btn btn-primary" v-on:click="threenumbers()">生成三个数运算</button>
		</div>
		<div class="form-group">
			<label class="col-sm-1 text-right">字体大小:</label>
			<div class="col-sm-10">
				<input type="range" />
			</div>
		</div>
	</div>
	<button @click="print()">打印</button>
	<ul class="list" ref="print" id="printTest">
		<li v-for="(item,index) in list" :style="{fontSize:fontSize +'px',width:width+'%'}">
			{{item.q}}
		</li>
	</ul>


</template>
<script>
	import $ from 'jquery'
	// @ is an alias to /src

	//  import importAll from '../components/until/function.js'
	// const map = importAll(require.context('components',false,/Base[A-Z]\w+\.(vue|js)$/))
 
	export default {
		name: 'Home',
		data() {
			return {
				isshow: false,
				min: 1,
				max: 30,
				nums: 100,
				mark: ['÷', '-', '+', '×'],
				fontSize: 16,
				width: 10,
				list: []
			}
		},
		created() {

		},
		mounted() {

			 console.log(Print)

		},
		methods: {
			random(min, max) {
				return Math.floor(Math.random() * (max - min)) + min
			},
			twonumbers() {
				this.list = [];
				var min = this.min
				var max = this.max
				var nums = this.nums
				for (let i = 0; i < nums; i++) {
					var num1 = this.random(min, max)
					var num2 = this.random(min, max)
					var str = [];
					if (num1 < num2) {
						let num = num2;
						num2 = num1
						num1 = num
					}

					if ((num1 / num2) % 1 === 0) {
						str['q'] = num1 + ' ÷ ' + num2 + ' = '
						str['a'] = num1 / num2
					} else {
						let y = this.mark[this.random(1, 4)]
						str['q'] = num1 + " " + y + " " + num2 + ' = '
						str['a'] = (num1 + y + num2)
						switch (y) {
							case '+':
								str['a'] = (num1 + num2)
								break;
							case '-':
								str['a'] = (num1 - num2)
								break;
							case '×':
								str['a'] = (num1 * num2)
								break;
						}
					}

					this.list.push(str)

				}
			},
			threenumbers() {
				this.list = [];
				var min = this.min
				var max = this.max
				var nums = this.nums
				for (let i = 0; i < nums; i++) {
					var num1 = this.random(min, max)
					var num2 = this.random(min, max)
					var num3 = this.random(min, max)
					var strs = [];
					let y1 = this.mark[this.random(1, 4)]
					let y2 = this.mark[this.random(1, 4)]
					var str;
					var ask;
					if ((num1 / num2) % 1 === 0) {
						str = num1 + '÷' + num2
						if (num1 / num2 > num3) {
							str = str + y1 + num3
						} else {
							str = num3 + y2 + str
						}
					} else {
						if (num1 < num2) {
							str = num1 + this.mark[this.random(2, 4)] + num2
							if ((num1 + num2) > num3 || (num1 * num2) > num3) {
								str = str + this.mark[this.random(1, 4)] + num3
							} else {
								str = num3 + this.mark[this.random(1, 4)] + str
							}
						} else {
							str = num1 + y1 + num2 + y2 + num3
						}

					}



					strs['q'] = str + ' = '

					this.list.push(strs)





				}



			},
		 
		},


	}
</script>
<style scoped="scoped">
	.main {
		width: var(--width);
		margin: 0 auto;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		padding: 2%;
		flex-direction: row;
	}

	ul li {
		display: inline-block;
		width: 20%;
		font-size: 16px;
	}

	.from {
		display: block;
		padding: 2%;
	}

	.from>div {
		display: flex;
	}

	.col-sm-8 {
		padding-left: 0;
	}
</style>
