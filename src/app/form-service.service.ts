import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  selectedTeam: any;
  userName: any;

  constructor(private formService:FormServiceService) { }
  onSubmit() {
    const formData = {
      name: this.userName,
      team: this.selectedTeam
    };
    this.formService.submitForm(formData);
  }
  submitForm(formData: { name: any; team: any; }) {
    throw new Error('Method not implemented.');
  }
}
