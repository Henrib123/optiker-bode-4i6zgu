import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {

  constructor(private router: Router) {
  }


  brillenPage(url) {
    this.router.navigateByUrl(url);
  }

}

