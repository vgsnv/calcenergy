import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { FC, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'
import palette from '../../../constants/palette'
import * as ui from '../../../ui'
import { ProductsNavigatorParamList } from '../ProductsNavigator'
import { Header } from './Header'
import { Slider } from '../components/Slider'
import { BodyContainer, HeaderContainer, Page, SliderWrapper, TitleInputContainer } from './stylesComponents'
import cancel from './thunks/cancel'
import done from './thunks/done'
import init from './thunks/init'
const uuidv1 = require('uuid/v1')

export type ProductCreateNavigationProp = StackNavigationProp<ProductsNavigatorParamList, 'ProductCreate'>

export type ProductCreateRouteProp = RouteProp<ProductsNavigatorParamList, 'ProductCreate'>

export interface Props {
	route: ProductCreateRouteProp
	navigation: ProductCreateNavigationProp
}

export interface Dispatch {}

export const ProductCreate: FC<Props & Dispatch> = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(init())
	}, [])

	const [productTitle, editProductTitle] = useState('')
	const [proteinValue, editProteinValue] = useState(0)
	const [fatValue, editFatValue] = useState(0)
	const [carbonValue, editCarbonValue] = useState(0)
	const [kkValue, editKkValue] = useState(0)

	const header = {
		rightButton: {
			title: 'Готово',
			onPress: () =>
				dispatch(
					done(props.navigation, {
						id: uuidv1(),
						title: productTitle,
						kk: kkValue,
						protein: proteinValue,
						fat: fatValue,
						crbh: carbonValue,
					})
				),
		},

		leftButton: {
			title: 'Отмена',
			onPress: () => dispatch(cancel(props.navigation)),
		},
	}

	const handleOnChangeTITLE = (value: React.SetStateAction<string>) => editProductTitle(value)

	const titleInput = {
		placeholder: 'Название',
		onChangeText: handleOnChangeTITLE,
		value: productTitle,
		inputType: ui.InputType.STRING,
	}

	return (
		<>
			<StatusBar barStyle="dark-content" />

			<Page>
				<HeaderContainer>
					<Header {...header} navigation={props.navigation} />
				</HeaderContainer>

				<TitleInputContainer>
					<ui.Input {...titleInput} />
				</TitleInputContainer>

				<BodyContainer>
					<SliderWrapper>
						<Slider
							value={proteinValue}
							labelName={'Белки'}
							minValue={0}
							maxValue={40}
							onChangeValue={value => editProteinValue(value)}
							emptyColor={palette.nutrients.proteinLight}
							fillColor={palette.nutrients.protein}
						/>
					</SliderWrapper>

					<SliderWrapper>
						<Slider
							value={fatValue}
							labelName={'Жиры'}
							minValue={0}
							maxValue={100}
							onChangeValue={value => editFatValue(value)}
							emptyColor={palette.nutrients.fatLight}
							fillColor={palette.nutrients.fat}
						/>
					</SliderWrapper>

					<SliderWrapper>
						<Slider
							value={carbonValue}
							labelName={'Углеводы'}
							minValue={0}
							maxValue={100}
							onChangeValue={value => editCarbonValue(value)}
							emptyColor={palette.nutrients.crbhLight}
							fillColor={palette.nutrients.crbh}
						/>
					</SliderWrapper>

					<SliderWrapper>
						<Slider
							value={kkValue}
							labelName={'ККалории'}
							minValue={0}
							maxValue={500}
							onChangeValue={value => editKkValue(value)}
							emptyColor={palette.nutrients.kkLight}
							fillColor={palette.nutrients.kk}
						/>
					</SliderWrapper>
				</BodyContainer>
			</Page>
		</>
	)
}
