import React, { FC, useEffect } from 'react'
import { StatusBar, Text, TouchableHighlight } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { useDispatch } from 'react-redux'
import { BodyContainer, Page, PageTitleContainer, PageTitleContainerText } from './stylesComponents'
import init from './thunks/init'
import toNext from './thunks/toNext'

export interface Props {}

export interface Dispatch {}

interface State {}

export const MainScreen: FC<Props & Dispatch & NavigationInjectedProps> = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(init())
	}, [])

	const onPressItem = () => dispatch(toNext(props.navigation))

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<Page>
				<BodyContainer>
					<PageTitleContainer>
						<PageTitleContainerText>Самый главный экран</PageTitleContainerText>
					</PageTitleContainer>

					<TouchableHighlight
						style={{
							height: 45,
							width: 250,
							marginTop: 45,
							backgroundColor: 'blue',
						}}
						onPress={onPressItem}
					>
						<Text
							style={{
								color: 'white',
								textAlign: 'center',
								fontSize: 18,
							}}
						>
							На экран 2
						</Text>
					</TouchableHighlight>
				</BodyContainer>
			</Page>
		</>
	)
}
