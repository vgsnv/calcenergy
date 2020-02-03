import React, { FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import init from './thunks/init'

import {
	Page,
	PageTitleContainer,
	PageTitleContainerText,
	CaptionContainer,
	CaptionContainerText,
	BodyContainer,
} from './stylesComponents'

import { NavigationInjectedProps } from 'react-navigation'
import { StatusBar } from 'react-native'

export interface Props {}

export interface Dispatch {}

interface State {}

export const MainScreen: FC<Props & Dispatch & NavigationInjectedProps> = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(init())
	}, [])
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<Page>
				<BodyContainer>
					<PageTitleContainer>
						<PageTitleContainerText>Загрузи фото на аватар</PageTitleContainerText>
					</PageTitleContainer>

					<CaptionContainer>
						<CaptionContainerText>Будет отображаться в ленте райдеров</CaptionContainerText>
					</CaptionContainer>
				</BodyContainer>
			</Page>
		</>
	)
}
