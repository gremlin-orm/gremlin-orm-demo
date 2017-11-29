
const initialiseGraph = (data) => {
  
  const resultData = data[0];
  console.log("resultData", resultData);
  const vertexData = data[1][0];
  const edgeData = data[2][1];
  
  const cy = cytoscape({
    container: document.getElementById('container'), // container to render in
    style: [
      { 
        selector: 'node',
        style: { 'content': 'data(name)' }
      },
      { 
        selector: 'edge',
        style: { 'content': 'data(label)' }
      }
    ]
  }); 
    console.log("modelStyles", modelStyles);

  vertexData.forEach((vertex) => {
    cy.add({ data: vertex, style: modelStyles[vertex.label] });
  }); 

  edgeData.forEach((edge) => {
    const edgeElem = Object.assign({}, edge);
    edgeElem.source = edge.outV;
    edgeElem.target = edge.inV;   
    cy.add( {data: edgeElem, style: modelStyles[edgeElem.label] } );
  });

  resultData.forEach((resultItem) => {
    const elem = cy.getElementById(resultItem.id);
    if (resultItem.inV && resultItem.outV) {
      elem.style(modelStyles.resultEdge);  
    } else {
      elem.style(modelStyles.resultNode);
    }
  });

  var layout = cy.layout({
     name: /*'grid'*/ 'circle'
  });

  layout.run();
}
