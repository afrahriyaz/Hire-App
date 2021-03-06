import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faArrowRight, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panelist',
  templateUrl: './panelist.component.html',
  styleUrls: ['./panelist.component.css']
})
export class PanelistComponent implements OnInit {

 // users:string[];
  month:number = 0;
  quarter:number = 0;
  year:number = 0;
  incentive:number = 0;
  // today:Slot[]=[];
  //user = JSON.parse(localStorage.getItem('user')!);
  // user1 = JSON.parse(this.user)
  faUser = faUser;
  faEdit = faEdit;
  faRight = faArrowRight;
  faCal = faCalendar;
  round:string="2";
  constructor(private router:Router) { }
  monthstop:any = setInterval(()=>{
    this.month++;
    //we need to stop this at  particular point; will use if condition
    if(this.month ==37)
    {
      //clearinterval will stop tha function
      clearInterval(this.monthstop);
    }

  },50);
  quarterstop:any = setInterval(()=>{
    this.quarter++;
    //we need to stop this at  particular point; will use if condition
    if(this.quarter ==68)
    {
      //clearinterval will stop tha function
      clearInterval(this.quarterstop);
    }

  },30);
  yearstop:any = setInterval(()=>{
    this.year++;
    //we need to stop this at  particular point; will use if condition
    if(this.year ==124)
    {
      //clearinterval will stop tha function
      clearInterval(this.yearstop);
    }

  },15)
  incentivestop:any = setInterval(()=>{
    this.incentive++;
    //we need to stop this at  particular point; will use if condition
    if(this.incentive == 576)
    {
      //clearinterval will stop tha function
      clearInterval(this.incentivestop);
    }

  },5)

  navtopan():void{
    
      this.router.navigate(['/panelist']);
  
  }
  navtointerv():void{
    this.router.navigate(['/interv']);
  }

  getId():number{
    console.log("iddd "+localStorage.getItem('id'))
    return Number(localStorage.getItem('id'));

  }

  ngOnInit(): void {
    // this.users=["10:00","12:00"];
    // if(this.user == null){
    //   this.router.navigate(['/']);
    //   swal ( "Oops" ,  "Please Login to continue" ,  "error" );
    // }
    
    // this.panelistService.getDetails(this.getId()).subscribe((person)=>{
    //   console.log(person)
    //   this.round = person.round_Alloted;
    //   this.person=person;
    //   this.panelistService.setInterviewer(person);
    // },(error)=>{
    //   console.log("error - "+error)
    // },()=>{
    //   this.panelistService.getTodaysSchedule(this.person.userId).subscribe((data)=>{
    //     let currDate = new Date();
    //     // console.log(data.filter((slot)=>(slot.slotId===65)));
    //     // console.log(data.filter((slot)=>(slot.date===currDate.getMonth()+""+currDate.getDate()+currDate.getFullYear())))
    //     // console.log(currDate.getMonth()+""+currDate.getDate()+currDate.getFullYear())
    //     this.today = data.filter((slot)=>(slot.date===this.panelistService.getFormattedDate(new Date())));
        
    //   })
    // })
  }

}
