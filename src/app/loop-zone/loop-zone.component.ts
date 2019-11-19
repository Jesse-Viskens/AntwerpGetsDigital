import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { HondenLoopZonesService } from '../Services/honden-loop-zones.service';
import { Feature } from '../Interfaces/Iloopzone';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { filter } from 'minimatch';
import { all } from 'q';

@Component({
  selector: 'app-loop-zone',
  templateUrl: './loop-zone.component.html',
  styleUrls: ['./loop-zone.component.css']
})
export class LoopZoneComponent implements OnInit {

  constructor(private service: HondenLoopZonesService) { }
  displayedColumns: string[] = ['STRAATNAAM', 'POSTCODE', 'DISTRICT', 'HOOGTE_AFSLUITING', 'AANTAL_VUILNISBAKKEN', 'AANTAL_ZITBANKEN', 'TYPE_ONDERGROND', 'TYPE_BEPLANTING', 'QUOTERING_ALGEMEEN'];
  dataSource = new MatTableDataSource<Feature>();
  TableData: Feature[]
  DropdownData: Feature[] = [];
  filterData:Feature[];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;


  ngOnInit() {
    this.service.getAllLoopzones().subscribe({
      next: (res) => {
        this.TableData = res.features
        this.MakeUniqueList(res.features);
        this.dataSource.data = this.TableData;
        this.refresh();
      }});
  }

  refresh() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  FilterDistrictNames(feature){
    this.filterData = this.TableData.filter(e=> e.attributes.DISTRICT == feature.value);
    this.dataSource.data = this.filterData;
    this.refresh();
  }

  MakeUniqueList(allData:Feature[]){
    for(var i =0; i <allData.length; i++){
      if(!this.DropdownData.find(e => e.attributes.DISTRICT == allData[i].attributes.DISTRICT)){
        this.DropdownData.push(allData[i]);
      }
    }
  }
}
