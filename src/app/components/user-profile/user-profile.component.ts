import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { User } from '../../../model/User';
import { CountrycodePipe } from "../../pipes/countrycode.pipe";
 function formatName(value:string){
  return "HI " + value
 }
@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [CountrycodePipe]
})
export class UserProfileComponent {
  @Input({alias:'userName',transform:formatName}) name = ''
  @Output() myEvent = new EventEmitter<User>()
  sendData(){
    this.myEvent.emit({name:this.name,salary:10000})
  }
  // name : string = "Ramesh"
  // Status:string = "Single"
  //  salary:number = 40000
  //  isBtnDisabled = true
  //  inputval = "test"
  // phoneno = 3229229957
  // user = [
  //   {name:'Ramesh',isSingle:true,salary:10000},
  //   {name:'Soraj',isSingle:false,salary:60000},
  //   {name:'nitesh',isSingle:true,salary:90000},
  // ]
  // onchange(e:Event){
  //   const value = (e.target as HTMLInputElement).value
  //   this.inputval = value
  // }
    
}
