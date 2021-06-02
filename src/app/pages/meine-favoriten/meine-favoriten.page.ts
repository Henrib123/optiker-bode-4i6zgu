import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-meine-favoriten',
  templateUrl: './meine-favoriten.page.html',
  styleUrls: ['./meine-favoriten.page.scss'],
})
export class MeineFavoritenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  brillenPage(url) {
    this.router.navigateByUrl(url);
  }
}
