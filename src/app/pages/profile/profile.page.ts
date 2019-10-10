import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}
  signOut() {
    const signOutResp = this.afAuth.auth.signOut();
    signOutResp.then(e => {
      this.router.navigateByUrl('home');
    });
  }
}
