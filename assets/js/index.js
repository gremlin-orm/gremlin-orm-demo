$(document).ready(function() {
  var codeMirror = CodeMirror.fromTextArea(document.getElementById('query'),
                                           {
                                             lineNumbers: true,
                                             mode: 'javascript',
                                             autoCloseBrackets: true,
                                             lineWrapping: true,
                                             theme: 'duotone-light'
                                           });

  function success(data) {
    $('#json-response').html(JSON.stringify(data[0], null, 2));
    initialiseGraph(data);
  }

  function error(err) {
    if (err.status === 0) {
      $('#json-response').html('');
      return;
    }
    let errorStr = `<h4> Error ${err.status}</h4><br>`;
    const errors = err.responseJSON;
    if (errors) {
      Object.keys(errors).forEach(key => {
        errorStr += `${errors[key]} <br>`;
      });
    } else {
      errorStr += err.responseText;
    }
    $('#json-response').html(errorStr);
  }

  $('#submit-query').on('click', function() {
    $('#json-response').html('');
    var data = {
      query: codeMirror.getValue()
    }
    $.ajax({
      type: "POST",
      url: '/query/run',
      data: data,
      success: success,
      error: error,
      dataType: 'json'
    });
  });
});
