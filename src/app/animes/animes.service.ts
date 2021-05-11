import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Anime } from './anime';
import { AnimeDetail } from './anime-Detail';
@Injectable({
  providedIn: 'root'
})
export class AnimesService {

private apiUrl:string = environment.ApiUrl;
constructor(private http: HttpClient) { }
getAnimes(): Observable<AnimeDetail[]> {
  return this.http.get<AnimeDetail[]>(this.apiUrl);
}



}
