import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {
  video: Boolean = true;
  empresa: Boolean = false;
  modalInfoPlan: Boolean = false;
  choicePlanVc: string;
  planoChose: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(res => {
      console.log(res);
      res.id === 'b' ? this.empresa = true : this.empresa = false;
      res.id === 'b' ? this.video = false : this.empresa = true;
    }
    );
  }
  ngOnInit() {
  }
  selectVideo() {
    this.video = true;
    this.empresa = false;
  }
  selectEmpresa() {
    this.empresa = true;
    this.video = false;
  }
  openModalInfoPlan() {
    this.modalInfoPlan = true;
  }
  closeModalInfoPlan() {
    this.modalInfoPlan = false;
  }
  goPlanoVcGratis() {
    this.choicePlanVc = 'gratis';
    this.router.navigate(['cadastro', this.choicePlanVc]);
  }
  goPlanoVcPlus() {
    this.choicePlanVc = 'plus';
    this.router.navigate(['cadastro', this.choicePlanVc]);
  }
}
