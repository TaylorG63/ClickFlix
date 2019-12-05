import { Component } from "@angular/core";
import { IMovie } from './IMovie';
import { MovieService } from './movies.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movies.component.html',
    styleUrls:['./movies.component.css']
})

export class MoviesComponent{
    movies:IMovie;
    constructor(private movieService: MovieService)
    {
        this.callMovie()
    }
    callMovie(){
        this.movieService.getMovies().subscribe(Observed => {            
            this.movies = Observed
            this.movies = this.movies
        })
    }
    nextPage(){
        this.movieService.nextPageHandler()
        this.callMovie()
    }
    prevPage(){
        this.movieService.prevPageHandler()
        this.callMovie()
    }
}