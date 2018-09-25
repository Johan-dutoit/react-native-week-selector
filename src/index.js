// @flow

import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, } from 'react-native';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

import startOfToday from 'date-fns/start_of_today';
import startOfWeek from 'date-fns/start_of_week';
import endOfWeek from 'date-fns/end_of_week';
import addWeeks from 'date-fns/add_weeks';
import subtractWeeks from 'date-fns/sub_weeks';
import isBefore from 'date-fns/is_before';
import isAfter from 'date-fns/is_after';
import isSameDay from 'date-fns/is_same_day';
import format from 'date-fns/format';

type Props = {
  containerStyle?: ViewStyleProp,
  selectorContainerStyle?: ViewStyleProp,
  whitelistRange?: Array<Date>,
  onWeekChanged?: (data: Date) => void,
  weekStartsOn: number,
  renderPreviousSelector?: () => React.Component<any>,
  renderNextSelector?: () => React.Component<any>,
  dayFormat: string,
  monthFormat: string,
  onPreviousPress?: (data: Date) => void,
  onNextPress?: (data: Date) => void,

};

type State = {
  date: Date
}

class WeekSelector extends PureComponent<Props, State> {
  static defaultProps: Props = {
    dayFormat: 'DD',
    monthFormat: 'MMMM',
    weekStartsOn: 1 // Monday
  };

  state = {
    date: startOfToday()
  };

  render() {
    const { date } = this.state;
    const { containerStyle, selectorContainerStyle, whitelistRange, weekStartsOn } = this.props;
    const [startDate, endDate] = whitelistRange;

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.selectorContainer, selectorContainerStyle]}>{this.renderPreviousSelector(date, startDate)}</View>
        <View>{this.renderDisplayText(date, weekStartsOn)}</View>
        <View style={[styles.selectorContainer, selectorContainerStyle]}>{this.renderNextSelector(date, endDate)}</View>
      </View>
    );
  }

  renderPreviousSelector = (currentDate: Date, startDate: Date) => {
    if (isSameDay(currentDate, startDate) || isBefore(currentDate, startDate)) {
      return null;
    }

    const { renderPreviousSelector } = this.props;
    return (
      <TouchableOpacity onPress={this.onPreviousPress}>
        {renderPreviousSelector
          ? renderPreviousSelector()
          : <Image source={require('./images/left-arrow-black.png')} />}
      </TouchableOpacity>
    )
  };

  renderNextSelector = (currentDate: Date, endDate: Date) => {
    if (isSameDay(currentDate, endDate) || isAfter(currentDate, endDate)) {
      return null;
    }

    const { renderNextSelector } = this.props;
    return (
      <TouchableOpacity onPress={this.onNextPress}>
        {renderNextSelector
          ? renderNextSelector()
          : <Image source={require('./images/right-arrow-black.png')} />}
      </TouchableOpacity>
    );
  };

  renderDisplayText = (date: Date, weekStartsOn: number) => {
    const { dayFormat, monthFormat } = this.props;

    const firstDayOfWeek = startOfWeek(date, { weekStartsOn });
    const lastDayOfWeek = endOfWeek(date, { weekStartsOn });

    const firstDay = format(firstDayOfWeek, dayFormat);
    const firstMonth = format(firstDayOfWeek, monthFormat);
    const lastDay = format(lastDayOfWeek, dayFormat);
    const lastMonth = format(lastDayOfWeek, monthFormat);

    const firstMonthText = firstMonth !== lastMonth ? ` ${firstMonth}` : '';
    const text = `${firstDay}${firstMonthText} - ${lastDay} ${lastMonth}`;

    return (
      <Text style={styles.text}>
        {text}
      </Text>
    );
  };

  onPreviousPress = () => {
    this.setState(
      state => ({
        date: subtractWeeks(state.date, 1)
      }),
      () => {
        this.onWeekChanged();
      }
    );
  };

  onNextPress = () => {
    this.setState(
      state => ({
        date: addWeeks(state.date, 1)
      }),
      () => {
        this.onWeekChanged();
      }
    );
  };

  onWeekChanged = () => {
    const { date } = this.state;
    const { onWeekChanged } = this.props;

    onWeekChanged && onWeekChanged(startOfWeek(date));
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectorContainer: {
    width: 18
  },
  text: {
    width: 290
  }
});

export default WeekSelector;
