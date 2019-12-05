import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class MovieService{
    constructor(private http: HttpClient){}
    currentPage: number = 1;
    moviesUrl: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=6fc4a0dcbbd1fd4d9ace1194d1f6c028&language=en-US&page=";
    getMovies(): Observable<IMovie>{
        return this.http.get<IMovie>(this.moviesUrl+this.currentPage)
    }
    nextPageHandler(){
        this.currentPage = this.currentPage + 1;
        this.getMovies()
        console.log("Next Page called. Page: "+this.currentPage)
    }
    prevPageHandler(){
        if(this.currentPage > 1)
        {
            this.currentPage = this.currentPage - 1
            this.getMovies
        }
    }
}