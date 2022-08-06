import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { GridCoolEffectImageComponent } from './grid-cool-effect-image/grid-cool-effect-image.component';
import { GridComponent } from './grid/grid.component';
import { GridbootstrapComponent } from './gridbootstrap/gridbootstrap.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: '', component: MainComponent },
  { path: 'grid', component: GridComponent },
  { path: 'gridbootstrap', component: GridbootstrapComponent },
  { path: 'cooleffect', component: GridCoolEffectImageComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'timeline', component: TimelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
