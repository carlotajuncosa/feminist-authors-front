import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WavesService {

  constructor(private http: HttpClient) { }

  public getAllWaves(): Observable<any>{
    return this.http.get("https://feminist-authors.vercel.app/waves");
  }
  public getWaves(id: string): Observable<any>{
    return this.http.get("https://feminist-authors.vercel.app/waves/"+ id);
  }

  public postWaves(newWave:any){
    return this.http.post("https://feminist-authors.vercel.app/waves/create", newWave);
  }

  public deleteWave(id: string){
    return this.http.delete("https://feminist-authors.vercel.app/waves/delete/" +id)
  }

  public putWave(id: string, updatedWave:any){
    return this.http.put("https://feminist-authors.vercel.app/waves/edit/" + id, updatedWave)
  }
}
