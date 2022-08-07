import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  dataSource: any;
  
  displayedColumns = ['username', 'password'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(localStorage.Data);
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
   }

  ngOnInit(): void {
  }

}
