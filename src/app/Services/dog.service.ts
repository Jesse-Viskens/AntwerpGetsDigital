import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor() { }
  amountOfDogs: number;

  getAmountOfDogs():number{
    return this.amountOfDogs = _.random(5,799)
  }
}
