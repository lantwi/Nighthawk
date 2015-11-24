'use strict';

  $(function(){

    var renderTemplate_showBars  = Handlebars.compile($("template#bars-template").html());
    console.log($("template#bars-template").html());
    // function renderData(template, data){
    //   var html = template(data);
    //
    //   this.html('').show().append(html);
    // }


    $('#les').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/lower_east_side', renderBars, 'json')

        });


    var renderBars = function(data){
      console.log(data)

      var $container = $('#results-container');
      var html = renderTemplate_showBars(data);
      console.log(html)
      $container.html('').append(html);

    };
  });
