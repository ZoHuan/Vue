var FPYGauge = echarts.init(document.getElementById("FPY"));
var FPYData = [
  {
    name: "",
    value: 45,
  },
];
var FPYOption = {
  series: (function () {
    var result = [];
    FPYData.forEach(function (item) {
      result.push(
        {
          name: "背景圈",
          type: "gauge",
          radius: "100%",
          startAngle: 220,
          endAngle: -40,
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: [
                [
                  1,
                  new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "RGBa(38, 50, 73,1)",
                    },
                  ]),
                ],
              ],
              width: 12,
            },
          },
          splitLine: {
            //分隔线样式
            show: false,
          },
          axisLabel: {
            //刻度标签
            show: false,
          },
          pointer: {
            show: false,
          },
          axisTick: {
            //刻度样式
            show: false,
          },
          detail: {
            show: true,
            offsetCenter: [0, "34%"],
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,1)",
            },
            formatter: function () {
              return "FPY";
            },
          },
        },
        // 最外层含中间数据
        {
          name: item.name,
          type: "gauge",
          radius: "100%",
          startAngle: 220,
          endAngle: -40,
          min: 0,
          max: 100,
          axisLine: {
            show: true,
            lineStyle: {
              width: 12,
              color: [
                [
                  item.value / 100,
                  new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: "rgba(18,124,245,1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(11,73,147,1)",
                    },
                  ]),
                ],
              ],
            },
          },
          axisTick: {
            show: 0,
          },
          splitLine: {
            show: 0,
          },
          axisLabel: {
            show: 0,
          },
          pointer: {
            show: false,
          },
          detail: {
            show: true,
            offsetCenter: [0, "-6%"],
            formatter: function (params) {
              return item.value + "%";
            },
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,1)",
            },
          },
          data: [
            {
              value: item.value,
            },
          ],
        }
      );
    });
    return result;
  })(),
};
FPYGauge.setOption(FPYOption);

var UPHGauge = echarts.init(document.getElementById("UPH"));
var UPHData = [
  {
    name: "",
    value: 98.5,
  },
];
var UPHOption = {
  series: (function () {
    var result = [];
    UPHData.forEach(function (item) {
      result.push(
        {
          name: "背景圈",
          type: "gauge",
          radius: "100%",
          startAngle: 220,
          endAngle: -40,
          axisLine: {
            // 坐标轴线
            lineStyle: {
              // 属性lineStyle控制线条样式
              color: [
                [
                  1,
                  new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "RGBa(38, 50, 73,1)",
                    },
                  ]),
                ],
              ],
              width: 12,
            },
          },
          splitLine: {
            //分隔线样式
            show: false,
          },
          axisLabel: {
            //刻度标签
            show: false,
          },
          pointer: {
            show: false,
          },
          axisTick: {
            //刻度样式
            show: false,
          },
          detail: {
            show: true,
            offsetCenter: [0, "34%"],
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,1)",
            },
            formatter: function () {
              return "UPH";
            },
          },
        },
        // 最外层含中间数据
        {
          name: item.name,
          type: "gauge",
          radius: "100%",
          startAngle: 220,
          endAngle: -40,
          min: 0,
          max: 100,
          axisLine: {
            show: true,
            lineStyle: {
              width: 12,
              color: [
                [
                  item.value / 100,
                  new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: "rgba(18,124,245,1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(11,73,147,1)",
                    },
                  ]),
                ],
              ],
            },
          },
          axisTick: {
            show: 0,
          },
          splitLine: {
            show: 0,
          },
          axisLabel: {
            show: 0,
          },
          pointer: {
            show: false,
          },
          detail: {
            show: true,
            offsetCenter: [0, "-6%"],
            formatter: function (params) {
              return item.value + "%";
            },
            textStyle: {
              fontSize: 12,
              color: "rgba(255,255,255,1)",
            },
          },
          data: [
            {
              value: item.value,
            },
          ],
        }
      );
    });
    return result;
  })(),
};
UPHGauge.setOption(UPHOption);

var yieldHistogram = echarts.init(document.getElementById("yield"));
var yieldData = {
  name: [
    "CLO1",
    "CLO3",
    "LO2",
    "LO3",
    "LO5",
    "LO7",
    "LO9",
    "L22",
    "L23",
    "SLO1",
  ],
  num1: [
    98,
    94,
    30,
    180,
    268,
    350,
    482,
    360,
    375,
    300,
    320,
    140,
    192,
    110,
    124,
    68,
    86,
  ],
  num2: [
    97,
    92,
    28,
    176,
    256,
    342,
    488,
    390,
    380,
    310,
    324,
    170,
    168,
    89,
    145,
    68,
    88,
  ],
};

var yieldOption = {
  grid: {
    left: "2%",
    right: "2%",
    bottom: "2%",
    top: "16%",
    containLabel: true,
  },

  xAxis: [
    {
      type: "category",
      data: yieldData.name,
      axisLabel: {
        //坐标轴刻度标签的相关设置。
        textStyle: {
          color: "#65abe7",
          fontStyle: 700,
          fontFamily: "微软雅黑",
          fontSize: 14,
        },
        rotate: 50,
      },
      axisTick: {
        //坐标轴刻度相关设置。
        show: false,
      },
      axisLine: {
        //坐标轴轴线相关设置
        lineStyle: {
          color: "#65abe7",
          opacity: 0.2,
        },
      },
      splitLine: {
        //坐标轴在 grid 区域中的分隔线。
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      splitNumber: 5,
      axisLabel: {
        textStyle: {
          color: "#65abe7",
          fontStyle: "700",
          fontFamily: "微软雅黑",
          fontSize: 10,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#0f2a42"],
          opacity: 1,
        },
      },
    },
  ],
  series: [
    {
      name: "",
      type: "bar",
      data: yieldData.num1,
      barWidth: 10,
      barGap: 0, //柱间距离
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#41e8d3",
            },
            {
              offset: 1,
              color: "#86f8d9",
            },
          ]),
        },
      },
    },
    {
      name: "",
      type: "bar",
      data: yieldData.num2,
      barWidth: 10,
      barGap: 0, //柱间距离
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#597eef",
            },
            {
              offset: 1,
              color: "#3d66ea",
            },
          ]),
        },
      },
    },
  ],
};
yieldHistogram.setOption(yieldOption);