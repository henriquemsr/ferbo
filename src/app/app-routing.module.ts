import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { Component } from '@angular/core';
import { PlanosComponent } from './planos/planos.component';
import { VagasComponent } from './vagas/vagas.component';
import { ContatoComponent } from './contato/contato.component';
import { VchomeComponent } from './vchome/vchome.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PgtoComponent } from './pgto/pgto.component';
import { BsnsshomeComponent } from './bsnsshome/bsnsshome.component';


export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', redirectTo: 'home' },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'planos', component: PlanosComponent },
    { path: 'planos/:id', component: PlanosComponent },
    { path: 'vagas', component: VagasComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'vchome', component: VchomeComponent },
    { path: 'quem-somos', component: QuemSomosComponent },
    { path: 'como-funciona', component: ComoFuncionaComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: 'cadastro', component: CadastroComponent },
    {path: 'pgto', component: PgtoComponent},
    {path: 'bsnsshome', component: BsnsshomeComponent}
    // { path: '**', component: HomeComponent }
];
