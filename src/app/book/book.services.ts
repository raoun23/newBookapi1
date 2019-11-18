import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions, Headers } from '@angular/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class BookService{

    constructor(private _httpService :Http){}

   
    getAllBooks():Observable<Book[]>{
return this._httpService.get("http://localhost:8080/book/api/book").pipe(
    map((response:Response)=>(response.json())));

    }

    addBook(book : Book){

        let body = JSON.stringify(book);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        this._httpService.post("http://localhost:8080/book/api/book",body,options);
    }

    deleteBook(idBook:string){

        return this._httpService.delete("http://localhost:8080/book/api/book"+idBook);
    }

    getOneBook(idBook:string):Observable<Book>{
        return this._httpService.get("http://localhost:8080/book/api/book"+idBook).pipe
        (map((response:Response)=>(response.json())));
    }
}