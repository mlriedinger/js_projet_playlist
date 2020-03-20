var listOfMovie = [];

$(document).ready(function(){
  $('#refresh').click(function(){                 // Au clic sur le bouton "refresh"
  $('#list > .container > .row').html('');        // Vide la liste
  listOfMovie = [];                               // Vide le tableau avec la liste de films
  
  $.get('./playlist.txt', function(data){         // Récupère la liste dans le fichier txt
      
    splitFile(data).forEach(element => {addMovie(createMovie(element[0], element[1], element[2]));    // Chaque élément retourné par splitFile vient alimenter l'objet movie créé et le tout est poussé dans le tableau listOfMovie 
    });
    listOfMovie.forEach(element => {$('#list > .container > .row').append(htmlDivElement(element));              // Affiche chaque élément du tableau listOfMovie dans une <div> avec son index, nom et durée
    createPlayCallback(element);
  })
  });
});
});

function htmlDivElement(movie){
  return '<div class="divFilm col-3"><div class="divIndex">'+ movie.index + '</div><div class="divTitle">' + movie.name + '</div><div class="divLength">' + movie.length + '</div><div class="playButton"><button id="playButton'+ movie.index +'">Play</button></div></div>';
}

function createPlayCallback(movie){
  $('#playButton'+ movie.index).on('click', function(){
    console.log('Lecture du film : ' + movie.name + ', durée : ' + movie.length);
  });
}
 
function createMovie(i, n, l){
  var movie = {                                       // Création objet "film"
  index : i,
  name : n,
  length : l
};

return movie;
}

function splitFile(data){ 
  data = data.split('\n');                            // Split le string en ligne

  $.each(data, function(index, value){                // Pour chaque ligne
    data[index] = value.split(',');                   // Split la ligne en 3
  });

  return data;
}

function addMovie(m){
  listOfMovie.push(m);
}
    






