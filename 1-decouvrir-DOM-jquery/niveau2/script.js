var listOfMovie = [];

    $(document).ready(function(){

        $('button').click(function(){
            $('#list ul').html('');                                 // Vide la liste
            listOfMovie = [];                                       // Vide le tableau avec la liste de films
            $.get('./playlist.txt', function(data){                 // Récupère la liste dans le fichier txt
                $.each(splitFile(data), function(index, value){     // Split le string
                    $('#list ul').append(htmlDivElement(value));    // Ajoute chaque ligne dans une <div>
                })
            })
        })
    })

function htmlDivElement(name){
    return '<div class="divFilm">'+name+'</div>';
}
 
function splitFile(data){

    return data.split('\n');

}

