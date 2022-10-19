import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor() { }

  fetchData=[{"id":1,"bookTitle":"Ponniyin Selvan","description":"History of Cholas","author":"Kalki"},{"id":2,"bookTitle":"Phoenix","description":"Horror","author":"Kaur"},{"id":3,"bookTitle":"AbilitybDaffodis","description":"Teaching","author":"Ankita"},{"id":4,"bookTitle":"Scarlet","description":"Entertainment","author":"JHA"},{"id":5,"bookTitle":"Human Values","description":"Entertainment","author":"Jugal"}]

  ngOnInit(): void {
  }

}
