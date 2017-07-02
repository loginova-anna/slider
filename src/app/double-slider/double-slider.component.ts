import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {TimeInterval} from "rxjs";

@Component({
  selector: 'double-slider',
  templateUrl: './double-slider.component.html',
  styleUrls: ['./double-slider.component.scss']
})
export class DoubleSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('feed') feed;
  constructor() { }
  leftPosition: number = 0;
  panes: any[];
  hideOverflow: boolean = false;
  pendingPaneId = '';
  nextSlideId: number;
  prevSlideId: number;
  interval: any;
  visible = [1, 2];
  slides = [
    {name: 'slide1'},
    {name: 'slide2'}
  ];

  ngOnInit() {
    this.prevSlideId = this.slides.length - 1;
    this.nextSlideId = this.slides.length <= 2 ? 0 : 2;
      this.panes = [
        {slideId: this.prevSlideId, paneId: 'pane0'},
        {slideId: 0, paneId: 'pane1'},
        {slideId: 1, paneId: 'pane2'},
        {slideId: this.nextSlideId, paneId: 'pane3'}
      ];

  }

  ngAfterViewInit() {
    this.startAutoShow();
  }

  startAutoShow() {
    console.log('started');
    // setTimeout( () => {
        this.interval = setInterval(this.backward.bind(this), 5000);
    // } , 1);
  }

  stopAutoShow() {
    console.log('stopped');
    clearInterval(this.interval);
  }

  backward() {
    console.log('going back');
    if (!this.hideOverflow) {
      this.movePanesLeft();
      setTimeout(() => {
        this.hideOverflow = false;
        this.deleteLeftPane();
        this.addRightPane();
      }, 500);
    }
  }

  movePanesLeft() {
      this.hideOverflow = true;
      this.visible = [1, 2, 3];
      document.getElementById(this.panes[1].paneId).style.setProperty('left', '-200px');
      document.getElementById(this.panes[2].paneId).style.setProperty('left', '0px');
      document.getElementById(this.panes[3].paneId).style.setProperty('left', '200px');
  }

  deleteLeftPane() {
    this.pendingPaneId = this.panes[0].paneId;
    this.panes.shift();
    this.prevSlideId = this.panes[0].slideId;
  }

  addRightPane() {
    this.visible = [1,2];
    this.nextSlideId = (this.nextSlideId < this.slides.length -1) ? this.nextSlideId + 1 : 0;
    this.panes.push({slideId: this.nextSlideId, paneId: this.pendingPaneId});
  }

  forward() {
    if(!this.hideOverflow) {
      this.movePanesRight();
      setTimeout(() => {
        this.hideOverflow = false;
        this.deleteRightPane();
        this.addLeftPane();
      }, 500)
    }
  }

  movePanesRight() {
    this.hideOverflow = true;
    this.visible = [0,1,2];
    document.getElementById(this.panes[0].paneId).style.setProperty('left', '0px');
    document.getElementById(this.panes[1].paneId).style.setProperty('left', '200px');
    document.getElementById(this.panes[2].paneId).style.setProperty('left', '400px');
  }

  deleteRightPane() {
    this.pendingPaneId = this.panes[3].paneId;
    this.panes.pop();
    this.nextSlideId = this.panes[2].slideId;
  }

  addLeftPane() {
    this.visible = [1,2];
    this.prevSlideId = (this.prevSlideId > 0) ? this.prevSlideId -1 : this.slides.length - 1;
    this.panes.unshift({slideId: this.prevSlideId, paneId: this.pendingPaneId});
  }
}
