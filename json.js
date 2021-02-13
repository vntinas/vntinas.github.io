$().ready(function(){
    $.getJSON( "/data.json", function( data ) {
    console.log(data);
    $("#my_J_generator").html(data["text"]);
  });
});
