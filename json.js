$().ready(function(){
    $.getJSON( "/data.json", function( myObj ) {
    var x, y;
    console.log(myObj);
    x = '';
    for (i in myObj.journals) {
        x += '<div class="row pubs-row">';
        x += '<div class="col-md-6 pubs-left">'
        x += '<h3> <a href="' + myObj.journals[i].url + '" target="_blank">' + myObj.journals[i].title + '</a></h3>';
        x += '<h4>' + myObj.journals[i].authors + "<br>";
        x += myObj.journals[i].details + "<br>";
        x += 'Cite by: <a href="' + myObj.journals[i].cite_by + '" target="_blank"><img src="Google-Scholar-logo.png" width="20px"/></a></h4></div>';
        x += '<div class="col-sm-4 col-sm-offset-1 pubs-right">';
        x += '<a href="https://www.scimagojr.com/journalsearch.php?q=' + myObj.journals[i].sjr_id + '&amp;tip=sid&amp;exact=no" title="SCImago Journal &amp; Country Rank" target="_blank">';
        x += '<img border="0" src="https://www.scimagojr.com/journal_img.php?id=' + myObj.journals[i].sjr_id + '" alt="SCImago Journal &amp; Country Rank"/></a>';
        x += '</div>';
        x += '<div class="col-md-12 pubs-left">';
        x += '<button type="button" class="btn" data-toggle="collapse" data-target="#j' + myObj.journals[i].j_id + '">Abstract</button> ';
        x += '<p  id="j' + myObj.journals[i].j_id + '" class="collapse col-md-12">' + myObj.journals[i].abstract + '</p>';
        x += '</div>'
        x += '</div>';
        }
    document.getElementById("my_J_generator").innerHTML = x;

    y = '';
    for (i in myObj.conferences) {
        y += '<div class="row pubs-row">';
        y += '<div class="col-md-6 pubs-left">'
        y += '<h3>' + myObj.conferences[i].title + "</h3>";
        y += '<h4>' + myObj.conferences[i].authors + "<br>";
        y += myObj.conferences[i].details + "<br>";
        y += 'DOI: <a href="https://doi.org/' + myObj.conferences[i].doi + '" target="_blank">' + myObj.conferences[i].doi + '</a></h4></div>';
        y += '<div class="col-md-12 pubs-left">';
        y += '<button type="button" class="btn" data-toggle="collapse" data-target="#c' + myObj.conferences[i].c_id + '">Abstract</button> ';
        y += '<p  id="c' + myObj.conferences[i].c_id + '" class="collapse col-md-12">' + myObj.conferences[i].abstract + '</p>';
        y += '</div>'
        y += '</div>';
        }
    document.getElementById("my_C_generator").innerHTML = y;
  });
});
