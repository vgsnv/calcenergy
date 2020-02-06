import React, { FC } from 'react'
import { ImageSourcePropType } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { EmptySpace, HeaderContainer, Img, LButtonContainer, Nav, RButtonContainer } from './stylesComponents'

interface Button {
	image: ImageSourcePropType
	onPress: () => void
}

export interface Props {
	leftButton?: Button
	rightButton?: Button
}

export interface Dispatch {}

const Header: FC<Props & Dispatch & NavigationInjectedProps> = props => {
	const { leftButton, rightButton } = props

	return (
		<>
			<HeaderContainer>
				<EmptySpace />
				<Nav>
					{leftButton && (
						<LButtonContainer onPress={leftButton.onPress}>
							<Img source={leftButton.image} />
						</LButtonContainer>
					)}
					{rightButton && (
						<RButtonContainer onPress={rightButton.onPress}>
							<Img source={rightButton.image} />
						</RButtonContainer>
					)}
				</Nav>
			</HeaderContainer>
		</>
	)
}

export { Header }
