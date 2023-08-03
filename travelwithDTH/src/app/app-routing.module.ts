import { BookingComponent } from './pages/booking/booking.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'booking',component:BookingComponent},
  {path:'booking/:id',component:BookingpageComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
