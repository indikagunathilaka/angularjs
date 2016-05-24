movieApp.factory('movieService', function() {
    var movies = {};
    movies.list = [];
    
    movies.add = function (movieData) {
        movieData.id = movies.list.length;
        movieData.characterList = [];
        movies.list.push(movieData);
        return movieData;
    }
    
    movies.addCharacter = function(movieData, characterData) {
        characterData.id = movieData.characterList.length;
        movieData.characterList.push(characterData);
        movies.list[movieData.id] = movieData;
        return movieData;
    }
    
    movies.checkUniqueCharacterName = function(movieData, characterName) {
        for(var i=0; i<movieData.characterList.length; i++) {
            var character = movieData.characterList[i];
            if(character.name == characterName) {
                return false;
            }
        }
        return true;
    }
    
    movies.checkUniqueTitle = function(movieTitle) {
        for(var i=0; i<movies.list; i++) {
            var movie = movies.list[i];
            if(movie.title == movieTitle) {
                return false;
            }
        }
        return true;
    }
    
    return movies;
});