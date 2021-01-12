import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
	declarations: [], // Components, Directives and Pipes here
	imports: [CommonModule], // Modules here
	exports: [], // Compnents here
	providers: [], // Guards, Resolvers and Services,
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() core: CoreModule) {
		if (core) {
			throw new Error('You should import core module only in the root module');
		}
	}
}
