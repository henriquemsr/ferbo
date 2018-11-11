import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {
  modalVagas: Boolean = false;
  pp: String = '';
  objeto = [
    { 'cargo': 'Auxiliar Administrativo' },
    { 'cargo': 'Escriturário' },
    { 'cargo': 'Administrador' },
    { 'cargo': 'Gerente Administrativo' },
    { 'cargo': 'Supervisor' }
  ];
  pCandidato: Boolean = false;
  vEmpresa: Boolean = false;
  adm = 'Administração';
  constructor() { }

  ngOnInit() {
  }
  openSearchVagas() {
    this.modalVagas = true;
  }
  closeSearchVagas() {
    this.modalVagas = false;
    this.pCandidato = false;
    this.vEmpresa = false;
  }
  openPcandidato() {
    this.pCandidato = true;
    this.vEmpresa = false;
  }
  openVempresa() {
    this.vEmpresa = true;
    this.pCandidato = false;
  }

}
