import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit{
  ngOnInit() {const element = document.getElementById("ftco-navbar");
    element.remove();
  }

}
