
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
  
  var optionBreadthFirst = {
    name: 'breadthfirst',
    fit: true,
    padding: 50,
    directed: false,
    spacingFactor: 1.75,
    avoidOverlap: true
  }

  var optionCircle = {
    name: 'circle',
    fit: true,
    padding: 50,
    radius: 300,
    avoidOverlap: true,
    spacingFactor: 1
  }

  var optionCose = {
    name: 'cose',
    fit: true,
    padding: 50,
    nodeOverlap: 20,
    componentSpacing: 20,
    refresh: 20,
    idealEdgeLength: 100,
    edgeElasticity: 100,
    nodeRepulsion: 400000,
    nestingFactor: 5,
    gravity: 80,
    numIter: 1000,
    initialTemp: 200,
    coolingFactor: 0.95,
    minTemp: 1.0,
    randomize: false
  }

  var optionRandom = {
    name: 'random',
    fit: true,
    padding: 50
  }

  var layout = cy.layout(optionCose);

  layout.run();
}
