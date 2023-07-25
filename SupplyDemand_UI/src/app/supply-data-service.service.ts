import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SupplyDataServiceService {

  constructor(
    private httpclient: HttpClient
  ) { }

  baseURL: string= "https://localhost:5001/";
  getAlldata()

  {

    return this.httpclient.get<any[]>(this.baseURL + 'api/SupplyData');

  }
}
