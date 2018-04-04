$(document).ready(function() {
  $("ul.tabs").tabs();
});

/*window.onload = function() { 
	$("#chartContainer").CanvasJSChart({ 
		title: { 
			text: "Presupuesto para campañas electorales 2018 asignado a Partidos y candidatos independientes",
			fontSize: 24
		}, 
		axisY: { 
			title: "Products in %" 
		}, 
		legend :{ 
			verticalAlign: "center", 
			horizontalAlign: "right" 
		}, 
		data: [ 
		{ 
			type: "pie", 
			showInLegend: true, 
			toolTipContent: "{label} <br/> {y} %", 
			indexLabel: "{y} %", 
			dataPoints: [ 
				{ label: "Samsung",  y: 30.3, legendText: "Samsung"}, 
				{ label: "Apple",    y: 19.1, legendText: "Apple"  }, 
				{ label: "Huawei",   y: 4.0,  legendText: "Huawei" }, 
				{ label: "LG",       y: 3.8,  legendText: "LG Electronics"}, 
				{ label: "Lenovo",   y: 3.2,  legendText: "Lenovo" }, 
				{ label: "Others",   y: 39.6, legendText: "Others" } 
			] 
		} 
		] 
	}); 
} */

google.charts.load('current', {'packages':['treemap']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
          ['Categorias de Gastos',    null,                 0,                               0],

          ['Comunicación',   'Categorias de Gastos',             0,                               0],
          ['Construcción del programa',    'Categorias de Gastos',             0,                               0],
          ['Giras, eventos y despliegue territorial',      'Categorias de Gastos',             0,                               0],
          ['Legal y fiscal', 'Categorias de Gastos',             0,                               0],
          ['Material para brigadas y propaganda',    'Categorias de Gastos',             0,                               0],
          ['Oficina',    'Categorias de Gastos',             0,                               0],
          ['Otros',    'Categorias de Gastos',             0,                               0],

          ['Diseño gráfico',    'Comunicación',            11,                              10],
          ['Asistencia en comunicación',       'Comunicación',            11,                              31],
          ['Gestión de medios',    'Comunicación',            24,                              12],
          ['Honorarios de equipo de comunicación',    'Comunicación',            16,                              -23],
          ['Página web',    'Comunicación',            11,                              10],
          ['Manejo y distribución digital',    'Comunicación',            11,                              10],
          ['Producción audiovisual',    'Comunicación',            11,                              10],

          ['1',    'Legal y fiscal',            11,                              10],
          ['2',       'Legal y fiscal',            11,                              31],
          ['3',    'Legal y fiscal',            24,                              12],
          ['4',    'Legal y fiscal',            16,                              -23],

          ['5',    'Oficina',            11,                              10],
          ['6',       'Oficina',            11,                              31],
          ['7',    'Oficina',            24,                              12],
          ['8',    'Oficina',            16,                              -23],

          ['9',    'Otros',            11,                              10],
          ['10',       'Otros',            11,                              31],
          ['11',    'Otros',            24,                              12],
          ['12',    'Otros',            16,                              -23],

          ['France',    'Construcción del programa',             42,                              -11],
          ['Germany',   'Construcción del programa',             31,                              -2],
          ['Sweden',    'Construcción del programa',             22,                              -13],
          ['Italy',     'Construcción del programa',             17,                              4],
          ['UK',        'Construcción del programa',             21,                              -5],
          
          ['China',     'Giras, eventos y despliegue territorial',               36,                              4],
          ['Japan',     'Giras, eventos y despliegue territorial',               20,                              -12],
          ['India',     'Giras, eventos y despliegue territorial',               40,                              63],
          ['Laos',      'Giras, eventos y despliegue territorial',               4,                               34],
          ['Mongolia',  'Giras, eventos y despliegue territorial',               1,                               -5],
          ['Israel',    'Giras, eventos y despliegue territorial',               12,                              24],
          ['Iran',      'Giras, eventos y despliegue territorial',               18,                              13],
          ['Pakistan',  'Giras, eventos y despliegue territorial',               11,                              -52],

          ['Egypt',     'Material para brigadas y propaganda',             21,                              0],
          ['S. Africa', 'Material para brigadas y propaganda',             30,                              43],
          ['Sudan',     'Material para brigadas y propaganda',             12,                              2],
          ['Congo',     'Material para brigadas y propaganda',             10,                              12],
          ['Zaire',     'Material para brigadas y propaganda',             8,                               10]
        ]);

        tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

        tree.draw(data, {
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          showScale: true
        });

      }
