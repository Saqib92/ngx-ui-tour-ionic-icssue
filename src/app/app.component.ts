import { Component } from '@angular/core';
import { TourService } from 'ngx-ui-tour-ionic';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private tourService: TourService
  ) {

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.startTour();
      }, 2000)
    });
  }

  startTour() {
    this.tourService.initialize([
      {
        anchorId: 'stepOne',
        content: 'Home page',
        title: 'I am Home page',
        route: '/home',
        enableBackdrop: true,
        //smoothScroll: true
      },
      {
        anchorId: 'stepTwo',
        content: 'Video Contest',
        title: 'I am Video Contest',
        route: '/about'
      }
    ]);

    this.tourService.start();
    console.log('started')
  }

}
