import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @Output() createnewEventEmitter = new EventEmitter<User>();
  @Output() numberfire =new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }
  
  createUser(username: any,email: any){
  this.createnewEventEmitter.emit({username,email});
    

  }
  num=100;
  numberFire(num:any){
    this.numberfire.emit(num);
 
    

  }
}
