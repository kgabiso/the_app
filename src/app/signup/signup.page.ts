import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { User } from '../modal/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  password: string = '';
  cpassword: string = '';
  username: string = '';
  itemRef: AngularFireObject<any>;
  item: Observable<any>;
  user: User = {
    username: '',
    phoneName: '',
    name: '',
    surname: ''
  };
  constructor(
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    private router: Router,
    fdb: AngularFireDatabase
  ) {
    this.itemRef = fdb.object('user');
  }

  ngOnInit() {
    this.user.username = '';
  }
  async signUp() {
    console.log(this.password);

    try {
      if (this.user.username.length && this.password.length) {
        console.log(this.user);
        if (this.password === this.cpassword) {
          const signupResp = this.afAuth.auth.createUserWithEmailAndPassword(this.user.username, this.password);
          signupResp
            .then(e => {
              if (e) {
                this.router.navigateByUrl('tabs');
                this.itemRef.set(this.user);
              }
            })
            .catch(async e => {
              const toast = await this.toastCtrl.create({
                header: e.code,
                message: e.message,
                duration: 2000
              });
              toast.present();
            });
        } else {
          const toast = await this.toastCtrl.create({
            header: 'error',
            message: 'Password do not match',
            duration: 2000
          });
          toast.present();
        }
      }
    } catch (err) {
      const toast = await this.toastCtrl.create({
        header: err.code,
        message: err.message,
        duration: 2000
      });
      toast.present();
    }
  }
  addUserProfile(user) {}
}
