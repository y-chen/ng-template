import { mock, MockProxy } from 'jest-mock-extended';
import { of } from 'rxjs';

import { Provider } from '@angular/compiler/src/core';
import { EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export class MockMaster {
	translateMock: MockProxy<TranslateService>;

	translateProvider: Provider;

	constructor() {
		this.translateMock = mock<TranslateService>();

		this.translateProvider = {
			provide: TranslateService,
			useValue: this.translateMock,
		};
	}

	fixTranslateService(): MockMaster {
		const translateServiceProps = [
			'onTranslationChange',
			'onLangChange',
			'onDefaultLangChange',
		];

		translateServiceProps.forEach((prop) => {
			Object.defineProperty(this.translateMock, prop, {
				get: jest.fn(() => new EventEmitter()),
			});
		});

		this.translateMock.get.mockReturnValue(of('Mock'));

		return this;
	}
}
