Highcharts.chart('container', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Monitoreo de temperatura y humedad',
    align: 'left'
  },
  subtitle: {
    text: 'Source: ' +'<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
      'target="_blank">YR</a>'
  },
  xAxis: [{
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    crosshair: true
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: '{value}°C',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    title: {
      text: 'Temperature',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Máxima',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    labels: {
      format: '{value} °C',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    opposite: true
  }],
  tooltip: {
    shared: true
  },
  legend: {
    align: 'left',
    x: 80,
    verticalAlign: 'top',
    y: 80,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      'rgba(255,255,255,0.25)'
  },
  series: [{
    name: 'Máxima',
    type: 'column',
    yAxis: 1,
    data: [32, 34, 34, 35, 38],
    tooltip: {
      valueSuffix: ' °C'
    }

  }, {
    name: 'Temperature',
    type: 'spline',
    data: [26, 30, 32, 32, 32],
    tooltip: {
      valueSuffix: '°C'
    }
  }]
});