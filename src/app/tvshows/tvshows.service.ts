import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShow } from './IShow';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class TvServices{
    constructor(private http: HttpClient){}
    currentPage: number = 1;
    showsUrl: string = "https://api.themoviedb.org/3/tv/popular?api_key=6fc4a0dcbbd1fd4d9ace1194d1f6c028&language=en-US&page=";
    getShows(): Observable<IShow>{
        return this.http.get<IShow>(this.showsUrl+this.currentPage)
    }
    nextPageHandler(){
        this.currentPage = this.currentPage + 1;
        this.getShows()
        console.log("Next Page called. Page: "+this.currentPage)
    }
    prevPageHandler(){
        if(this.currentPage > 1)
        {
            this.currentPage = this.currentPage - 1
            this.getShows()
        }
    }
}