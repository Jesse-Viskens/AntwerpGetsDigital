import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatCardModule, 
  MatMenuModule,
  MatIconModule,
  MatTableModule ,
  MatPaginatorModule,
  MatTabsModule,
  MatSelectModule 
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule, 
    MatPaginatorModule,
    MatSelectModule  
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule, 
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSelectModule  
  ]
})
export class MaterialModule { }
