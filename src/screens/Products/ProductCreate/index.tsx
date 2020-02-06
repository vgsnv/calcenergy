import React, { FC, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { useDispatch } from 'react-redux'
import { BodyContainer, Page, PageTitleContainer, PageTitleContainerText } from './stylesComponents'
import init from './thunks/init'
import { Header } from './Header'
import { Button } from '../../../ui'
import store from '../../../store'

export interface Props {}

export interface Dispatch {}

const ProductCreate: FC<Props & Dispatch & NavigationInjectedProps> = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(init())
	}, [])

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<Header navigation={props.navigation} />
			<Page>
				<BodyContainer>
					<PageTitleContainer>
						<PageTitleContainerText>Добавить продукт</PageTitleContainerText>
					</PageTitleContainer>

					<Button name={'Hello'} activeOpacity={1} onPress={() => store().persistor.purge()} />
				</BodyContainer>
			</Page>
		</>
	)
}

export { ProductCreate }
