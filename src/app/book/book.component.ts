import{Component, OnInit} from '@angular/core';

import { BookService } from './book.service';
import { from } from 'rxjs';
import { Book } from './book';
import { Response } from 'selenium-webdriver/http';


@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
     styleUrls :['./book.component.css']
})
export class BookComponent implements OnInit{

    book = new Book();
    books :Book[];
    constructor (private _bookService :BookService){}

    ngOnInit():void{
        this.getbooks();
    }
   

    getbooks():void {
        this._bookService.getAllBooks().subscribe((bookData)=> {this.books = bookData , 
            console.log(bookData)},(error) => {console.log(error)});
            
    }

    addBook() : void{
        this._bookService.addBook(this.book)
        .subscribe((response) => {console.log(response)},(error)=> {
            console.log(error),this.reset(),this.getbooks() ;
        })
    }

    private reset(){
        this.book.id = null;
        this.book.title = null ;
        this.book.author = null ;
    }

    deleteBook(idbook :String){
        this._bookService.deleteBook(idbook).
        subscribe((response)=>{console.log(response);this.getbooks()})
    }

    

}