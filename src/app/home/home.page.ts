import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  username: string = '';
  password: string = '';
  constructor(
    private router: Router,
    public loadingController: LoadingController,
    public afAuth: AngularFireAuth,
    public toastCtrl: ToastController
  ) {}

  async login() {
    if (this.username && this.password) {
      try {
        const resp = this.afAuth.auth.signInWithEmailAndPassword(this.username, this.password);
        resp
          .then(e => {
            this.router.navigateByUrl('tabs');
            console.log(e);
          })
          .catch(async e => {
            console.log(e);
            const toast = await this.toastCtrl.create({
              header: e.code,
              message: e.message,
              duration: 2000
            });
            toast.present();
          });
      } catch (err) {
        const toast = await this.toastCtrl.create({
          header: err.code,
          message: err.message,
          duration: 2000
        });
        toast.present();
        console.log(err);
      }
    }
  }
  signUp() {
    this.router.navigateByUrl('signup');
  }
  fPassword() {}
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
