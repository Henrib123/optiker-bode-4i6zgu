import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brillen-uebersicht',
  templateUrl: './brillen-uebersicht.page.html',
  styleUrls: ['./brillen-uebersicht.page.scss'],
})
export class BrillenUebersichtPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  brillenPage(url) {
    this.router.navigateByUrl(url);
  }
}
