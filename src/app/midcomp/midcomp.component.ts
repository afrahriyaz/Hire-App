import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';
@Component({
  selector: 'app-midcomp',
  templateUrl: './midcomp.component.html',
  styleUrls: ['./midcomp.component.css']
})
export class MidcompComponent implements OnInit {
  schedule:any;
  constructor(private data:ScheduleService)
  {
    data.schedule().subscribe((a)=>{
      console.warn("data",a);
      this.schedule=a
    })
  }

  ngOnInit(): void {
  }

}
