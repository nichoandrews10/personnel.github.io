const chart1 = document.querySelector("#chart-1").getContext('2d');
const chart2 = document.querySelector("#chart-2").getContext('2d');

// Create 1st chart instance (Overall Employee Stats)
new Chart(chart1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets:  [
            {
                label: 'Total Employees (%)',
                data: [15, 20, 31, 15, 20, 20, 19, 40, 45, 60, 75],
                borderColor: 'blue',
                borderWidth: 2
            },
            {
                label: 'New Employees (%)',
                data: [0, 5, 11, 0, 5, 0, 0, 21, 5, 15, 15],
                borderColor: 'green',
                borderWidth: 2
            },
            {
                label: 'Leave (%)',
                data: [0, 0, 0, 16, 0, 0, 1, 0, 0, 0, 0],
                borderColor: 'red',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

// Create 2st chart instance (Employee Gender Stats)
new Chart(chart2, {
    type: 'pie',
    data: {
        labels: ['Male (%)', 'Female (%)'],
        datasets:  [
            {
                label: 'Total Employees (%)',
                data: [70,30],
                backgroundColor: ['#7380ec','#41f1b6'],
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})
