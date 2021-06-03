import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../../data.service";


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage {

  brillen = [];
  brille = {};
  isFavourite = false;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute ) {
  this.brillen = this.dataService.getBrillenDaten();

  this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.queryParams) {
     const brilleId = this.router.getCurrentNavigation().extras.queryParams.brille;
      this.brille = this.brillen[brilleId];
      console.log(this.brille);
    }
    });
}


  brillenPage(url) {
    this.router.navigateByUrl(url);
  }

  ifFavourite() {
    if (this.isFavourite) {
      this.isFavourite = false;
    }
    else {
      this.isFavourite = true;
    }
  }
}

