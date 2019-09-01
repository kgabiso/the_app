import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private router: Router, public loadingController: LoadingController) {}

  login() {
    // this.presentLoadingWithOptions().then(loader => {
    //   console.log(loader);
    //
    // });
    this.router.navigateByUrl('menu/first');
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'signing in...',
      translucent: true,
      cssClass: 'login-loader custom-loading'
    });
    return loading.present();
  }
}
