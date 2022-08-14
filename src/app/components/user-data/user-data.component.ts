import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService, credentials } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  dataSource: any;
  
  displayedColumns = ['id'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api:ApiService ) {

    this.api.getUserData().subscribe( x => {
      this.dataSource = new MatTableDataSource<credentials>(x);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    })
   }

  ngOnInit(): void {
  }

}
