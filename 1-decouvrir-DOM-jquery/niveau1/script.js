var datasplitted;

filmList = $.get('./playlist.txt', function(data){
    datasplitted = (data.split('\n')) ;
    console.log(datasplitted);
});

$(document).ready(function(){
    $("#ui").children("button").click(function(){
        for (i=0; i<datasplitted.length; i++){
            $('#list').children('ul').append('<li>' + datasplitted [i]+ '</li>');
        };
    });
});


// Autre méthode

// $(document).ready(function() {
//     $("#ui").children('button').click(function() {
//         $.get("playlist.txt", function(data) {
//             var datasplitted = (data.split('\n'));
//             console.log(datasplitted);
//             $.each(datasplitted, function(index, value) 
//             { 
//                 $('ul').append('<li>' + value + '</li>'); 
//             });
//         });
//     });
// });
