import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showModalRegister: Boolean = false;
  showModalVideo: Boolean = false;
  video;
  @ViewChild('videoPlayer') videoplayer: any;
  constructor() {
  }
  ngOnInit() {
      this.video = this.videoplayer.nativeElement;
      this.video.muted = true;
  }
  openModalRegister() {
    this.showModalRegister = true;
  }
  closeModalRegister() {
    this.showModalRegister = false;
  }
  openModalVideo() {
    this.showModalVideo = true;
  }
  closeModalVideo() {
    this.showModalVideo = false;
  }

}
