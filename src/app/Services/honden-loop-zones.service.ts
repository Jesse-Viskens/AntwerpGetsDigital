import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoopzone, RootObject } from '../Interfaces/Iloopzone';

@Injectable({
  providedIn: 'root'
})
export class HondenLoopZonesService {
  basicURL :string = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/622/query?where=1%3D1&outFields=*&outSR=4326&f=json";

  constructor(private http:HttpClient) { }

  getAllLoopzones(): Observable<RootObject>{
    return this.http.get<RootObject>(this.basicURL);
  }
}
