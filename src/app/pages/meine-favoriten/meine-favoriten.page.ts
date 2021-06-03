import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-meine-favoriten',
  templateUrl: './meine-favoriten.page.html',
  styleUrls: ['./meine-favoriten.page.scss'],
})
export class MeineFavoritenPage implements OnInit {
  brillen = [];

  constructor(private router: Router, private dataService: DataService) {
    this.brillen = this.dataService.getBrillenDaten();
    console.log(this.brillen);
  }

  ngOnInit() {
  }
  brillenPage(url) {
    this.router.navigateByUrl(url);
  }

  brilleClicked(brille) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        brille: brille.id
      }
    };
    this.router.navigateByUrl('tabs/brillen-uebersicht/index', navigationExtras);
  }
}
