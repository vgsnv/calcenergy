import React, { FC, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { useDispatch } from 'react-redux'
import store from '../../../../store'
import { Button } from '../../../../ui'
import { Header } from './Header'
import { BodyContainer, Page, PageTitleContainer, PageTitleContainerText } from './stylesComponents'
import init from './thunks/init'

export interface Props {}

export interface Dispatch {}

const ProductEdit: FC<Props & Dispatch & NavigationInjectedProps> = props => {
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
						<PageTitleContainerText>Изменить продукт</PageTitleContainerText>
					</PageTitleContainer>

					<Button name={'Hello'} activeOpacity={1} onPress={() => store().persistor.purge()} />
				</BodyContainer>
			</Page>
		</>
	)
}

export { ProductEdit }
