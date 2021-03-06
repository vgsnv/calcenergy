import React, { FC } from 'react'
import { ImageSourcePropType } from 'react-native'
import { ProductListNavigationProp } from '../index'
import { Img, LButtonContainer, Nav, RButtonContainer } from './stylesComponents'

interface Button {
	image: ImageSourcePropType
	onPress: () => void
}

export interface Props {
	leftButton?: Button
	rightButton?: Button
	navigation: ProductListNavigationProp
}

export interface Dispatch {}

export const Header: FC<Props & Dispatch> = props => {
	const { leftButton, rightButton } = props

	return (
		<>
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
		</>
	)
}
