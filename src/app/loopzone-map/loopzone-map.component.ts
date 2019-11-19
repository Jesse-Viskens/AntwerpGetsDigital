import { Component, OnInit } from '@angular/core';
import { HondenLoopZonesService } from '../Services/honden-loop-zones.service';
import { throwToolbarMixedModesError } from '@angular/material';
import { GLocation, Zone, Feature } from '../Interfaces/Iloopzone';

@Component({
  selector: 'app-loopzone-map',
  templateUrl: './loopzone-map.component.html',
  styleUrls: ['./loopzone-map.component.css']
})
export class LoopzoneMapComponent implements OnInit {
  zone : Zone = {} as Zone;
  rings :Zone[] = [] as Zone[];
  geoLocation: GLocation = {} as GLocation;
  filter: string;
  constructor(private loopzoneService: HondenLoopZonesService) { }

  ngOnInit() {
    this.loopzoneService.getAllLoopzones().subscribe({
      next: (res) => {
        res.features.forEach(e=>{
          this.zone.marks =[];
          e.geometry.rings[0].forEach(i =>{
            this.geoLocation.lat = i[1];
            this.geoLocation.lng = i[0];
            this.zone.marks.push(this.geoLocation);
            this.geoLocation = {} as GLocation;
          })
          if(!this.rings.find(e => e ==this.zone)){
            this.rings.push(this.zone)
            this.zone = {} as Zone;
          }
        });
      }
    });
  }
}
