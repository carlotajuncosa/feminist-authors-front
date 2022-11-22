import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackersService {

  constructor(private http: HttpClient) { }

  public getAllHackers(): Observable<any>{
    return this.http.get("https://feminist-authors.vercel.app/hackers");
  }

  public getHacker(id: string): Observable<any>{
    return this.http.get("https://feminist-authors.vercel.app/hackers/"+ id);
  }

  public postHacker(newHacker:any){
    return this.http.post("https://feminist-authors.vercel.app/hackers/create", newHacker);
  }

  public deleteHacker(id: string){
    return this.http.delete("https://feminist-authors.vercel.app/hackers/delete/" +id)
  }

  public putHacker(id: string, updatedHacker:any){
    return this.http.put("https://feminist-authors.vercel.app/hackers/edit/" + id, updatedHacker)
  }
}


  