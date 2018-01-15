import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html'
})
export class WarningAlertComponent {
  public doWarning () { 

  	alert('Warning! :(');
  	
  }
}