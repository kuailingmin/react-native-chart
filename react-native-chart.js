'use strict';

var React = require('react-native');
var PropTypes = require('ReactPropTypes');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var StyleSheet = require('StyleSheet');
var NativeMethodsMixin = require('NativeMethodsMixin');
var flattenStyle = require('flattenStyle');
var merge = require('merge');
var { View } = React;

var RNChartView = createReactIOSNativeComponentClass({
    validAttributes: merge(ReactIOSViewAttributes.UIView, {
        chartData:true, verticalGridStep:true, xLabels:true, showGrid:true, gridColor:true, gridLineWidth:true, 
        animationDuration:true, margin:true, showAxis:true, axisLineWidth:true, labelFontSize:true, labelTextColor:true
    }),
    uiViewClassName: 'RNChartView'
});

var RNChart = React.createClass({
    mixins: [NativeMethodsMixin],

    viewConfig: {
        uiViewClassName: 'UIView',
        validAttributes: ReactIOSViewAttributes.UIView
    },
    
    render() {
        var nativeProps = merge(this.props, {
            style: this.props.style,
            chartData: this.props.chartData            
        });

        return <RNChartView {... nativeProps} />
    }
});

var styles = StyleSheet.create({
});

module.exports = RNChart;