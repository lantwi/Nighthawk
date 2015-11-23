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


    $('#search-button').click(e=>{
      e.preventDefault();

      $.get('/bars/searchByName',{name:$('#search-field').val()} , renderOne);
      $('#search-name-field').val('')

        });

      })
