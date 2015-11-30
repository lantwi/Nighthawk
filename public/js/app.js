'use strict';

  $(function(){

    var renderTemplate_showBars  = Handlebars.compile($("template#bars-template").html());
    console.log($("template#bars-template").html());


    $('#les').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/lower_east_side', renderBars, 'json')
    });


    $('#soho').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/soho', renderBars, 'json')
    });

    $('#china-town').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/chinatown', renderBars, 'json')
    });

    $('#greenwich').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/greenwich_village', renderBars, 'json')

    });

    $('#east-village').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/east_village', renderBars, 'json')
    });

    $('#tribeca').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/tribeca', renderBars, 'json')
    });

    $('#gramercy').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/gramercy_park', renderBars, 'json')
    });

    $('#chelsea').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/chelsea', renderBars, 'json')
    });

    $('#midtown-west').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/midtown_west', renderBars, 'json')
    });

    $('#midtown-east').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/midtown_east', renderBars, 'json')
    });

    $('#uws').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/upper_west_side', renderBars, 'json')
    });

    $('#ues').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/upper_east_side', renderBars, 'json')
    });

    $('#harlem').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/harlem', renderBars, 'json')
    });

    $('#wash-heights').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/washington_heights', renderBars, 'json')
    });

    var renderBars = function (data) {
      var $container = $('#results-container');
      $container.empty();
      $("#bar").show()
      var html = renderTemplate_showBars(data);
      $container.html('').append(html);
    };

  });
