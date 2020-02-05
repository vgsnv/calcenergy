import React, { FC, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { useDispatch } from 'react-redux'
import { BodyContainer, Page, PageTitleContainer, PageTitleContainerText } from './stylesComponents'
import init from './thunks/init'
import { Header } from './Header'

export interface Props {}

export interface Dispatch {}

const Screen02Screen: FC<Props & Dispatch & NavigationInjectedProps> = props => {
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
						<PageTitleContainerText>Второй экран</PageTitleContainerText>
					</PageTitleContainer>
				</BodyContainer>
			</Page>
		</>
	)
}

export { Screen02Screen }
