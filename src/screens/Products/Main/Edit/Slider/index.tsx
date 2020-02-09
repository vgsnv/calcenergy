import React, { FC } from 'react'
import { View } from 'react-native'
import * as ui from '../../../../../ui'
import { SliderCaption, SliderCaptionContainer, SliderContainer, SliderSmallCaption } from './stylesComponents'

export interface Props {
	value: number
	labelName: string
	emptyColor: string
	fillColor: string
	minValue: number
	maxValue: number
}

export interface Dispatch {
	onChangeValue: (value: number) => void
}
const Slider: FC<Props & Dispatch> = props => {
	const { value, onChangeValue, emptyColor, fillColor, maxValue, minValue, labelName } = props

	return (
		<SliderContainer>
			<SliderCaptionContainer>
				<SliderCaption
					style={{
						color: fillColor,
					}}
				>
					{`${value.toFixed(1).toString()}`}
				</SliderCaption>

				<SliderSmallCaption
					style={{
						color: fillColor,
					}}
				>
					{labelName}
				</SliderSmallCaption>
			</SliderCaptionContainer>

			<View
				style={{
					shadowColor: '#000',
					shadowOffset: { width: 1, height: 3 },
					shadowOpacity: 0.16,
					shadowRadius: 2,
				}}
			>
				<ui.Slider
					direct={ui.SliderDirect.VERTICAL}
					colors={{ emptyColor: emptyColor, fillColor: fillColor }}
					value={value}
					onChangeValue={onChangeValue}
					maxValue={maxValue}
					minValue={minValue}
					style={{
						borderRadius: 12,
						height: 300,
						width: 75,
					}}
				/>
			</View>
		</SliderContainer>
	)
}
export { Slider }
