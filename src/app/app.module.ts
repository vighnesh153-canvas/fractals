import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './shared/data/data.component';
import { IntegerInputComponent } from './shared/integer-input/integer-input.component';
import { RangeInputComponent } from './shared/range-input/range-input.component';

import { FractalComponentTemplateComponent } from './components/fractal-component-template/fractal-component-template.component';

import { BarnsleysFernComponent } from './fractal-components/barnsleys-fern/barnsleys-fern.component';
import { SierpinksiTriangleComponent } from './fractal-components/sierpinksi-triangle/sierpinksi-triangle.component';
import { HilbertCurveComponent } from './fractal-components/hilbert-curve/hilbert-curve.component';
import { SymmetricBinaryTreeComponent } from './fractal-components/symmetric-binary-tree/symmetric-binary-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BarnsleysFernComponent,
    FractalComponentTemplateComponent,
    SierpinksiTriangleComponent,
    HilbertCurveComponent,
    IntegerInputComponent,
    DataComponent,
    SymmetricBinaryTreeComponent,
    RangeInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
