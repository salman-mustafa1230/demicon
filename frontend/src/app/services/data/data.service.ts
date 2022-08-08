import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, Subject, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import {query} from '@angular/animations';
import {USER} from "../../interface/user"
import { BoundDirectivePropertyAst } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  hotels: any[] = [];
  markerSelectedEvent: Subject<string> = new Subject<string>();
  // default location, intersection of equator and prime meridian
  private _currentLocation: [latitude: number, longitude: number] = [0, 0];

  get currentLocation(): [latitude: number, longitude: number] {
    return this._currentLocation;
  }
  set currentLocation(position: [latitude: number, longitude: number]) {
    this._currentLocation = position;
  }

  constructor(
    private _httpClient: HttpClient
  ) { }
  get(body: USER, pageNo: Number) {
    body.pageNo = pageNo
    return this._httpClient.post(`${environment.baseUrl}users/by-country`, body);
  }
  
}
