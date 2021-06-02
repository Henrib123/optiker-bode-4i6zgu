import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-brillen-uebersicht',
  templateUrl: './brillen-uebersicht.page.html',
  styleUrls: ['./brillen-uebersicht.page.scss'],
})
export class BrillenUebersichtPage  {
  brillen = [];

  constructor(private router: Router, private dataService: DataService) {
    this.brillen = this.dataService.getBrillenDaten();
    console.log(this.brillen);
  }

  brillenPage(url) {
    this.router.navigateByUrl(url);
  }


}
