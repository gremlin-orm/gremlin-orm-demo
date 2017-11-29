$(document).ready(function() {
  function success(data) {
    $('#json-response').html(JSON.stringify(data[0]));


    
  }
  $('#submit-query').on('click', function() {
      $('#json-response').html('');
    var data = {
      query: $('#query').val()
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
