import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainPage } from './app.mainpage';
import { LoginComponent } from './login/login.component';
import { ConditionalNavigationComponent } from './common/conditionalNavigation.component';
import { ClassServiceLogComponent } from './common/classServiceLog.component';
import { NoAccessComponent } from './common/noAccess.component';
import { WrongVersionComponent } from './common/wrongVersion.component';
import { LoginGuard } from './common/loginGuard';
import { PopStateNavigationGuard } from './common/popStateNavigationGuard';
import { GenericSiuComponent } from './common/genericSiu.component';
import { ProcessNewWindowComponent } from './common/processNewWindow.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    // full : makes sure the path is absolute path
    { path: environment.prefix + '', component: AppMainPage, pathMatch: 'full', canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/noaccess', component : NoAccessComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/wrongversion', component : WrongVersionComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/main', component: AppMainPage, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/login', component: LoginComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/genericsiu', component: GenericSiuComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/conditionalnavigation', component: ConditionalNavigationComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/classServiceLog', component: ClassServiceLogComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/processnw', component: ProcessNewWindowComponent},
    { path: environment.prefix + '/funcionario',
      loadChildren: () => import('./funcionario/funcionario.module').then(m => m.FuncionarioModule) },
    { path: environment.prefix + '/asesor',
      loadChildren: () => import('./asesor/asesor.module').then(m => m.AsesorModule) },
    { path: environment.prefix + '/afiliaciones',
      loadChildren: () => import('./afiliaciones/afiliaciones.module').then(m => m.AfiliacionesModule) },
    { path: environment.prefix + '/gestor',
      loadChildren: () => import('./gestor/gestor.module').then(m => m.GestorModule) },
    { path: environment.prefix + '/mesadeapoyo',
      loadChildren: () => import('./mesadeapoyo/mesadeapoyo.module').then(m => m.MesaDeApoyoModule) },
    { path: environment.prefix + '/productos',
      loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
    { path: environment.prefix + '/planes',
      loadChildren: () => import('./planes/planes.module').then(m => m.PlanesModule) },
    { path: environment.prefix + '/rol',
      loadChildren: () => import('./rol/rol.module').then(m => m.RolModule) },
    { path: environment.prefix + '/dominio',
      loadChildren: () => import('./dominio/dominio.module').then(m => m.DominioModule) },
    { path: environment.prefix + '/regional',
      loadChildren: () => import('./regional/regional.module').then(m => m.RegionalModule) },
    { path: environment.prefix + '/sucursal',
      loadChildren: () => import('./sucursal/sucursal.module').then(m => m.SucursalModule) },
    { path: environment.prefix + '/agentexproducto',
      loadChildren: () => import('./agentexproducto/agentexproducto.module').then(m => m.AgentexProductoModule) },
    { path: environment.prefix + '/logfuncionario',
      loadChildren: () => import('./logfuncionario/logfuncionario.module').then(m => m.LogFuncionarioModule) },
    { path: environment.prefix + '/loginformacionasesor',
      loadChildren: () => import('./loginformacionasesor/loginformacionasesor.module').then(m => m.LogInformacionAsesorModule) },
    { path: environment.prefix + '/loghistoricoplanes',
      loadChildren: () => import('./loghistoricoplanes/loghistoricoplanes.module').then(m => m.LogHistoricoPlanesModule) },
    { path: environment.prefix + '/usuariosistemaexterno',
      loadChildren: () => import('./usuariosistemaexterno/usuariosistemaexterno.module').then(m => m.UsuarioSistemaExternoModule) },
    { path: environment.prefix + '/globalservices',
      loadChildren: () => import('./globalservices/globalservices.module').then(m => m.GlobalServicesModule) },
    { path: '**', component: EmptyRouteComponent }

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' }
    ]
  })
export class AppRoutingModule { }
