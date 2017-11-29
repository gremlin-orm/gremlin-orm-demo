$(document).ready(function() {
  var codeMirror = CodeMirror.fromTextArea(document.getElementById('query'),
                                           {
                                             lineNumbers: true,
                                             mode: 'javascript',
                                             autoCloseBrackets: true,
                                             theme: 'duotone-light'
                                           });

  function success(data) {
    $('#json-response').html(JSON.stringify(data[0]));



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
      dataType: 'json'
    });
  });
});
