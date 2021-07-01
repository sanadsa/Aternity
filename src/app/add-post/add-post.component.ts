import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  title = new FormControl('', [Validators.required]);
  body = new FormControl('', [Validators.required]);

  constructor() { }

  checkIfDisabled() {
    return this.title.invalid || this.body.invalid;
  }
}
