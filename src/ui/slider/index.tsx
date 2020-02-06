import * as React from 'react'
import { PanResponder, View, ViewStyle } from 'react-native'

export enum SliderDirect {
	VERTICAL = 'vertical',
	HORIZONT = 'horizont',
}

export interface Props {
	direct: SliderDirect
	style?: ViewStyle
	emptyColor: string
	backColor: string
	value: number
	minValue: number
	maxValue: number
}

export interface Dispatch {
	onChangeValue: (v) => void
}

interface State {
	heightTouchOnPage: number
	scaleUnit: number
}

export default class Component extends React.Component<Props & Dispatch, State> {
	public state = {
		heightTouchOnPage: 0,
		scaleUnit: 0,
	}

	private panResponder = PanResponder.create({
		onMoveShouldSetPanResponder: e => {
			const pageD = this.props.direct === SliderDirect.VERTICAL ? e.nativeEvent.pageY : e.nativeEvent.pageX

			this.setState({ heightTouchOnPage: pageD })
			return true
		},

		onPanResponderMove: e => {
			const pageD = this.props.direct === SliderDirect.VERTICAL ? e.nativeEvent.pageY : e.nativeEvent.pageX

			const { value, onChangeValue, direct } = this.props
			const { heightTouchOnPage, scaleUnit } = this.state

			const k = direct === SliderDirect.VERTICAL ? 1 : -1

			onChangeValue(value - (k * pageD - k * heightTouchOnPage) / scaleUnit)

			this.setState({
				heightTouchOnPage: pageD,
			})
		},
	})

	public componentDidMount = () => {
		const { minValue, maxValue, style, direct } = this.props
		const { height, width } = style

		const lenght = direct === SliderDirect.VERTICAL ? height : width

		this.setState({
			scaleUnit: parseInt(lenght.toString()) / (maxValue - minValue),
		})
	}

	public render() {
		const { style, emptyColor, backColor, value, minValue, direct } = this.props

		const { scaleUnit } = this.state

		const lenghtOfFullSpace = (value - minValue) * scaleUnit

		return (
			<View
				style={[
					{
						backgroundColor: emptyColor,
						overflow: 'hidden',
					},
					style,
				]}
				{...this.panResponder.panHandlers}
			>
				<View
					style={{
						zIndex: 2,
						position: 'absolute',
						backgroundColor: backColor,
						bottom: 0,
						height: direct === SliderDirect.VERTICAL ? lenghtOfFullSpace : style.height,
						width: direct === SliderDirect.VERTICAL ? style.width : lenghtOfFullSpace,
					}}
				/>
			</View>
		)
	}
}
