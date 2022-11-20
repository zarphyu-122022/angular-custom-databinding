import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-databinding';
  user:User[]=[{
    username:'Zar Phyu',
    email:'sandar@gmail.com'
  }]
  createnewUser(user:User){
    this.user.push(user);
    
  }

  fireNum(num:any){
    console.log(num);
    
  }
  
}
