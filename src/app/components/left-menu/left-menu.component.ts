import { Component, OnInit } from '@angular/core';
import { onSideNavChange, animateText } from 'src/app/animations/animations';
import { SidenavService } from 'src/app/services/sidenav.service';
import { AppService } from 'src/app/app.service';


// interface Page{
//   link: string;
//   name: string;
//   icon: string;
// }

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

  data:string;

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  // public pages: Page[] = [
  //   {name: 'Home', link:'/home', icon: 'inbox'},
  //   {name: 'Starred', link:'some-link', icon: 'star'},
  //   {name: 'Send email', link:'some-link', icon: 'send'},
  // ]

  constructor(private _sidenavService: SidenavService, private appservice: AppService) { }

  ngOnInit(): void {
    this.data = this.appservice.getInfo();
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

}
