import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api/services/api.service';
import { Character, ResultPagination } from './api/interfaces/character';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'prueba-corta-dos-v2';

  characters: ResultPagination[] = [];
  page : number = 1;
  pages : number = -1;

  constructor(private apiService : ApiService ) {
  }

  async ngOnInit(){
    initFlowbite();

    if(this.characters.length != 0){
      return;
    }

    this.get();
  }

  async get(){
    let ch = await this.apiService.getAllFromPage(this.page);

    if(this.pages == -1){
      this.pages = ch.info.pages; 
    }

    this.characters = [];
    ch.results.forEach(result => {
        this.characters.push(result);
    });
  }

  async getByName(name : string){
    let ch = await this.apiService.getAllFromName(name);
    this.characters = [];
    ch.results.forEach(result => {
      this.characters.push(result);
    });
  }

  nextPage() {
    console.log("Pages = " + this.pages);
    if((this.page + 1) > this.pages) {
      console.log("PAGINA MÁXIMA");
      return;
    }


    this.page++;
    this.get();
  }

  previousPage() {
    if(this.page == 1){
      console.log("MINIMA PAGINA");
      return;
    }

    console.log("SIGUIENTE");
    this.page--;
    this.get();
  }

  onSearch(event : Event) {
    const input = event.target as HTMLInputElement; 
    this.getByName(input.value);
  }

}
