import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  description=""
  author=""

  readValues=()=>{
let data = {
  "name":this.name,
  "description":this.description,
  "author":this.author
  
}
 console.log(data);
 this.myapi.addBook(data).subscribe(
  (data)=>{
    alert("successfully added")
  }
 )
 this.name=""
  this.description=""
  this.author=""

  }

  ngOnInit(): void {
  }

}
