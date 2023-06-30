import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'resumen', pathMatch: 'full' },
      { path: 'resumen', loadChildren: () => import('./modules/resumen/resumen.module').then(m => m.ResumenModule) },
      { path: 'miperfil', loadChildren: () => import('./modules/miperfil/miperfil.module').then(m => m.MiperfilModule) },
      { path: 'horario', loadChildren: () => import('./modules/horario/horario.module').then(m => m.HorarioModule) },
      { path: 'clientes', loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule) },
      { path: 'ingresos', loadChildren: () => import('./modules/ingresos/ingresos.module').then(m => m.IngresosModule) },
      { path: 'ajustes', loadChildren: () => import('./modules/ajustes/ajustes.module').then(m => m.AjustesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
