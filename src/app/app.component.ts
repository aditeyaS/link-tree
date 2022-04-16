import { Component, OnInit } from '@angular/core';
import { SocialCategory } from './shared/models/social-category.model';
import { AppService } from './shared/services/app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  appData: SocialCategory[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appData = this.appService.getAllData();
  }

}
