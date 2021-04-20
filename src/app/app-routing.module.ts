import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisComponent } from './vis/vis.component';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';
import { HistoryTableComponent } from './history-table/history-table.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'vis', component: VisComponent },
  { path: 'dashboard', component: TestDashboardComponent },
  { path: 'table', component: HistoryTableComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
  {path: '**', redirectTo: '/index.html'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
