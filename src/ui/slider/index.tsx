import React, { FC, useEffect, useState } from 'react'
import { PanResponder, View, ViewStyle } from 'react-native'

export enum SliderDirect {
	VERTICAL = 'vertical',
	HORIZONT = 'horizont',
}

interface StyleColors {
	emptyColor?: string
	fillColor?: string
}

export interface Props {
	value: number
	minValue?: number
	maxValue?: number

	direct?: SliderDirect
	style?: ViewStyle
	colors?: StyleColors

	onChangeValue: (val: number) => void
}

const defaultValues: Omit<Props, 'value' | 'onChangeValue'> = {
	minValue: 0,
	maxValue: 100,

	direct: SliderDirect.VERTICAL,
	style: {
		borderRadius: 12,
		height: 300,
		width: 80,
	},
	colors: {
		emptyColor: '#ccc',
		fillColor: '#000',
	},
}

const Slider: FC<Props> = props => {
	const {
		value,
		minValue = defaultValues.minValue,
		maxValue = defaultValues.maxValue,

		direct = defaultValues.direct,

		style = defaultValues.style,
		colors = defaultValues.colors,

		onChangeValue,
	} = props

	const { height, width } = style
	const { emptyColor, fillColor } = colors

	const [scaleUnit, editScaleUnit] = useState(1)
	const [heightTouchOnPage, editHeightTouchOnPage] = useState(0)

	useEffect(() => {
		const lenght = direct === SliderDirect.VERTICAL ? height : width

		editScaleUnit(parseInt(lenght.toString()) / (maxValue - minValue))
	}, [])

	const panResponder = PanResponder.create({
		onMoveShouldSetPanResponder: e => {
			const pageD = direct === SliderDirect.VERTICAL ? e.nativeEvent.pageY : e.nativeEvent.pageX

			editHeightTouchOnPage(pageD)
			return true
		},

		onPanResponderMove: e => {
			const pageD = direct === SliderDirect.VERTICAL ? e.nativeEvent.pageY : e.nativeEvent.pageX

			const k = direct === SliderDirect.VERTICAL ? 1 : -1

			const kk = value - (k * pageD - k * heightTouchOnPage) / scaleUnit

			if (minValue <= kk && kk < maxValue) onChangeValue(Math.round(100 * kk) / 100)

			editHeightTouchOnPage(pageD)
		},
	})

	const lenghtOfFullSpace = (value - minValue) * scaleUnit

	return (
		<>
			<View
				style={[
					{
						backgroundColor: emptyColor,
						overflow: 'hidden',
					},
					style,
				]}
				{...panResponder.panHandlers}
			>
				<View
					style={{
						zIndex: 2,
						position: 'absolute',
						backgroundColor: fillColor,
						bottom: 0,
						height: direct === SliderDirect.VERTICAL ? lenghtOfFullSpace : height,
						width: direct === SliderDirect.VERTICAL ? width : lenghtOfFullSpace,
					}}
				/>
			</View>
		</>
	)
}

export { Slider }
