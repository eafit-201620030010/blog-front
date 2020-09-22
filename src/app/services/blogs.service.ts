import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get( this.API_ENDPOINT + '/blogs');
  }
  
  save(blog: Blog) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/blogs', blog, {headers: headers});       
  }
  
  delete(id) {
    return this.httpClient.delete( this.API_ENDPOINT + '/blogs/' + id);
  }
}
