// First visualization
d3.json('http://localhost:5000/stories?startdate=2015-03-01&enddate=2015-03-20', function(data) {

    data = data['result']

    for(var i = 0; i < data.length; i++) {
        data[i] = MG.convert.date(data[i], 'date');
    }

    var vizParams = {}; 
    vizParams.width = 650;
    vizParams.height = 200;
    vizParams.right = 20;

    MG.data_graphic({
        title:"Daily Story Counts",
        description: "How many stories have we collected in a day?",
        legend: ['New York Times','Wall Street Journal','CNN', 'Fox', 'Huffington Post', 'Buzzfeed', 'NPR'],
        legend_target: '.legend-1',
        data: data,
        full_width: true,
        height: vizParams.height * 3 / 2,
        right: vizParams.right,
        left: 80,
        x_extended_ticks: true,
        target: '#viz-1',
        x_accessor: 'date',
        y_accessor: 'vol',
        y_extended_ticks: true,
        y_label: 'Stories',
        mouseover: function(d, i) {
            d3.select('#viz-1 svg .mg-active-datapoint')
               .text(d3.time.format("%a %b %d")(d.date) + ': ' + d.vol + ' Stories' + ' [' + d.org + ']');
        },
    });
});

