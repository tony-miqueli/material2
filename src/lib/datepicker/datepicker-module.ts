/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {A11yModule} from '@angular/cdk/a11y';
import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCalendar} from './calendar';
import {MatCalendarBody} from './calendar-body';
import {MatDatepicker, MatDatepickerContent} from './datepicker';
import {MatDatepickerInput} from './datepicker-input';
import {MatDatepickerIntl} from './datepicker-intl';
import {MatDatepickerToggle, MatDatepickerToggleIcon} from './datepicker-toggle';
import {MatMonthView} from './month-view';
import {MatMultiYearView} from './multi-year-view';
import {MatYearView} from './year-view';


@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    OverlayModule,
  ],
  exports: [
    MatCalendar,
    MatCalendarBody,
    MatDatepicker,
    MatDatepickerContent,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerToggleIcon,
    MatMonthView,
    MatYearView,
    MatMultiYearView,
  ],
  declarations: [
    MatCalendar,
    MatCalendarBody,
    MatDatepicker,
    MatDatepickerContent,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerToggleIcon,
    MatMonthView,
    MatYearView,
    MatMultiYearView,
  ],
  providers: [
    MatDatepickerIntl,
  ],
  entryComponents: [
    MatDatepickerContent,
  ]
})
export class MatDatepickerModule {}
