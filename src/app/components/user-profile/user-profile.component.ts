import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name : string = "Ramesh"
  Status:string = "Single"
  salary:number = 40000
  isBtnDisabled = true
  inputval = "test"
  onchange(e:Event){
    const value = (e.target as HTMLInputElement).value
    this.inputval = value
  }
    
}
