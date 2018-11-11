import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { PlanosComponent } from './planos/planos.component';
import { VagasComponent } from './vagas/vagas.component';
import { ContatoComponent } from './contato/contato.component';
import { VchomeComponent } from './vchome/vchome.component';
import { SearchPipe } from './search.pipe';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ServiceService } from './service.service';
import { RtcMediaRecorderModule } from '../rtc-media-recorder/rtc-media-recorder.module';
import { PgtoComponent } from './pgto/pgto.component';
import { BsnsshomeComponent } from './bsnsshome/bsnsshome.component';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    CursosComponent,
    PlanosComponent,
    VagasComponent,
    ContatoComponent,
    VchomeComponent,
    SearchPipe,
    QuemSomosComponent,
    ComoFuncionaComponent,
    CadastroComponent,
    PgtoComponent,
    BsnsshomeComponent
  ],
  imports: [
    RtcMediaRecorderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    ServiceService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
