import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Anime } from './anime';
@Injectable({
  providedIn: 'root'
})
export class AnimesService {

private apiUrl:string = environment.ApiUrl;
constructor(private http: HttpClient) { }
getAnimes(): Observable<Anime[]> {
  return this.http.get<Anime[]>(this.apiUrl);
}



}
