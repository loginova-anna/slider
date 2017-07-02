import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  images: Array<any> = [
    {"sType":"div","content":"slide1"},
    {"sType":"div","content":"Hello It's slidable content"},
    {"sType":"img","imgSrc":"../../assets/img/img1.jpg"}
  ];
}
