import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { NativeDateTimeAdapter } from 'ng-pick-datetime/date-time/adapter/native-date-time-adapter.class';

// here is the default text string
export class CalendarPicker extends OwlDateTimeIntl {
    /** A label for the up second button (used by screen readers).  */
    upSecondLabel = 'ajouter une seconde';

    /** A label for the down second button (used by screen readers).  */
    downSecondLabel = 'moins une seconde';

    /** A label for the up minute button (used by screen readers).  */
    upMinuteLabel = 'ajouter une minute';

    /** A label for the down minute button (used by screen readers).  */
    downMinuteLabel = 'moins une minute';

    /** A label for the up hour button (used by screen readers).  */
    upHourLabel = 'ajouter une heure';

    /** A label for the down hour button (used by screen readers).  */
    downHourLabel = 'moins une heure';

    /** A label for the previous month button (used by screen readers). */
    prevMonthLabel = 'le mois précédent';

    /** A label for the next month button (used by screen readers). */
    nextMonthLabel = 'le mois prochain';

    /** A label for the previous year button (used by screen readers). */
    prevYearLabel = 'année précédente';

    /** A label for the next year button (used by screen readers). */
    nextYearLabel = 'l\'année prochaine';

    /** A label for the previous multi-year button (used by screen readers). */
    prevMultiYearLabel = 'Previous 21 years';

    /** A label for the next multi-year button (used by screen readers). */
    nextMultiYearLabel = 'Next 21 years';

    /** A label for the 'switch to month view' button (used by screen readers). */
    switchToMonthViewLabel = 'Change to month view';

    /** A label for the 'switch to year view' button (used by screen readers). */
    switchToMultiYearViewLabel = 'Choose month and year';

    /** A label for the cancel button */
    cancelBtnLabel = 'Cancelar';

    /** A label for the set button */
    setBtnLabel = 'Confirmar';

    /** A label for the range 'from' in picker info */
    rangeFromLabel = 'From';

    /** A label for the range 'to' in picker info */
    rangeToLabel = 'To';

    /** A label for the hour12 button (AM) */
    hour12AMLabel = 'AM';

    /** A label for the hour12 button (PM) */
    hour12PMLabel = 'PM';
}

