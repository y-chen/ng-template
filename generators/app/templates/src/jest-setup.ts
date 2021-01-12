/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import 'jest-extended';
import 'jest-preset-angular';
import '@ngneat/spectator/jest';

import { TranslateTestingModule } from 'ngx-translate-testing';

import { RouterTestingModule } from '@angular/router/testing';
import { defineGlobalsInjections } from '@ngneat/spectator';

import { CoreModule } from './app/core/core.module';
import {
	sharedModuleDeclarations, sharedModuleImports
} from './app/shared/shared.module';

const ENGLISH_LANGUAGE = 'en';
const ENGLISH_TRANSLATIONS = {
	pleasantries: {
		greeting: 'Hello',
		appreciation: 'Thank You!',
	},
};

const ITALIAN_LANGUAGE = 'it';
const ITALIAN_TRANSLATIONS = {
	pleasantries: {
		greeting: 'Ciao',
		appreciation: 'Grazie!',
	},
};

const TRANSLATIONS = {
	[ENGLISH_LANGUAGE]: ENGLISH_TRANSLATIONS,
	[ITALIAN_LANGUAGE]: ITALIAN_TRANSLATIONS,
};

defineGlobalsInjections({
	declarations: sharedModuleDeclarations,
	imports: [
		CoreModule,
		RouterTestingModule,
		TranslateTestingModule.withTranslations(TRANSLATIONS),
		...sharedModuleImports,
	],
	providers: [],
});
