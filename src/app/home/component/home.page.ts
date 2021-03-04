import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  form = new FormGroup({
    amount: new FormControl(''),
  });
  constructor() {}

  amountHandler(event: any) {
    this.form.get('amount').setValue(event.target.value + '!');
    event.target.firstChild.selectionStart = 0;
    event.target.firstChild.selectionEnd = 0;
  }
}
