import {Http,Response,RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {Book} from './book';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs'

@Injectable()
export class BookService{

    constructor(private _httpService: Http){}

    getAllBooks():Observable<Book[]>{
 return this._httpService.get("http://localhost:8080/book/api/book")
 .pipe(map((response:Response) => response.json()));
    }

    private handleError(error : Error){
        return Observable.throw (error);
        
    }

    addBook(book :Book){

        let body = JSON.stringify(book);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this._httpService.post("http://localhost:8080/book/api/book",body,options);
    }

    deleteBook(idBook : String){
        return this._httpService.delete("http://localhost:8080/book/api/book"+idBook);
    }

}