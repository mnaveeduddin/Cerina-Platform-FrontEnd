import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService, todo } from 'src/app/services/api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent implements AfterViewInit {

  dataSource: any;
  
  displayedColumns = ['id', 'title', 'completed'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private api: ApiService) {
    
    this.api.getTodos().subscribe( x => {
      this.dataSource = new MatTableDataSource<todo>(x);
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource);
    })
  }

  ngAfterViewInit(): void {
  }
}
