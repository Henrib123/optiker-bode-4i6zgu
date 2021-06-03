import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-kontaktlinsen',
  templateUrl: './kontaktlinsen.page.html',
  styleUrls: ['./kontaktlinsen.page.scss'],
})
export class KontaktlinsenPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  brillenPage(url) {
    this.router.navigateByUrl(url);
  }
}
