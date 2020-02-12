import React, { FC } from 'react'
import { LButtonContainer, Nav, RButtonContainer, Title } from './stylesComponents'

interface Button {
	title: string
	onPress: () => void
}

export interface Props {
	leftButton?: Button
	rightButton?: Button
}

export interface Dispatch {}

const Header: FC<Props & Dispatch> = props => {
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

export { Header }
