var chartDom = document.getElementById('mainform');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '本月工作时长',
        subtext: '四月',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 940, name: '武九' },
                { value: 700, name: '李四' },
                { value: 800, name: '王五' },
                { value: 580, name: '钱七' },
                { value: 484, name: '张三' },
                { value: 1068, name: '罗六' },
                { value: 610, name: '郑八' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
option && myChart.setOption(option);

var chartDom1 = document.getElementById('mainform1');
var myChart1 = echarts.init(chartDom1);
var option1;

option1 = {
    dataset: {
        source: [
            ['score', 'amount', 'worker'],
            [89.3, 58212, '武九'],
            [57.1, 78254, '李四'],
            [74.4, 41032, '王五'],
            [50.1, 12755, '钱七'],
            [89.7, 20145, '张三'],
            [68.1, 79146, '罗六'],
            [19.6, 91852, '郑八'],
            // [10.6, 101852, 'Lemon Juice'],
            // [32.7, 20112, 'Walnut Brownie']
        ]
    },
    grid: { containLabel: true },
    xAxis: { name: 'amount' },
    yAxis: { type: 'category' },
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 10,
        max: 100,
        text: ['High Score', 'Low Score'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'worker'
            }
        }
    ]
};

option && myChart1.setOption(option1);

