import { Route } from '@angular/router';

import { StudentComponent } from './index';

export const StudentRoutes: Route[] = [
	{
		path: 'students/:id',
		component: StudentComponent
	},
];
