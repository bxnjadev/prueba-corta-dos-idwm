import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Character } from '../interfaces/character';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private baseUrl: string = "https://rickandmortyapi.com/api/character";
  

  async getAllFromPage(page : number
  ) : Promise<Character> {
    try {
      let url = this.baseUrl + "?page=" + page;
      console.log("Making HTTP = " + url);
      const responses = await firstValueFrom(this.http.get<Character>(url));
      return Promise.resolve(responses);
    } catch(error) {
      return Promise.reject(error);
    }

  }

  async getAllFromName(name : string
  ) : Promise<Character> {
    try {
      let url = this.baseUrl + "?name=" + name;
      const responses = await firstValueFrom(this.http.get<Character>(url));
      return Promise.resolve(responses);
    } catch(error) {
      return Promise.reject(error);
    }

  }

}
