/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable sonarjs/no-duplicate-string */

import { MockProxy, mockReset } from 'jest-mock-extended';

import { Provider } from '@angular/core';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { MockMaster } from './common/mock-master';

describe('AppComponent', () => {
	let host: SpectatorHost<AppComponent>;

	const createHost = createHostFactory(AppComponent);

	let translateServiceMock: MockProxy<TranslateService>;

	let translateServiceProvider: Provider;

	beforeEach(() => {
		const {
			translateMock,
			translateProvider,
		} = new MockMaster().fixTranslateService();

		translateServiceMock = translateMock;

		translateServiceProvider = translateProvider;
	});

	afterEach(() => {
		mockReset(translateServiceMock);
	});

	it('should create the app', () => {
		host = createHost('<__selector__-root></__selector__-root>', {
			providers: [translateServiceProvider],
		});

		const root = host.queryHost('__selector__-root');

		expect(root).toBeDefined();
	});

	it('should call Translate.setDefaultLang with expected default language', () => {
		const language = 'en';

		createHost('<__selector__-root></__selector__-root>', {
			providers: [translateServiceProvider],
		});

		expect(translateServiceMock.setDefaultLang).toHaveBeenCalledWith(language);
	});

	it('should call TranslateService.use with correct language on button click', () => {
		const language = 'en';

		host = createHost('<__selector__-root></__selector__-root>', {
			providers: [translateServiceProvider],
		});

		host.click('button');

		expect(translateServiceMock.use).toHaveBeenCalledWith(language);
	});
});
