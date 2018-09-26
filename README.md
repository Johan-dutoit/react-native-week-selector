# react-native-week-selector

A simple and customisable week selector

[![NPM Version](https://img.shields.io/npm/v/react-native-week-selector.svg?style=flat)](https://www.npmjs.com/package/react-native-week-selector)
[![NPM Downloads](https://img.shields.io/npm/dm/react-native-week-selector.svg?style=flat)](https://www.npmjs.com/package/react-native-week-selector)

<a name='top'/>

## Quick Access
* <a href='#install'>Installation</a>
* <a href='#preview'>Preview</a>
* <a href='#usage'>Usage</a>
* <a href='#properties'>Properties</a>
* <a href='#contributing'>Contributing</a>

## <a name='install'>Installation</a>
Install the module with:


```
npm install react-native-week-selector --save
```

## <a name='preview'>Preview</a>

Try it on [Expo](https://snack.expo.io/@johan-dev/react-native-week-selector)
<!-- 

![](https://github.com/Johan-dutoit/react-native-week-selector/blob/master/preview.gif) -->

## <a name='usage'>Usage</a>
Simply import the component 

```js
import WeekSelector from 'react-native-week-selector';
```

Then use as follows
```js
<WeekSelector />
```


###### <a href='#top'>Top</a>

## <a name='properties'>Properties</a>

| Prop | Description | Default |
|---|---|---|
|**`containerStyle`**|Additional style for the container|`undefined`|
|**`selectorContainerStyle`**|Additional style for the selector containers|`undefined`|
|**`dateContainerStyle`**|Additional style for the date container|`undefined`|
|**`textStyle`**|Additional style for the date text|`undefined`|
|**`whitelistRange`**|2 values indicating the earliest/latest the user can change to|`[]`|
|**`onWeekChanged`**|Event triggered when changing week|`undefined`|
|**`weekStartsOn`**|Which day does the week start on|`1` (Monday)|
|**`renderPreviousSelector`**|Override the default previous selector|`undefined`|
|**`renderNextSelector`**|Override the default next selector|`undefined`|
|**`dayFormat`**|Display format for the day|`DD` (05)|
|**`monthFormat`**|Display format for the month|`MMMM` (September)|


<!-- |**`onPreviousPress`**|Event triggered when pressing the left selector|`undefined`|
|**`onNextPress`**|Event triggered when pressing the right selector|`undefined`| -->

###### <a href='#top'>Top</a>

## <a name='#Contributing'>Contributing</a>
Feel free to do pull requests if a certain feature you want is missing.  We accept all PR's that are enhancements to the project.

###### <a href='#top'>Top</a>