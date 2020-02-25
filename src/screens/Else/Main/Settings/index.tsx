import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { FC, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'
import { ElseMainNavigatorParamList } from '../ElseMainNavigatorStack'
import { Header } from './Header'
import { BodyContainer, HeaderContainer, Page } from './stylesComponents'
import init from './thunks/init'

export type ProductEditNavigationProp = StackNavigationProp<ElseMainNavigatorParamList, 'Settings'>

export type ProductEditRouteProp = RouteProp<ElseMainNavigatorParamList, 'Settings'>

export interface Props {
	route: ProductEditRouteProp
	navigation: ProductEditNavigationProp
}

export interface Dispatch {}

export const Settings: FC<Props & Dispatch> = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(init())
	}, [])

	const header = {
		rightButton: null,
		title: null,
		leftButton: null,
	}

	return (
		<>
			<StatusBar barStyle="dark-content" />

			<Page>
				<HeaderContainer>
					<Header {...header} />
				</HeaderContainer>

				<BodyContainer></BodyContainer>
			</Page>
		</>
	)
}
