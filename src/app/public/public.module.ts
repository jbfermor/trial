import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';

@NgModule({
	declarations: [
		PublicComponent,
		HomeComponent,
		LoginComponent
	],
	imports: [
		PublicRoutingModule,
		SharedModule
	],
	exports: [],
	providers: []
})

export class PublicModule {
	constructor() {}
}
