import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { onMainContentChange } from 'src/app/animations/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [ onMainContentChange ]
})
export class ContentComponent implements OnInit {

  name = 'Angular';
  public onSideNavChange!: boolean;

  constructor(private _sideNavService: SidenavService) {
    this._sideNavService.sideNavState$.subscribe( res => {
      // console.log(res)
      this.onSideNavChange = res;
    })
   }

  ngOnInit(): void {
  }

}
