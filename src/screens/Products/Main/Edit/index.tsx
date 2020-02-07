import React, { FC, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { useDispatch } from 'react-redux'
import { Slider } from '../../../../ui'
import { Header } from './Header'
import { BodyContainer, Page, PageTitleContainer, PageTitleContainerText } from './stylesComponents'
import init from './thunks/init'

export interface Props {}

export interface Dispatch {}

const ProductEdit: FC<Props & Dispatch & NavigationInjectedProps> = props => {
	const dispatch = useDispatch()

	const [val, editVal] = useState(0)

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

					<Slider value={val} onChangeValue={val => editVal(val)} />
				</BodyContainer>
			</Page>
		</>
	)
}

export { ProductEdit }
