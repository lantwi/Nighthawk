
  $(function(){

setInterval(function() {
  $.ajax({
    method: "GET",
    url: 'http://localhost:3000/comments'
  }).done(function (data) {
    var container = $('.comment-container');
    container.empty();
    data.forEach(function(comment) {
      var commentText = comment.text;
      var commentCreated = comment.createdAt;
      var commentName = comment.name;
      var commentBar = comment.bar;
      container.append('<p>' + commentName.toUpperCase() + "- " + "Bar:" +" " + commentBar +  ": " + " " + commentText +" "+ '</p>')
    });
  });
}, 2000);



$('#comment-submit').click(function (event) {
  var text = $('#new-comment').val();
  var bar = $('#bar-comment').val();
  var name = $('#name').val();
  console.log(text)
  var date = new Date();
  $.ajax({
    method: "POST",
    url: 'http://localhost:3000/comments',
    data: {text: text, createdAt: date, name: name, bar: bar}
  }).done(function () {
    console.log("comment save")
  })
})



  });
