import React, { FC } from 'react'
import {
	ButtonTitle,
	HeaderTitleContainer,
	HeaderTitleText,
	LButtonContainer,
	Nav,
	RButtonContainer,
} from './stylesComponents'

interface Button {
	title: string
	onPress: () => void
}

export interface Props {
	leftButton?: Button
	title?: string
	rightButton?: Button
}

export interface Dispatch {}

export const Header: FC<Props & Dispatch> = props => {
	const { leftButton, rightButton, title } = props

	return (
		<>
			<Nav>
				{leftButton && (
					<LButtonContainer onPress={leftButton.onPress}>
						<ButtonTitle>{leftButton.title}</ButtonTitle>
					</LButtonContainer>
				)}

				{title && (
					<HeaderTitleContainer>
						<HeaderTitleText>{title}</HeaderTitleText>
					</HeaderTitleContainer>
				)}

				{rightButton && (
					<RButtonContainer onPress={rightButton.onPress}>
						<ButtonTitle>{rightButton.title}</ButtonTitle>
					</RButtonContainer>
				)}
			</Nav>
		</>
	)
}
