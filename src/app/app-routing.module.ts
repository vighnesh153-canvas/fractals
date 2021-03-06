import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BarnsleysFernComponent } from './fractal-components/barnsleys-fern/barnsleys-fern.component';
import { SierpinksiTriangleComponent } from './fractal-components/sierpinksi-triangle/sierpinksi-triangle.component';
import { HilbertCurveComponent } from './fractal-components/hilbert-curve/hilbert-curve.component';
import {SymmetricBinaryTreeComponent} from './fractal-components/symmetric-binary-tree/symmetric-binary-tree.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'barnsleys-fern', component: BarnsleysFernComponent },
  { path: 'sierpinski-triangle', component: SierpinksiTriangleComponent },
  { path: 'hilberts-curve', component: HilbertCurveComponent },
  { path: 'symmetric-binary-tree', component: SymmetricBinaryTreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
