const data = [{
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];



var chartsComponent = document.querySelector('#chartComponent');

var html = '';
data.forEach((item, index) => {
    html +=`
    
    <div class="chart-item">
        
        <div class="bar position-relative" style="height:${item.amount * 3}px">
            <div class="d-none hoverable-amount justify-content-center align-items-center">
                <span>
                $${item.amount}
                </span>
            </div>
        </div>
        <span>
         ${item.day}
        </span>
    </div>
    
    
    `;
})


$(chartsComponent).append(html);
console.log(html);