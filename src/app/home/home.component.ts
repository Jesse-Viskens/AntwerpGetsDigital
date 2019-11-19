import { Component, OnInit } from '@angular/core';
import { DogService } from '../Services/dog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dogService: DogService) { }
  amountOfDogs: number;
  ngOnInit() {
   this.amountOfDogs = this.dogService.getAmountOfDogs();
  }

}
