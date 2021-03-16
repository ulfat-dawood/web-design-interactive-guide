
//////////// ANNUAL PROGRESS ////////////
const annualProgress= document.querySelector('#annual-progress').getContext('2d');
gradient = annualProgress.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0.3, 'rgba(220, 176, 255,0.9)');
gradient.addColorStop(.7, 'rgba(220, 176, 255,0)');

//Global Options:
Chart.defaults.global.defaultFontFamily='Roboto'; 

let chart= new Chart(annualProgress , {
    type: 'line', //horizontalBar , pie , line , doughnut , radar , polarArea
    data: {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 
        //we can have multiple data sets
        datasets:[
        {
            label:'Cost',
            data:[90,40,80,30,30,30,50,25,35,30,55,47],
            pointBackgroundColor:'transparent',
            borderColor:'transparent',
            backgroundColor: '#F15F7933',

        },
        {
            label:'Revenue',
            data:[20,50,30,50,30,40,80,54,95,50,40,80],
            pointBackgroundColor:'#845EC2',
            pointBorderColor:'#fff',
            pointBorderWidth:1,
            pointRadius:4,
            borderWidth:4,
            borderColor:'#845EC2',
            backgroundColor: gradient,
        }]
    }, 
    options: {
        title:{display:false},
        legend:{display:true},
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
               ticks: {stepSize: 20},
               gridLines: {display: false},
            }],
            xAxes: [{
               gridLines: {display: false},
            }]
        }
    }
})

//////////// MONTHLY SALES ////////////
const monthlySales= document.querySelector('#monthly-sales').getContext('2d');

let salesChart= new Chart(monthlySales , {
    type: 'line', //horizontalBar , pie , line , doughnut , radar , polarArea
    data: {
        labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 
        //we can have multiple data sets
        datasets:
        [
            {
                label:'Sales',
                data:[20,50,30,50,30,40,80,54,95,50,40,80,45,55,43,32,21,12,23,43,65,65,76,77,87,87,88,65,54,45,43,43,43,23,54,65,87,98],
                pointBackgroundColor:'transparent',
                pointBorderColor:'transparent',
                pointBorderWidth:1,
                pointRadius:4,
                borderWidth:4,
                borderColor:'#845EC2',
                backgroundColor:'transparent',
                lineTension: 0, 
            },
            {
                label:'Profit',
                data:[12,10,23,21,22,11,32,43,22,43,34,45,64,44,46,33,43,41,46,46,49,35,66,87,98,87,76,87,98,83],
                pointBackgroundColor:'transparent',
                pointBorderColor:'transparent',
                pointBorderWidth:1,
                pointRadius:4,
                borderWidth:4,
                borderColor:'#EB5D7A',
                backgroundColor:'transparent',
                lineTension: 0, 
            },
            {
                label:'Users',
                data:[5,6,4,3,2,6,7,8,4,8,9,10,15,16,19,18,27,29,27,37,30,20,10,9,10,15,20,30,36,30],
                pointBackgroundColor:'transparent',
                pointBorderColor:'transparent',
                pointBorderWidth:1,
                pointRadius:4,
                borderWidth:4,
                borderColor:'#15638D',
                backgroundColor:'transparent',
                lineTension: 0, 
            },
        ]
    }, 
    options: {
        title:{display:false},
        legend:{
            display:true,
            position:'bottom',
            labels:{
                boxWidth:3, 
            }
        },
        responsive:true,
        maintainAspectRatio: false,

        scales: {
            yAxes: [{
               ticks: {stepSize: 20},
               gridLines: {display: true},
            }],
            xAxes: [{
               gridLines: {display: true},
            }],

        }
    }
})

//////////// VISITORS STATUS ////////////

const visitorsStatus= document.querySelector('#visitors-status').getContext('2d');

let visitors= new Chart(visitorsStatus, {
    type: 'bar',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[
            {
                label:'New Visitor',
                data:[2,4,3,4,6,8],
                backgroundColor: '#845EC2',
                barThickness:15,
    
            },
            {
                label:'Old Visitor',
                data:[1,3,1,3,4,6],
                backgroundColor: '#DCB0FFcc',
                barThickness:15,
    
            }],
    },
    options:{
        legend:{
            display:true,
            position:'bottom',
            labels:{
                boxWidth:15,
            }
        },

        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
               ticks: {
                   stepSize: 2,
                   callback: function(value, index, values) {
                    return value + 'k';}
                },
               gridLines: {display: true},
            }],
            xAxes: [{
               gridLines: {display: false},
            }]
        }
    }
})
   
//////////// COUNTRIES ////////////

const countries= document.querySelector('#countries').getContext('2d');

let countriesChart= new Chart(countries, {
    type: 'horizontalBar',
    data:{
        labels:['KSA','US','UK','India','UAE','Oman'],
        datasets:[
            {
                label:'Visitors per Countries',
                data:[2,4,3,4,6,8],
                backgroundColor: ['#845EC2','#129759','#B74790','#DD261D','#EB5D7A','#15638D',],
                barThickness:15,
    
            }],
    },
    options:{
        legend:{
            display:false,
            position:'bottom',
            labels:{
                boxWidth:15,
            }
        },

        responsive:true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
               ticks: {
                beginAtZero: true,
                stepSize: 2,
                   callback: function(value, index, values) {
                    return value + 'k';}
                },
               gridLines: {display: true},
            }],
            yAxes: [{
               gridLines: {display: false},
               ticks:{
                fontSize:18,
               },

               
            }],
            
            
        }
    }
})
 


//////////// GAUGE #1 ////////////

const gauge1= document.querySelector('#gauge-1').getContext('2d');

let gauge1Chart= new Chart(gauge1, {
    type: 'doughnut',
    data:{
        labels:['Target'],
        datasets:[
            {
                label:'New Visitor',
                data:[40,60],
                backgroundColor: ['#FF6F91','#fff'],
                borderColor: 'transparent',
    
            }],
    },
    options:{
        responsive:true,
        maintainAspectRatio: false,
        legend:{
            display:true,
            position:'left',
            labels:{
                fontColor:'#fff',
                boxWidth:20,
                fontSize:18,
            }
        },
        //turn the doughnut into gauge:
        maintainAspectRatio: false,
        circumference: Math.PI + 1,
        rotation: -Math.PI - 0.5,
        cutoutPercentage: 64,
    }
})


//////////// GAUGE #2 ////////////

const gauge2= document.querySelector('#gauge-2').getContext('2d');

let gauge2Chart= new Chart(gauge2, {
    type: 'doughnut',
    data:{
        labels:['Visitors'],
        datasets:[
            {
                label:'Daily Visitors',
                data:[80,20],
                backgroundColor: ['#845EC2','#fff'],
                borderColor: 'transparent',
                
            }],
    },
    options:{
        responsive:true,
        maintainAspectRatio: false,
        legend:{
            display:true,
            position:'left',
            labels:{
                boxWidth:15,
                fontColor:'#fff',
                boxWidth:20,
                fontSize:18,
            },
            
        },
        //turn the doughnut into gauge:
        maintainAspectRatio: false,
        circumference: Math.PI + 1,
        rotation: -Math.PI - 0.5,
        cutoutPercentage: 64,
    }
})