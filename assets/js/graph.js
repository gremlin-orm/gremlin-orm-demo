const styles = {
  person: {
    'width': '30px', 
    'height': '30px', 
    'shape': 'star', 
    'background-color': '#70CDE7'
  }
};


const initialiseGraph = (data) => {
  
  const resultData = data[0];
  const vertexData = data[1][0];
  const edgeData = data[2][1];
  console.log("vertexData", vertexData);
  console.log("edgeData", edgeData);
  console.log("resultData", resultData);
  
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

  vertexData.forEach((vertex) => {
    const nodeElem = Object.assign({}, vertex);
    cy.add({ data: nodeElem, style: styles[nodeElem.label] });
  }); 

  edgeData.forEach((edge) => {
    const edgeElem = Object.assign({}, edge);
    edgeElem.source = edge.outV;
    edgeElem.target = edge.inV;   
    cy.add( {data: edgeElem } );
  });

  var layout = cy.layout({
     name: /*'grid'*/ 'breadthfirst'
  });

  layout.run();
}
