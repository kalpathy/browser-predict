

// this comes from http://bl.ocks.org/jfreels/6734025
// it was modified to accept multiple arrays, but better would be to
// zip input arrays together and then displayed with 
// the code as originally written.
function buildTable(labels, logits, norms) {
		var table = d3.select('body').append('table')
		var thead = table.append('thead')
		var	tbody = table.append('tbody');

    columns = ['pathology', 'prediction'];
		// append the header row
		thead.append('tr')
		  .selectAll('th')
		  .data(columns).enter()
		  .append('th')
		    .text(function (column) { return column; });

		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(labels)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		  .data(function (row, irow) {
		    return columns.map(function (column) {
		      return {column: column, value: column === 'pathology' ? labels[irow] : logits[irow]};
		    });
		  })
		  .enter()
		  .append('td')
		    .text(function (d) { return d.value; });

	  return table;
	}
