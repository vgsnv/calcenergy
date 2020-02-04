import React, { FC, useEffect } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { useDispatch } from 'react-redux'
import { BodyContainer, Page, PageTitleContainer, PageTitleContainerText } from './stylesComponents'
import done from './thunks/done'
import init from './thunks/init'

export interface Props {}

export interface Dispatch {}

interface State {}

const Screen02Screen: FC<Props & Dispatch & NavigationInjectedProps> = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(init())
	}, [])

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<View
				style={{
					flexDirection: 'row',
					height: 80,
					width: 80,
					marginTop: 20,
					backgroundColor: 'red',
				}}
			>
				<TouchableOpacity
					style={{
						height: '100%',
						width: '100%',
						justifyContent: 'center',
					}}
					onPress={() => dispatch(done(props.navigation))}
				>
					<Text style={{ textAlign: 'center' }}>Назад</Text>
				</TouchableOpacity>
			</View>
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
