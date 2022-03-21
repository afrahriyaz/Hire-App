import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service'
@Component({
  selector: 'app-panelist',
  templateUrl: './panelist.component.html',
  styleUrls: ['./panelist.component.css']
})
export class PanelistComponent implements OnInit {

  users:any; 

  constructor(private userData:UsersDataService) {
    userData.users().subscribe((data) => {
      console.warn("data", data);
      this.users = data;
    });
  }

  ngOnInit(): void {
  }

}
