import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { FC, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import palette from '../../../../constants/palette'
import { Store } from '../../../../store'
import * as ui from '../../../../ui'
import { ProductsMainNavigatorParamList } from '../ProductsMainNavigatorStack'
import { Header } from './Header'
import { Slider } from '../../components/Slider'
import { BodyContainer, HeaderContainer, Page, SliderWrapper, TitleInputContainer } from './stylesComponents'
import cancel from './thunks/cancel'
import done from './thunks/done'
import init from './thunks/init'

export type ProductEditNavigationProp = StackNavigationProp<ProductsMainNavigatorParamList, 'ProductEdit'>

export type ProductEditRouteProp = RouteProp<ProductsMainNavigatorParamList, 'ProductEdit'>

export interface Props {
	route: ProductEditRouteProp
	navigation: ProductEditNavigationProp
}

export interface Dispatch {}

export const ProductEdit: FC<Props & Dispatch> = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(init())
	}, [])

	const {
		route: {
			params: { id },
		},
	} = props

	const {
		db: { products },
	} = useSelector((store: Store) => store)

	const { title, protein, fat, crbh, kk } = products[id]

	const [productTitle, editProductTitle] = useState(title)
	const [proteinValue, editProteinValue] = useState(protein)
	const [fatValue, editFatValue] = useState(fat)
	const [carbonValue, editCarbonValue] = useState(crbh)
	const [kkValue, editKkValue] = useState(kk)

	const header = {
		rightButton: {
			title: 'Готово',
			onPress: () =>
				dispatch(
					done(props.navigation, {
						id: id,
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
					<Header {...header} />
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
