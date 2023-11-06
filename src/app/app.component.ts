import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'reactiveapplication';
  selectedTeam: string = '';
  userName: string = '';
  showInfo: boolean=false;
  entries: { name: string, team: string }[] = [];


  onSubmit() {
    if (this.userName && this.selectedTeam) {
    this.entries.push({ name: this.userName, team: this.selectedTeam});
    this.userName='';
    this.selectedTeam='';
    }

    //this.showInfo=true
    console.log('Form submitted with data:');
    console.log('Name: ' + this.userName);

    console.log('Team: ' + this.selectedTeam);   
    
    
  }

  onTeamChange(event: any) {
    this.selectedTeam = event.target.value;
  }

}

