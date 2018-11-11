import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
// import {
//   AuthService,
//   SocialUser,
//   FacebookLoginProvider,
//   GoogleLoginProvider
// } from 'angular5-social-login';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  // private user: SocialUser;
  // public authorized: Boolean = false;
  userDataBase: any;
  registerVideo: Boolean = false;
  registerBusiness: Boolean = false;
  load: Boolean = false;
  name: any;
  email: any;
  userlogin: any;
  password: any;
  cpf: any;
  telefone: any;
  passwordView: any;
  perfil: number;
  tipoPlano: number;
  idVisitor: number;
  infoWhats: Boolean = false;
  modal: Boolean = false;
  /**bt chioces */
  btEstagio: Boolean = false;
  btEstudante: Boolean = false;
  btTrainee: Boolean = false;
  btIniciante: Boolean = false;
  btProfissional: Boolean = false;
  /**btRegisteres */
  btRegister: Boolean = false;
  btRegisterFacebook: Boolean = false;
  perfilBt: Boolean = false;
  passOk: Boolean = true;
  btChoicePlanUserVc: Boolean = true;
  btChoicePlanUserPlus: Boolean = false;
  planChose: any;
  /**Register Business */
  btChoicePlanEmpBsnss: Boolean = true;
  btChoicePlanEmpBsnssPlus: Boolean = false;
  tipoPlanoBsnss: Number = 0;
  nameBsnss: any;
  namePersonBsnss: any;
  telBsnss: any;
  emailBsnss: any;
  cnpjBsnss: any;
  passwordBsnss: any;
  passwordViewBsnss: any;
  userBusiness: any; /** get id isert */
  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
    // private socialAuthService: AuthService
    //  public social: AuthService
  ) {
    this.route.params.subscribe(res => {
      res.id === 'gratis' ? this.selectVideo() : this.planChose = '';
      if (res.id === 'plus') {
        this.selectVideo();
        this.btChoicePlanUserPlus = true;
        this.btChoicePlanUserVc = false;
      }
    }
    );
  }/**constructor */
  ngOnInit() {
  }
  selectVideo() {
    this.registerVideo = true;
    console.log('this.registerVideo ' + this.registerVideo);
    this.registerBusiness = false;
    this.btEstagio = false;
    this.btEstudante = false;
    this.btTrainee = false;
    this.btIniciante = false;
    this.btProfissional = false;
    this.btRegister = false;
    this.btRegisterFacebook = false;
    this.perfilBt = false;
    this.name = '';
    this.email = '';
    this.cpf = '';
    this.password = '';
    this.passwordView = '';
    this.telefone = '';
    // this.perfil = 0;
  }
  selectBusiness() {
    this.registerBusiness = true;
    this.registerVideo = false;
  }
  registerVcUser() {
    if (this.btRegister === true) {
      this.load = true;
      if (this.btChoicePlanUserVc === true) {
        this.tipoPlano = 1;
      } else if (this.btChoicePlanUserPlus === true) {
        this.tipoPlano = 2;
      }
      this.service.registerUserVc(
        'name_user_vc=' + this.name +
        '&mail_user_vc=' + this.email +
        '&user_vc_login_vc=' + this.email +
        '&cpf_user_vc=' + this.cpf +
        '&telefone_user_vc=' + this.telefone +
        '&whatsapp_user_vc=' + 'https://api.whatsapp.com/send?phone=55' + this.telefone +
        '&id_plano=' + this.tipoPlano +
        '&password_user_vc=' + this.password +
        '&passwordview_user_vc=' + this.password +
        '&perfil_user_vc=' + this.perfil
      )
        .subscribe(
          data => {
            console.log(data.message);
            this.name = '';
            this.email = '';
            this.email = '';
            this.cpf = '';
            this.password = '';
            this.passwordView = '';
            this.telefone = '';
            this.load = false;
            this.userDataBase = data.message.id_user_vc;
            console.log(this.userDataBase);
            localStorage.setItem('user', this.userDataBase);
            // location.reload(true) ? this.load = false : this.load = true;
            this.router.navigate(['pgto']);
          }
        );
    }
  }
  saveUserBusiness() {
    this.load = true;
    if (this.btChoicePlanEmpBsnss === true) {
      this.tipoPlanoBsnss = 3; /** plano 49,90 mês */
    } else if (this.btChoicePlanEmpBsnssPlus === true) {
      this.tipoPlanoBsnss = 4; /** plano 99,90 mês */
    }
    this.service.registerBusinessData(
      'name_bsnss=' + this.nameBsnss +
      '&name_person_bsnss=' + this.namePersonBsnss +
      '&tel_bsnss=' + this.telBsnss +
      '&email_bsnss=' + this.emailBsnss +
      '&cnpj_bsnss=' + this.cnpjBsnss +
      '&password_bsnss=' + this.passwordBsnss +
      '&password_view_bsnss=' + this.passwordViewBsnss +
      '&id_plano=' + this.tipoPlanoBsnss
    )
      .subscribe(
        data => {
          console.log(data.message);
          this.nameBsnss = '';
          this.namePersonBsnss = '';
          this.telBsnss = '';
          this.emailBsnss = '';
          this.cnpjBsnss = '';
          this.passwordBsnss = '';
          this.load = false;
          this.userBusiness = data.message.id_user_business;
          console.log(this.userBusiness);
          localStorage.setItem('userBusiness', this.userBusiness);
          // location.reload(true) ? this.load = false : this.load = true;
          this.router.navigate(['pgto']);
        }
      );
  }
  goPlanos() {
    this.router.navigate(['planos']);
  }
  goPlanosBusiness() {
    const Business = 'b';
    this.router.navigate(['planos', Business]);
  }
  toPassOk() {
    if (this.password === this.passwordView) {
      this.passOk = true;
    } else {
      this.passOk = false;
    }
  }
  toTrue() {
    this.toPassOk();
    if (
      this.name !== '' &&
      this.email !== '' &&
      this.telefone !== '' &&
      this.password !== '' &&
      this.passwordView !== '' &&
      this.perfilBt !== false &&
      this.passOk !== false
    ) {
      this.btRegister = true;
    } else {
      this.btRegister = false;
    }
    console.log(this.btRegister);
  }
  infoApiWhats() {
    if (this.telefone.length < 11) {
      this.infoWhats = true;
      console.log('infoWhats true = ' + this.infoWhats);
    } else {
      this.infoWhats = false;
      console.log('infoWhats false = ' + this.infoWhats);
    }
  }
  fbtEstagio() {
    this.btEstagio = true;
    this.btEstudante = false;
    this.btTrainee = false;
    this.btIniciante = false;
    this.btProfissional = false;
    this.btRegisterFacebook = true;
    this.perfilBt = true;
    this.perfil = 1;
    this.toTrue();
  }
  fbtEstudante() {
    this.btEstudante = true;
    this.btEstagio = false;
    this.btTrainee = false;
    this.btIniciante = false;
    this.btProfissional = false;
    this.btRegisterFacebook = true;
    this.perfilBt = true;
    this.perfil = 2;
    this.toTrue();
  }
  fbtTrainee() {
    this.btTrainee = true;
    this.btEstagio = false;
    this.btEstudante = false;
    this.btIniciante = false;
    this.btProfissional = false;
    this.btRegisterFacebook = true;
    this.perfilBt = true;
    this.perfil = 3;
    this.toTrue();
  }
  fbtIniciante() {
    this.btIniciante = true;
    this.btEstagio = false;
    this.btEstudante = false;
    this.btTrainee = false;
    this.btProfissional = false;
    this.btRegisterFacebook = true;
    this.perfilBt = true;
    this.perfil = 4;
    this.toTrue();
  }
  fbtProfissional() {
    this.btProfissional = true;
    this.btEstagio = false;
    this.btEstudante = false;
    this.btTrainee = false;
    this.btIniciante = false;
    this.btRegisterFacebook = true;
    this.perfilBt = true;
    this.perfil = 5;
    this.toTrue();
  }
  selectPlanVc() {
    this.btChoicePlanUserVc = true;
    this.btChoicePlanUserPlus = false;
  }
  selectPlanPlus() {
    this.btChoicePlanUserPlus = true;
    this.btChoicePlanUserVc = false;
  }
  selectPlanBusiness() {
    this.btChoicePlanEmpBsnss = true;
    this.btChoicePlanEmpBsnssPlus = false;
  }
  selectPlanBusinessPlus() {
    this.btChoicePlanEmpBsnssPlus = true;
    this.btChoicePlanEmpBsnss = false;
  }
  openModal() {
    this.modal = true;
  }
  closeModal() {
    this.modal = false;
  }
}
