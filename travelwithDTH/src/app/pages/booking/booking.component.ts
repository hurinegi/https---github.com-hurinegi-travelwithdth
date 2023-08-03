import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/Activites/details.service';
DetailsService

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private service:DetailsService) { }
  activityData:any;
  ngOnInit(): void {
    this.activityData=this.service.activityDetails;
  }

}
