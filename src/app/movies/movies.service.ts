import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class MovieService{
    constructor(private http: HttpClient){}
    page: number = 1;
    moviesUrl: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=6fc4a0dcbbd1fd4d9ace1194d1f6c028&language=en-US&page=" + this.page;
    getMovies(): Observable<IMovie>{
        return this.http.get<IMovie>(this.moviesUrl)
    }
    nextPage(){
        this.page ++;
    }
    prevPage(){
        this.page --;
    }
}