import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ServiceComponent } from './service/service.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {path: '', component: ContentComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'userData', component: UserDataComponent},
    {path: 'home', component: HomeComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'careers', component: CareersComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'connect', component: ConnectComponent},
    {path: 'info', component: InfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
