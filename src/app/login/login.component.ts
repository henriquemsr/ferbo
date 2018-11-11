import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from '@firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  /** login user video cv */
  username: any;
  password: any;
  id: any;
  getId: any;
  nameUser: any;
  getNameUser: any;
  load: Boolean = false;
  loginVideo: Boolean = false;
  loginBusiness: Boolean = false;
  msgError: Boolean = false;
  checkLogged: any;
  error: any;
  /**login user business */
  mailBusiness: any;
  passBusiness: any;
  checkLoggedBusiness: any;

  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    // public afAuth: AngularFireAuth
    // public afAuth: AngularFireAuth
  ) { }
  // doGoogleLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope('profile');
  //     provider.addScope('email');
  //     this.afAuth.auth
  //       .signInWithPopup(provider)
  //       .then(res => {
  //         resolve(res);
  //       });
  //   });
  // }
  // loginG() {
  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }
  // logoutG() {
  //   this.afAuth.auth.signOut();
  // }
  ngOnInit() {
  }
  openLoginVideo() {
    this.loginVideo = true;
    this.loginBusiness = false;
  }
  openLoginBusiness() {
    this.loginBusiness = true;
    this.loginVideo = false;
  }

  async Logar() {
    this.load = true;
    if (this.username === '' && this.password === '') {
      alert('Favor preecha campo!');
    } else {
      this.service.login('login=' + this.username + '&password=' + this.password)
        .subscribe(
          data => {
            window.location.reload();
            if (data.error === false) {
              localStorage.setItem('name', data.user.name);
              localStorage.setItem('user', data.user.id);
              this.router.navigate(['vchome']);
              // this.load=false;
            } else {
              alert('Usuario ou Senha incorretos');
            }
          }

        );
    }
  }
  getVcUser(id, id2) {
    this.msgError = false;
    this.load = true;
    this.service.loginUserVc(this.username, this.password).subscribe(
      data => {
        this.checkLogged = data.message.id_user_vc;
        console.log(this.checkLogged);
        this.error = data.error;
        if (this.error === false) {
          localStorage.setItem('user', this.checkLogged);
          // location.reload(true) ? this.load = false : this.load = true;
          location.reload();
          this.router.navigate(['pgto']);
        } else {
          this.msgError = true;
        }
        this.load = false;
      }
    );
  }
  getBusinessUser(id, id2) {
    this.msgError = false;
    this.load = true;
    this.service.loginBusinesUser(this.mailBusiness, this.passBusiness).subscribe(
      data => {
        this.checkLoggedBusiness = data.message.id_user_business;
        console.log(this.checkLoggedBusiness);
        this.error = data.error;
        if (this.error === false) {
          localStorage.setItem('userBusiness', this.checkLoggedBusiness);
          // location.reload(true) ? this.load = false : this.load = true;
          location.reload();
          this.router.navigate(['pgto']);
        } else {
          this.msgError = true;
        }
        this.load = false;
      }
    );
  }

}
