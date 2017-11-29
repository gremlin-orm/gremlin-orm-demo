$(document).ready(function() {
  var codeMirror = CodeMirror.fromTextArea(document.getElementById('query'),
                                           {
                                             lineNumbers: true,
                                             mode: 'javascript',
                                             autoCloseBrackets: true,
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

  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
});

function dropdownBtn() {
  document.getElementById("dropdownView").classList.toggle("show");
}