import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ServiceService } from './service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  userBusiness: any;
  myAccount: Boolean = false;
  myAccountBsnss: Boolean = false;
  hideBts: Boolean = false;
  menuMobile: Boolean = false;
  animateLogo: Boolean = true;
  termos: Boolean = false;
  pPrivacidade: Boolean = false;
  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = localStorage.getItem('user'); /**pega usuario vc logado */
    this.userBusiness = localStorage.getItem('userBusiness'); /** pega usuario empresa logado */
    /**seta usuario empresa logado */
    if (this.userBusiness !== null) {
      this.myAccountBsnss = true;
      this.hideBts = true;
      this.router.navigate(['pgto']);
    } else {
      this.myAccountBsnss = false;
      this.router.navigate(['home']);
    }
    /**seta usuario vc logado */
    if (this.user !== null) {
      this.myAccount = true;
      this.hideBts = true;
      this.router.navigate(['pgto']);
    } else {
      this.myAccount = false;
      this.router.navigate(['home']);
    }
  }
  openMenuMobile() {
    this.menuMobile = true;
    this.animateLogo = false;
  }
  closeMenuMobile() {
    this.menuMobile = false;
    this.animateLogo = true;
  }
  openModalTerms() {
    this.termos = true;
  }
  closeModalTerms() {
    this.termos = false;
  }
  openModalPrivacidade() {
    this.pPrivacidade = true;
  }
  closeModalPrivacidade() {
    this.pPrivacidade = false;
  }
}
