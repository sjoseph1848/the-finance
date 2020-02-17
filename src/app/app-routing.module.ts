import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import the components
import { DashboardComponent }from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { EditStockComponent } from './components/edit-stock/edit-stock.component';
import { SettingsComponent } from  './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'stock/add', component: AddStockComponent
  },
  {
    path: 'stock/edit/:id', component: EditStockComponent
  },
  {
    path: 'stock/:id', component: StockDetailsComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
