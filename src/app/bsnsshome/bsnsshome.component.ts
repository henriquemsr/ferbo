import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bsnsshome',
  templateUrl: './bsnsshome.component.html',
  styleUrls: ['./bsnsshome.component.css']
})
export class BsnsshomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  finish() {
    localStorage.clear();
    location.reload(true);
  }

}
