import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/Activites/details.service';
DetailsService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: DetailsService) { }
activityData:any;
  ngOnInit(): void {
    this.activityData = this.service.activityDetails;
  }

}
