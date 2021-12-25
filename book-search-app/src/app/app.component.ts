import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-search-app';
	myimage: string = "assets"
}
// export class AppComponent implements OnInit {
// 	private books: any = [];
// 	private baseUrl = 'https://www.googleapis.com/books/v1/volumes';
//  constructor(private http: HttpClient){}
//  ngOnInit() {
// 	this.http.get(this.baseUrl + '?q=books').subscribe((books: any) => {
// 	  this.books = books;
// 	  console.log(books);
// 	})
//  }
//  }