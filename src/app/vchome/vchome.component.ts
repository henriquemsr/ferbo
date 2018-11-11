import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-vchome',
  templateUrl: './vchome.component.html',
  styleUrls: ['./vchome.component.css']
})
export class VchomeComponent implements OnInit {
  format = 'video/webm';
  constrains = { video: true, audio: true };
  load: Boolean = false;
  user: any;
  idUserVc: any;
  nameVc: string;
  cpfVc: string;
  telefoneVc: string;
  emailVc: string;
  loginVc: string;
  perfilVc: number;
  planoUserChosen: string;
  dataPlano: any;
  dataFim: any;
  /**menu side */
  showMenu: Boolean = true;
  hideMenu: Boolean = false;
  meusDados: Boolean = false;
  video: Boolean = false;
  plano: Boolean = false;
  rate: Boolean = false;
  /**para atualizar dados */
  btEstagio: Boolean = false;
  btEstudante: Boolean = false;
  btTrainee: Boolean = false;
  btIniciante: Boolean = false;
  btProfissional: Boolean = false;
  modalPerfis: Boolean = false;
  perfil: number;
  UserVcLogged: any;
  /** change datas */
  dadosPessoais: Boolean = true;
  dadosSenhas: Boolean = false;
  showBtPass: Boolean = false;
  upPassword: any;
  upPasswordView: any;
  showMsgPass: Boolean = false;
  msgSuccess: Boolean = false;
  /** avaliar */
  star: Number;
  star1: Boolean = false;
  star2: Boolean = false;
  star3: Boolean = false;
  star4: Boolean = false;
  star5: Boolean = false;
  rating1: Boolean = false;
  rating2: Boolean = false;
  rating3: Boolean = false;
  rating4: Boolean = false;
  rating5: Boolean = false;
  formRate: Boolean = false;
  showMsgSucess: Boolean = false;
  goShowMsgSucess: Boolean = false;
  msgVc: any;
  /** record video */
  modalInstruction: Boolean = false;
  /** upload img */
  imgProfile: any; /** coleta a imagem do banco */
  imgProfileSave: any;
  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    public http: Http
  ) {
    this.user = localStorage.getItem('user'); /*id user_vc*/
    this.listUser();
  }

  ngOnInit() {
  }
  choseRate(star) {
    switch (star) {
      case 'ruim':
        this.star = 1;
        console.log(this.star);
        break;
      case 'pm':
        this.star = 2;
        console.log(this.star);
        break;
      case 'suf':
        this.star = 3;
        console.log(this.star);
        break;
      case 'bom':
        this.star = 4;
        console.log(this.star);
        break;
      case 'oti':
        this.star = 5;
        console.log(this.star);
        break;
    }
  }
  registerRateUser() {
    this.load = true;
    this.showMsgSucess = false;
    this.goShowMsgSucess = false;
    this.service.registerRating(
      'id_user_vc=' + this.user +
      '&nota_vc=' + this.star +
      '&msg_vc=' + this.msgVc
    )
      .subscribe(
        data => {
          console.log(data.message);
          this.load = false;
          this.star1 = false;
          this.star2 = false;
          this.star3 = false;
          this.star4 = false;
          this.star5 = false;
          this.rating1 = false;
          this.rating2 = false;
          this.rating3 = false;
          this.rating4 = false;
          this.rating5 = false;
          this.formRate = false;
          this.formRate = false;
          this.star = 0;
          this.msgVc = '';
          this.showMsgSucess = true;
          this.goShowMsgSucess = true;
        }
      );
  }
  rate1() {
    this.star1 = true;
    this.star2 = false;
    this.star3 = false;
    this.star4 = false;
    this.star5 = false;
    this.rating1 = true;
    this.rating2 = false;
    this.rating3 = false;
    this.rating4 = false;
    this.rating5 = false;
    this.formRate = false;
    this.formRate = true;
  }
  rate2() {
    this.star1 = true;
    this.star2 = true;
    this.star3 = false;
    this.star4 = false;
    this.star5 = false;
    this.rating1 = false;
    this.rating2 = true;
    this.rating3 = false;
    this.rating4 = false;
    this.rating5 = false;
    this.formRate = false;
    this.formRate = true;
  }
  rate3() {
    this.star1 = true;
    this.star2 = true;
    this.star3 = true;
    this.star4 = false;
    this.star5 = false;
    this.rating1 = false;
    this.rating2 = false;
    this.rating3 = true;
    this.rating4 = false;
    this.rating5 = false;
    this.formRate = false;
    this.formRate = true;
  }
  rate4() {
    this.star1 = true;
    this.star2 = true;
    this.star3 = true;
    this.star4 = true;
    this.star5 = false;
    this.rating1 = false;
    this.rating2 = false;
    this.rating3 = false;
    this.rating4 = true;
    this.rating5 = false;
    this.formRate = false;
    this.formRate = true;
  }
  rate5() {
    this.star1 = true;
    this.star2 = true;
    this.star3 = true;
    this.star4 = true;
    this.star5 = true;
    this.rating1 = false;
    this.rating2 = false;
    this.rating3 = false;
    this.rating4 = false;
    this.rating5 = true;
    this.formRate = false;
    this.formRate = true;
  }
  openModalPerfis() {
    this.modalPerfis = true;
  }
  closeModalPerfis() {
    this.modalPerfis = false;
  }
  fshowBtPass() {
    if (
      this.upPassword === this.upPasswordView &&
      this.upPassword.length > 5 &&
      this.upPasswordView.length > 5
    ) {
      this.showBtPass = true;
      this.showMsgPass = false;
    } else {
      this.showBtPass = false;
      this.showMsgPass = true;
    }
  }
  updateDatas() {
    this.dadosPessoais = true;
    this.dadosSenhas = false;
    this.showMsgPass = false;
  }
  updatePasswords() {
    this.dadosSenhas = true;
    this.dadosPessoais = false;
    this.showMsgPass = false;
  }

  finish() {
    localStorage.clear();
    location.reload(true);
  }
  showMenuClick() {
    this.showMenu = false;
    this.hideMenu = true;
  }
  hideMenuClick() {
    this.showMenu = true;
    this.hideMenu = false;
  }
  showMeusDados() {
    this.meusDados = true;
    this.video = false;
    this.plano = false;
    this.rate = false;
    this.showMenu = true;
    this.hideMenu = false;
  }
  showVideo() {
    this.video = true;
    this.meusDados = false;
    this.plano = false;
    this.rate = false;
    this.showMenu = true;
    this.hideMenu = false;
  }
  showPlano() {
    this.plano = true;
    this.video = false;
    this.meusDados = false;
    this.rate = false;
    this.showMenu = true;
    this.hideMenu = false;
  }
  showRate() {
    this.rate = true;
    this.plano = false;
    this.video = false;
    this.meusDados = false;
    this.showMenu = true;
    this.hideMenu = false;

  }
  fbtEstagio() {
    this.btEstagio = true;
    this.btEstudante = false;
    this.btTrainee = false;
    this.btIniciante = false;
    this.btProfissional = false;
    this.perfil = 1;
  }
  fbtEstudante() {
    this.btEstudante = true;
    this.btEstagio = false;
    this.btTrainee = false;
    this.btIniciante = false;
    this.btProfissional = false;
    this.perfil = 2;
  }
  fbtTrainee() {
    this.btTrainee = true;
    this.btEstagio = false;
    this.btEstudante = false;
    this.btIniciante = false;
    this.btProfissional = false;
    this.perfil = 3;
  }
  fbtIniciante() {
    this.btIniciante = true;
    this.btEstagio = false;
    this.btEstudante = false;
    this.btTrainee = false;
    this.btProfissional = false;
    this.perfil = 4;
  }
  fbtProfissional() {
    this.btProfissional = true;
    this.btEstagio = false;
    this.btEstudante = false;
    this.btTrainee = false;
    this.btIniciante = false;
    this.perfil = 5;
  }
  // formatarData(data) {
  //   const d = new Date(data),
  //     mes = '' + (d.getMonth() + 1),
  //     dia = '' + d.getDate(),
  //     ano = d.getFullYear();
  //   if (mes.length < 2) mes = '0' + mes;
  //   if (dia.length < 2) dia = '0' + dia;
  //   return [ano, mes, dia].join('-');
  // }
  listUser() {
    this.load = true;
    this.service.getUserVc(this.user).subscribe(
      data => {
        this.UserVcLogged = data.message;
        this.idUserVc = data.message.id_user_vc;
        this.nameVc = data.message.name_user_vc;
        this.cpfVc = data.message.cpf_user_vc;
        this.telefoneVc = data.message.telefone_user_vc;
        this.emailVc = data.message.mail_user_vc;
        this.loginVc = data.message.user_vc_login_vc;
        this.perfilVc = data.message.perfil_user_vc;
        this.planoUserChosen = data.message.nome_plano;
        this.dataPlano = data.message.data_adesao;
        const dtCalc = new Date(data.message.data_adesao);
        const time = new Date();
        this.dataFim = dtCalc.setDate(time.getDay() + 90); // working! :) 0/
        this.dataFim = dtCalc;

        console.log(this.perfilVc);
        this.load = true;
        this.load = false;
        switch (Number(this.perfilVc)) {
          case 1:
            this.btEstagio = true;
            break;
          case 2:
            this.btEstudante = true;
            break;
          case 3:
            this.btTrainee = true;
            break;
          case 4:
            this.btIniciante = true;
            break;
          case 5:
            this.btProfissional = true;
            break;
        }
      },
      err => err
    );
  }
  updateDataUserVc(id) {
    this.service.updateUserVc(
      'name_user_vc=' + this.nameVc +
      '&cpf_user_vc=' + this.cpfVc +
      '&perfil_user_vc=' + this.perfil +
      '&telefone_user_vc=' + this.telefoneVc +
      '&img_user_vc=' + this.imgProfileSave, /** fazer lógica para não subir vazio qd não mudar foto no front */
      id
    )
      .subscribe(
        data => {
          console.log(data.message);
        }
      );
    this.listUser();
  }  
  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];

      const formData = new FormData();
      formData.append('file', img);
      // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      // const options = new RequestOptions({ headers: headers });
      this.http.post('https://ferbo.com.br/api/upload_file_img', formData)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.imgProfile = data.message.substr(10, 15);
          this.imgProfileSave = this.imgProfile + this.idUserVc + '.jpg';
          console.log(this.imgProfile);
          console.log(this.imgProfileSave);
        });
    }
  }

  updatePass(id) {
    this.msgSuccess = false;
    this.service.updateUserVc(
      'password_user_vc=' + this.upPassword +
      '&passwordview_user_vc=' + this.upPasswordView,
      id
    )
      .subscribe(
        data => {
          this.upPassword = '';
          this.upPasswordView = '';
          this.msgSuccess = true;
          this.showBtPass = false;
        }
      );
    this.listUser();
  }
  public handleVideoStream(blob) {
    // can send it to a server or play in another video player etc..
    console.log('do something with the recording' + blob);
  }

  // announceStart() {
  //   alert('Clique em ok e comece a gravação!');
  // }
  openInstruction() {
    this.modalInstruction = true;
  }
  closeInstruction() {
    this.modalInstruction = false;
  }
}
