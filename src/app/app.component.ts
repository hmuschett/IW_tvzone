import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-fav';
  searchText = '';
  series: any[] =[];
  constructor( private http: HttpClient) {
   
  }
  buscar(){
    console.log("El formulario fue enviado y la mascota es: ", this.searchText)
    this.http.get(`//api.tvmaze.com/search/shows?q=${this.searchText}`).subscribe((data:any) => {
      this.series = data;
      console.log(data);
    });;
   
  }

}
