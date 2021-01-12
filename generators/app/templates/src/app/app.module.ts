/* eslint-disable @typescript-eslint/naming-convention */

import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';
import localeItExtra from '@angular/common/locales/extra/it';
import localeIt from '@angular/common/locales/it';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeEn, 'en', localeEnExtra);
registerLocaleData(localeIt, 'it', localeItExtra);

export const ConfigureTranslateModule = TranslateModule.forRoot({
	defaultLanguage: 'en',
	loader: {
		provide: TranslateLoader,
		useFactory: (http: HttpClient) =>
			new TranslateHttpLoader(http, './assets/i18n/', '.json'),
		deps: [HttpClient],
	},
});

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		ConfigureTranslateModule,
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
