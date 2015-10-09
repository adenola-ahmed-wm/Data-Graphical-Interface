/**
 * Created by session2 on 10/7/15.
 */
googlle.load('visualization', '1', {packages: ['corechart', 'bar']});
googlle.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['City', '2010 Population', { role: 'style' }],
        ['New York City, NY', 8175000, 'color: red' ],
        ['Los Angeles, CA', 3792000, 'color: gold'],
        ['Chicago, IL', 2695000, 'color: silver'],
        ['Houston, TX', 2099000, 'color: orange'],
        ['Philadelphia, PA', 1526000, 'color: black']
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'City'
        },
        backgroundColor: 'blue'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}