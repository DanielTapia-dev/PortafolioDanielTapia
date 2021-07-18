import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PrimaryProjectComponent } from './primary-project/primary-project.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

    { path: 'projects', component: ProyectosComponent },
    { path: 'project', component: PrimaryProjectComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pages', component: PagesComponent }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { };