import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';


@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: HomeView, pathMatch: 'full'},
			{ path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
		])
	],
	declarations: [ AppComponent, HomeView ],
  exports: [ AppComponent ]
})
export class AppModule {}
