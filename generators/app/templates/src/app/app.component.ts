import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Cultures } from './common/constants';
import { Culture } from './models/culture.model';

@Component({
	selector: '__selector__-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = '__capital-app-name__';

	cultures: Culture[] = Cultures;

	constructor(private readonly translate: TranslateService) {}

	onButtonClick(language: string): void {
		this.translate.use(language);
	}
}
