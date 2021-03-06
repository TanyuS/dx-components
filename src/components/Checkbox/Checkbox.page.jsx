import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {PURE} from 'dx-util/lib/react/pure';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import Demo from '../../demo/Demo.jsx';

import Checkbox from './Checkbox.jsx';
import {storiesOf} from '@kadira/storybook';

import checkboxIcon from './img/icon-checkbox-tick.svg';
import css from './Checkbox.page.styl';

const darkDemoTheme = {
	container: css.container,
	view: css.view,
	icon: css.icon,
	icon_isDisabled: css.icon_isDisabled
};

export const CHECKBOX = 'Checkbox';

@PURE
@themr(CHECKBOX)
class CheckboxPage extends Component {
	state = {
		isChecked: true
	}
	static propTypes = {
		isDisabled: PropTypes.bool
	}

	render() {
		const labelClassName = classnames(css.label, {
			[css.label_isDisabled]: this.props.isDisabled
		});
		return (
			<Demo>
				<div className={css.container}>
					<label htmlFor="check1" className={labelClassName}>
						<Checkbox theme={darkDemoTheme}
							checkboxIconName={checkboxIcon}
							isChecked={this.state.isChecked}
							onChange={this.onChangeHandler}
							isDisabled={this.props.isDisabled}
							id="check1"/>
						I'am controlled checkbox
					</label>
				</div>
			</Demo>
		);
	}

	onChangeHandler = (e) => {
		this.setState({
			isChecked: !this.state.isChecked
		});
	}
}

storiesOf('Checkbox', module).add('default', () => <CheckboxPage/>)
	.add('disabled', () => <CheckboxPage isDisabled={true}/>);

