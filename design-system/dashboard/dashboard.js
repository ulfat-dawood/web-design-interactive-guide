const annualProgress= document.querySelector('#annual-progress').getContext('2d');

let chart= new Chart(annualProgress , {
    type: 'bar', //horizontalBar , pie , line , doughnut , radar , polarArea
    data: {
        labels:[], 
        datasets:[]
    }, 
    options: {}
})