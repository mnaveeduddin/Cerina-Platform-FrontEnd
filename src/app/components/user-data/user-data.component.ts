import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { ApiService, credentials } from 'src/app/services/api.service';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  dataSource: any;
  
  displayedColumns = ['id','username','email','delete'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  loggedInUsername: any;

  constructor(private api:ApiService, private http: HttpClient, private appservice: AppService, private router: Router) {

  }
  
  ngOnInit(): void {
    this.api.getUserData().subscribe( x => {
      this.dataSource = new MatTableDataSource<credentials>(x);
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource);
    })
  }

  deleteUser(selectedRow){
    let httpParams = new HttpParams().set("id", selectedRow.id)
    this.http.delete('http://localhost:8080/deleteUser', { params : httpParams }).subscribe((x) => {
      // console.log(x);
      window.alert(x);
      this.loggedInUsername = this.appservice.getInfo()
      if(selectedRow.username == this.loggedInUsername){
        localStorage.clear();
        this.router.navigate(['login']);
      }
      this.ngOnInit();
    })
  }
}
