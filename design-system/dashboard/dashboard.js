const annualProgress= document.querySelector('#annual-progress').getContext('2d');

//Global Options:
Chart.defaults.global.defaultFontFamily='Roboto';  

let chart= new Chart(annualProgress , {
    type: 'line', //horizontalBar , pie , line , doughnut , radar , polarArea
    data: {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 
        //we can have multiple data sets
        datasets:[{
            label:'population',
            data:[2,5,6,9,11,15,20,24,27,29,34,37]
        }]
    }, 
    options: {
        title:{display:false},
        legend:{display:false}
    }
})