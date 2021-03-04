import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  form = new FormGroup({
    ionInput: new FormControl(''),
    plainInput: new FormControl(''),
  });
  constructor() {}

  amountHandler(event: any, inputType: string) {
    this.form.get(inputType).setValue(event.target.value + '!');
    if (inputType === 'ionInput') {
      event.target.firstChild.selectionStart = 0;
      event.target.firstChild.selectionEnd = 0;
    } else {
      event.target.selectionStart = 0;
      event.target.selectionEnd = 0;
    }
  }
}
