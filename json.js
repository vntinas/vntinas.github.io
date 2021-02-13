$().ready(function(){
    $.getJSON( "/data.json", function( data ) {
    console.log(data);
    
    for (x in data) {
        $("#text").html(x["firstName"]);
    }
  });
});
