import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IList } from 'src/app/interfaces/ilist';
import { Observable } from 'rxjs';
import { IListDetail } from 'src/app/interfaces/list-detail';

@Injectable({
  providedIn: 'root'
})
export class ListItensService {

  constructor(private _http:HttpClient) { }

  getItens(page: number): Observable<IList> {
    return this._http.get<IList>(`${environment.api}?page=${page}`)
  }

  getItem(id: number): Observable<IListDetail> {
    return this._http.get<IListDetail>(`${environment.api}/${id}`)
  }

}
