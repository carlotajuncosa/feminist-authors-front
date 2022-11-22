import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  public getAllAuthors(): Observable<any>{
    return this.http.get("https://feminist-authors.vercel.app/authors");
  }

  public getAuthor(id: string): Observable<any>{
    return this.http.get("https://feminist-authors.vercel.app/authors/"+ id);
  }

  public postAuthor(newCharacter:any){
    return this.http.post("https://feminist-authors.vercel.app/authors/create", newCharacter);
  }

  public deleteAuthor(id: string){
    return this.http.delete("https://feminist-authors.vercel.app/authors/delete/" +id)
  }

  public putAuthor(id: string, updatedAuthor:any){
    return this.http.put("https://feminist-authors.vercel.app/authors/edit/" + id, updatedAuthor)
  }
}


  
