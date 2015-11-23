'use strict';

  $(function(){

    var renderTemplate_showBars  = Handlebars.compile( $("template#bars-template").html()  );

    function renderData(template, data){
      var html = template(data);

      this.html('').show().append(html);
    }

    var renderMany = function(data){
       var f = renderData.bind( $('#bars-container') , renderTemplate_showBars );
        return f({bar:data});
    };


    $('#les').click(e=>{
      e.preventDefault();
      console.log('hello is our click event working?');
      $.get('/lower_east_side',{name:$('#les').val()} , renderMany);
      $('#les').val('')

        });

      })
