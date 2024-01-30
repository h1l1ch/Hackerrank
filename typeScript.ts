// primitive type annotation
var secondName: string = 'Robert';
var footLength: number = 26.50;
var isMarried: boolean = true;

// array type annotation
var languages: string[] = ['JavaScript', 'TypeScript', 'jQuery'];

// function annotation with parameter type annotation and return type annotation
var shoutHi: (name: string) => string;

// implementation of 'shoutHi' function
shoutHi = function (name: string) {
  return 'Hi ' + name;
};

// object type annotation
var human: { secondName: string; footLength: number; };

// Implementation of a person object
human = {
  secondName: 'Mat',
  footLength: 28
};



interface Movie {
    title: string;
    lengthMinutes: number;
}

// The array is typed using the Movie interface
var movies: Movie[] = [];

// Each item added to the array is checked for type compatibility
movies.push({
    title: 'American History X',
    lengthMinutes: 119,
    production: 'USA'    // example of structural typing
});

movies.push({
    title: 'Sherlock Holmes',
    lengthMinutes: 128,
});

movies.push({
    title: 'Scent of a Woman',
    lengthMinutes: 157  
});

function compareMovieLengths(x: Movie, y: Movie) {
    if (x.lengthMinutes > y.lengthMinutes) {
        return -1;
    }
    if (x.lengthMinutes < y.lengthMinutes) {
        return 1;
    }
    return 0;
}

console.log(movies)

// The array.sort method expects a comparer that accepts 2 Movies
var moviesOrderedLength = movies.sort(compareMovieLengths);

// Get the first element from the array, which is the longest
var longestMovie = moviesOrderedLength[0];

console.log(longestMovie.title); // Scent of a Woman