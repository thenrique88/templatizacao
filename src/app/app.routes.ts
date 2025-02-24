import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EnviarTemplatesComponent } from './pages/enviar-templates/enviar-templates.component';
import { TemplatesEnviadosComponent } from './pages/templates-enviados/templates-enviados.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'enviar-templates', component: EnviarTemplatesComponent },
      { path: 'templates-enviados', component: TemplatesEnviadosComponent },
      { path: '', redirectTo: 'enviar-templates', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' }
];
