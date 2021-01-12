import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './material/material.module';

export const sharedModuleDeclarations = []; // Components, Directives and Pipes here

export const sharedModuleImports = [
	CommonModule,
	HttpClientModule,
	MaterialModule,
	TranslateModule,
]; // Modules here

@NgModule({
	declarations: sharedModuleDeclarations,
	imports: sharedModuleImports,
	exports: [CommonModule, MaterialModule, TranslateModule], // Components, Directives, Modules Pipes here
	providers: [], // Services here
})
export class SharedModule {}
