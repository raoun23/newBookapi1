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
export class BookComponentTest {

    constructor(private bookService:BookService){}

    myBooks:Book[];
    book = new Book();
    getBooks(){

        this.bookService.getAllBooks().subscribe((response)=>{this.myBooks=response;
            console.log("calling get All Books")},((error)=>{console.log(error);}));
        }


        addBook(){

            this.bookService.addBook(this.book).subscribe(response=>{
                console.log(response);},(error=>{(console.log()),this.getBooks();}));
                
            }
           deleteBook(idBook:string) {
               this.bookService.deleteBook(idBook).subscribe
               (response=>{console.log(response);},(error)=>{
                   console.log(error);this.getBooks();});
                   
               }; 

        

    
}