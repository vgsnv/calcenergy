import React, { FC } from 'react'
import { LButtonContainer, Nav, RButtonContainer, Title } from './stylesComponents'
import { ProductCreateNavigationProp } from '../index'

interface Button {
	title: string
	onPress: () => void
}

export interface Props {
	leftButton?: Button
	rightButton?: Button
	navigation: ProductCreateNavigationProp
}

export interface Dispatch {}

export const Header: FC<Props & Dispatch> = props => {
	const { leftButton, rightButton } = props

	return (
		<>
			<Nav>
				{leftButton && (
					<LButtonContainer onPress={leftButton.onPress}>
						<Title>{leftButton.title}</Title>
					</LButtonContainer>
				)}
				{rightButton && (
					<RButtonContainer onPress={rightButton.onPress}>
						<Title>{rightButton.title}</Title>
					</RButtonContainer>
				)}
			</Nav>
		</>
	)
}
