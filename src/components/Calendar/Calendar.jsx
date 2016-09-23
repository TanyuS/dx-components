import React from 'react';
import {themr} from 'react-css-themr';
import moment from 'moment';
import Month from './Month';
import {PURE} from 'dx-util/src/react/react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import {MEMOIZE} from 'dx-util/src/function/function';

export const CALENDAR = Symbol('Calendar');

export const CALENDAR_THEME = {
	container: React.PropTypes.string,
	header: React.PropTypes.string,
	header__text: React.PropTypes.string,
	changeMonth__container: React.PropTypes.string,
	changeMonth__icon: React.PropTypes.string,
};

@PURE
@themr(CALENDAR)
export default class Calendar extends React.Component {
	static propTypes = {
		value: React.PropTypes.string.isRequired, // ISO - "2016-09-20T15:30:39.298Z"
		headerDateFormat: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func,
		min: React.PropTypes.string.isRequired, // ISO
		max: React.PropTypes.string.isRequired, // ISO
		previousMonthIcon: React.PropTypes.string,
		nextMonthIcon: React.PropTypes.string,
		theme: React.PropTypes.shape(CALENDAR_THEME)
	}

	state = {
		month: moment(this.props.value).month()
	}

	render() {
		const {
			theme,
			value,
			onChange,
			min,
			max,
			headerDateFormat,
			previousMonthIcon,
			nextMonthIcon
		} = this.props;

		const headerDate = moment(value).format(headerDateFormat);

		const changeMonthBtnTheme = {
			container: theme.changeMonth__container,
			icon: theme.changeMonth__icon
		};

		return (
			<div className={theme.container}>
				<div className={theme.header}>
					<ButtonIcon name={previousMonthIcon}
								theme={changeMonthBtnTheme}
								onClick={this.onChangeMonth(-1)}/>
					<span className={theme.header__text}>{headerDate}</span>
					<ButtonIcon name={nextMonthIcon}
								theme={changeMonthBtnTheme}
								onClick={this.onChangeMonth(1)}/>
				</div>
				<Month month={this.state.month}
					   value={value}
					   onChange={onChange}
					   min={min}
					   max={max}/>
			</div>
		);
	}

	@MEMOIZE
	onChangeMonth = step => () => {
		console.log(step);
	}
}