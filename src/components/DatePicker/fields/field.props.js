import React from 'react';
import moment from 'moment';

/**
 * Custom field components should handle these properties to interact with DatePicker.
 */
export const DATE_PICKER_FIELD_PROPS = {
	value: React.PropTypes.instanceOf(moment).isRequired, // formatted date string
	dateFormatter: React.PropTypes.func,
	onChange: React.PropTypes.func, // pass a new `date: Moment` back
	min: React.PropTypes.instanceOf(moment),
	max: React.PropTypes.instanceOf(moment), // ISO
	onClick: React.PropTypes.func,
	isDisabled: React.PropTypes.bool,
	isInvalid: React.PropTypes.bool,
	locale: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	isDatePickerOpened: React.PropTypes.bool,
	theme: React.PropTypes.shape({
		field: React.PropTypes.string,
		field_invalid: React.PropTypes.string
	})
};