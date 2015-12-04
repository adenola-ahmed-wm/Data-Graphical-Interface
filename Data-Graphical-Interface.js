/**
 * Created by session2 on 10/7/15.
 */
google.load('visualization', '1', {
    packages: ['corechart', 'bar']
});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Rapper', 'Net worth in millions', ],
        ['Dr.Dre', 810, 000, 000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],
        ['Philadelphia, PA', 1526000]
    ]);

    var options = {
        title: 'Top 10 Richest Rappers',
        chartArea: {
            width: '30%'
        },
        hAxis: {
            title: 'Net worth in millions',
            minValue: 0
        },
        vAxis: {
            title: 'Rappers'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}