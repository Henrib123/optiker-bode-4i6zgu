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

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute ) {
  this.brillen = this.dataService.getBrillenDaten();

  this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.queryParams) {
      this.brille = this.router.getCurrentNavigation().extras.queryParams.brille;

    }
    });
}

  ngOnInit() {
   /* this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('brilleId')) {
        //redirect
        return;
      }
      const brilleId = paramMap.get('brilleId');
      this.dataService.getBrillenDaten(brilleId);
    }); */
  }

  brillenPage(url) {
    this.router.navigateByUrl(url);
  }

}

