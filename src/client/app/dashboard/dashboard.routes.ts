import {Route} from '@angular/router';

import {HomeRoutes} from './home/index';
import {ChartRoutes} from './charts/index';
import {BlankPageRoutes} from './blank-page/index';
import {TableRoutes} from './tables/index';
import {StudentsRoutes} from './students/index';
import {StudentRoutes} from './student/index';
import {FormRoutes} from './forms/index';
import {GridRoutes} from './grid/index';
import {BSComponentRoutes} from './bs-component/index';
import {BSElementRoutes} from './bs-element/index';

import {DashboardComponent} from './index';
import {FeedbackRoutes} from "./feedback/feedback.routes";

export const DashboardRoutes: Route[] = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            ...HomeRoutes,
            ...ChartRoutes,
            ...BSComponentRoutes,
            ...TableRoutes,
            ...StudentsRoutes,
            ...StudentRoutes,
            ...FeedbackRoutes,
            ...BlankPageRoutes,
            ...FormRoutes,
            ...GridRoutes,
            ...BSElementRoutes
        ]
    }
];
