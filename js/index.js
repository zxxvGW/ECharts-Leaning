// 柱状图
(function () {
	//1.初始化
	let myChart = echarts.init(document.querySelector('.bar .chart'))
	//2.配置
	const option = {
		color: ["#2f89cf"],
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '0%',
			top: '10px',
			right: '0%',
			bottom: '4%',
			containLabel: true,

		},
		xAxis: [
			{
				type: 'category',
				data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12'
				},
				// 不显示x轴的线
				axisLine: {
					show: true
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					color: 'rgba(255,255,255,.6)',
					fontSize: '12'
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)',
						width: 2
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(255,255,255,.1)',
						// width: 2
					}
				},
			}
		],
		series: [
			{
				name: '直接访问',
				type: 'bar',
				barWidth: '30%',
				data: [200, 300, 300, 900, 1500, 1200, 600],
				itemStyle: {
					barBorderRadius: 5
				}
			}
		]
	};
	//3.配置应用
	myChart.setOption(option)
	// 自适应
	window.addEventListener("resize", function () {
		myChart.resize();
	})
})();

// 柱状图-右
(function () {
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	let myChart = echarts.init(document.querySelector('.bar-right .chart'))
	const option = {
		grid: {
			top: "10%",
			left: "22%",
			bottom: "10%"
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: "category",
				inverse: true,
				data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
				// 不显示y轴的线
				axisLine: {
					show: false
				},
				// 不显示刻度
				axisTick: {
					show: false
				},
				// 把刻度标签里面的文字颜色设置为白色
				axisLabel: {
					color: "#fff"
				}
			},
			{
				data: [702, 350, 610, 793, 664],
				inverse: true,
				// 不显示y轴的线
				axisLine: {
					show: false
				},
				// 不显示刻度
				axisTick: {
					show: false
				},
				// 把刻度标签里面的文字颜色设置为白色
				axisLabel: {
					color: "#fff"
				}
			},
		],

		series: [
			{
				name: "条",
				type: "bar",
				data: [70, 34, 60, 78, 69],
				yAxisIndex: 0,
				// 修改第一组柱子的圆角
				itemStyle: {
					barBorderRadius: 20,
					// 此时的color 可以修改柱子的颜色
					color: function (params) {
						// params 传进来的是柱子对象
						// dataIndex 是当前柱子的索引号
						return myColor[params.dataIndex];
					}
				},
				// 柱子之间的距离
				barCategoryGap: 50,
				//柱子的宽度
				barWidth: 10,
				// 显示柱子内的文字
				label: {
					show: true,
					position: "inside",
					// {c} 会自动的解析为 数据  data里面的数据
					formatter: "{c}%"
				}
			},
			{
				name: "框",
				type: "bar",
				barCategoryGap: 0,
				barWidth: 15,
				yAxisIndex: 1,
				data: [100, 100, 100, 100, 100],
				itemStyle: {
					color: "none",
					borderColor: "#00c1de",
					borderWidth: 3,
					barBorderRadius: 15
				}
			}
		]
	}
	myChart.setOption(option)
	window.addEventListener("resize", function () {
		myChart.resize();
	})
})();

// 折线图左
(function () {
	let yearData = [
		{
			year: "2020", // 年份
			data: [
				// 两个数组是因为有两条线
				[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
				[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
			]
		},
		{
			year: "2021", // 年份
			data: [
				// 两个数组是因为有两条线
				[123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
				[143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
			]
		}
	];
	let myChart = echarts.init(document.querySelector('.line .chart'))
	const option = {

		tooltip: {
			trigger: 'axis'
		},
		legend: {
			textStyle: {
				color: '#4c9bfd' // 图例文字颜色
			},
			right: '10%' // 距离右边10%
		},
		grid: {
			top: '20%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			show: true,// 显示边框
			borderColor: '#012f4a',// 边框颜色
			containLabel: true // 包含刻度文字在内
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: '#4c9bfd' // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			},
			boundaryGap: false  // 去除轴内间距
		},
		yAxis: {
			type: "value",
			axisTick: {
				show: false // 去除刻度线
			},
			axisLabel: {
				color: "#4c9bfd" // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			},
			splitLine: {
				lineStyle: {
					color: "#012f4a" // 分割线颜色
				}
			}
		},
		color: ['#00f2f1', '#ed3f35'],
		series: [
			{
				name: '新增粉丝',
				type: 'line',
				// stack: '总量',
				data: yearData[0].data[0],
				smooth: true,
			},
			{
				name: '新增游客	',
				type: 'line',
				// stack: '总量',
				data: yearData[1].data[0],
				smooth: true,
			},
		]
	}
	myChart.setOption(option)
	window.addEventListener("resize", function () {
		myChart.resize();
	})

	// 点击切换年份
	$('.line h2').on('click', 'a', function () {
		let obj = yearData[$(this).index()]
		option.series[0].data = obj.data[0]
		option.series[1].data = obj.data[1]
		myChart.setOption(option)
	})

})();
// 折线图右
(function () {
	let myChart = echarts.init(document.querySelector('.line-right .chart'))
	const option = {
		tooltip: {
			trigger: 'axis',
		},
		legend: {
			top: "0%",
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: "10",
			top: "30",
			right: "10",
			bottom: "10",
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
				axisLabel: {
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: 12
					}
				},
				// x轴线的颜色为   rgba(255,255,255,.2)
				axisLine: {
					lineStyle: {
						color: "rgba(255,255,255,.2)"
					}
				},
			}
		],
		yAxis: [
			{
				axisTick: { show: false },
				axisLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
					}
				},
				axisLabel: {
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: 12
					}
				},
				// 修改分割线的颜色
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
					}
				}
			},
		],
		series: [
			{
				name: '播放量',
				type: 'line',
				// stack: '总量',
				emphasis: {
					focus: 'series'
				},
				smooth: true,
				// 单独修改线的样式
				lineStyle: {
					color: "#0184d5",
					width: 2
				},
				// 填充区域
				areaStyle: {
					// 渐变色，只需要复制即可
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
						[
							{
								offset: 0,
								color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
							},
							{
								offset: 0.8,
								color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
							}
						],
						false
					),
					shadowColor: "rgba(0, 0, 0, 0.1)"
				},
				// 设置拐点 小圆点
				symbol: "circle",
				// 拐点大小
				symbolSize: 8,
				// 设置拐点颜色以及边框
				itemStyle: {
					color: "#0184d5",
					borderColor: "rgba(221, 220, 107, .1)",
					borderWidth: 12
				},
				// 开始不显示拐点， 鼠标经过显示
				showSymbol: false,
				data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
			},
			{
				name: "转发量",
				type: "line",
				smooth: true,
				lineStyle: {
					normal: {
						color: "#00d887",
						width: 2
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
							[
								{
									offset: 0,
									color: "rgba(0, 216, 135, 0.4)"
								},
								{
									offset: 0.8,
									color: "rgba(0, 216, 135, 0.1)"
								}
							],
							false
						),
						shadowColor: "rgba(0, 0, 0, 0.1)"
					}
				},
				// 设置拐点 小圆点
				symbol: "circle",
				// 拐点大小
				symbolSize: 5,
				// 设置拐点颜色以及边框
				itemStyle: {
					color: "#00d887",
					borderColor: "rgba(221, 220, 107, .1)",
					borderWidth: 12
				},
				// 开始不显示拐点， 鼠标经过显示
				showSymbol: false,
				data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
			},
		]
	}
	myChart.setOption(option)
	window.addEventListener("resize", function () {
		myChart.resize();
	})
})();

// 饼图左
(function () {
	let myChart = echarts.init(document.querySelector(".pie .chart"))
	const option = {
		tooltip: {
			trigger: 'item'
		},
		color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab",],
		legend: {
			// 距离底部为0%
			bottom: "0%",
			// 小图标的宽度和高度
			itemWidth: 10,
			itemHeight: 10,
			data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
			// 修改图例组件的文字为 12px
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},
		series: [
			{
				name: "年龄分布",
				type: "pie",
				// 设置饼形图在容器中的位置
				center: ["50%", "50%"],
				//  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
				radius: ["40%", "60%"],
				// 不显示标签文字
				label: { show: true },
				// 不显示连接线
				labelLine: { show: true },
				data: [
					{ value: 1, name: "0岁以下" },
					{ value: 4, name: "20-29岁" },
					{ value: 2, name: "30-39岁" },
					{ value: 2, name: "40-49岁" },
					{ value: 1, name: "50岁以上" }
				],
			}
		]
	}
	myChart.setOption(option)
	window.addEventListener("resize", function () {
		myChart.resize();
	})
})();

// 饼图右
(function () {
	let myChart = echarts.init(document.querySelector(".pie-right .chart"))
	const option = {
		color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			bottom: "0%",
			itemWidth: 8,
			itemHeight: 8,
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"

			}
		},
		series: [
			{
				name: '面积模式',
				type: 'pie',
				radius: ['10%', '60%'],
				center: ['45%', '50%'],
				roseType: 'radius',
				itemStyle: {
					borderRadius: 5
				},
				label: {
					fontSize: 10
				},
				labelLine: {
					// 连接扇形图线长
					length: 6,
					// 连接文字线长
					length2: 8
				},
				data: [
					{ value: 20, name: '云南' },
					{ value: 26, name: '北京' },
					{ value: 24, name: '山东' },
					{ value: 25, name: '河北' },
					{ value: 20, name: '江苏' },
					{ value: 25, name: '浙江' },
					{ value: 30, name: '四川' },
					{ value: 42, name: '湖北' }
				]
			}
		]
	}
	myChart.setOption(option)
	window.addEventListener("resize", function () {
		myChart.resize();
	})
})()

//航线图
