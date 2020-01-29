import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';



const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

export const homeRoute = RouterModule.forChild(homeRoutes)


