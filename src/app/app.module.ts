import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { GridbootstrapComponent } from './gridbootstrap/gridbootstrap.component';
import { ModalComponent } from './modal/modal.component';
import { Section1Component } from './gridbootstrap/section1/section1.component';
import { Section2Component } from './gridbootstrap/section2/section2.component';
import { Section3Component } from './gridbootstrap/section3/section3.component';
import { Section4Component } from './gridbootstrap/section4/section4.component';
import { TestComponent } from './test/test.component';
import { CarouselModule } from './carousel/carousel.module';
import { TimelineComponent } from './timeline/timeline.component';
import { CarouselanimationComponent } from './carouselanimation/carouselanimation.component';
import { CarouselsliderComponent } from './carouselslider/carouselslider.component';
import { GridCoolEffectImageComponent } from './grid-cool-effect-image/grid-cool-effect-image.component';
import { LilyComponent } from './grid-cool-effect-image/lily/lily.component';
import { SadieComponent } from './grid-cool-effect-image/sadie/sadie.component';
import { HoneyComponent } from './grid-cool-effect-image/honey/honey.component';
import { LaylaComponent } from './grid-cool-effect-image/layla/layla.component';
import { ZoeComponent } from './grid-cool-effect-image/zoe/zoe.component';
import { OscarComponent } from './grid-cool-effect-image/oscar/oscar.component';
import { MarleyComponent } from './grid-cool-effect-image/marley/marley.component';
import { RubyComponent } from './grid-cool-effect-image/ruby/ruby.component';
import { RoxyComponent } from './grid-cool-effect-image/roxy/roxy.component';
import { RubbaComponent } from './grid-cool-effect-image/rubba/rubba.component';
import { RomeoComponent } from './grid-cool-effect-image/romeo/romeo.component';
import { DexterComponent } from './grid-cool-effect-image/dexter/dexter.component';
import { SarahComponent } from './grid-cool-effect-image/sarah/sarah.component';
import { ChicoComponent } from './grid-cool-effect-image/chico/chico.component';
import { MiloComponent } from './grid-cool-effect-image/milo/milo.component';
import { BetterComponent } from './grid-cool-effect-image/better/better.component';
import { TransitionimgComponent } from './grid-cool-effect-image/transitionimg/transitionimg.component';
import { TesComponent } from './tes/tes.component';
import { TeComponent } from './te/te.component';







@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    GridComponent,
    GridbootstrapComponent,
    ModalComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    TestComponent,
    TimelineComponent,
    CarouselanimationComponent,
    CarouselsliderComponent,
    GridCoolEffectImageComponent,
    LilyComponent,
    SadieComponent,
    HoneyComponent,
    LaylaComponent,
    ZoeComponent,
    OscarComponent,
    MarleyComponent,
    RubyComponent,
    RoxyComponent,
    RubbaComponent,
    RomeoComponent,
    DexterComponent,
    SarahComponent,
    ChicoComponent,
    MiloComponent,
    BetterComponent,
    TransitionimgComponent,
    TesComponent,
    TeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    CarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
