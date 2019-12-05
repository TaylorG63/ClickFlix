import { Component } from "@angular/core";
import { IMovie } from './IMovie';
import { MovieService } from './movies.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movies.component.html'
})

export class MoviesComponent{
    movies:IMovie;
    constructor(private movieService: MovieService)
    {
        this.movieService.getMovies().subscribe(Observed => {
            
            this.movies = Observed
            this.movies = this.movies
            console.log(this.movies)
        })
    }
}