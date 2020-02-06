import React, { FC, useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { useDispatch } from 'react-redux'
import palette from '../../../constants/palette'
import * as ui from '../../../ui'
import { Header } from './Header'
import Slider from './Slider'
import { BodyContainer, Page } from './stylesComponents'
import cancel from './thunks/cancel'
import done from './thunks/done'
import init from './thunks/init'

export interface Props {}

export interface Dispatch {}

const validateNutrientValue = (minValue, value, maxValue) => minValue <= value && value < +maxValue

const ProductCreate: FC<Props & Dispatch & NavigationInjectedProps> = props => {
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

			<Header {...header} navigation={props.navigation} />
			<Page>
				<BodyContainer>
					<ui.Input {...titleInput} />
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							paddingLeft: 8,
							paddingRight: 8,
						}}
					>
						<Slider
							value={proteinValue}
							labelName={'Белки'}
							minValue={0}
							maxValue={40}
							onChangeValue={value => {
								if (validateNutrientValue(0, value, 40)) {
									editProteinValue(value)
								}
							}}
							emptyColor={palette.nutrients.proteinLight}
							backColor={palette.nutrients.protein}
						/>

						<Slider
							value={fatValue}
							labelName={'Жиры'}
							minValue={0}
							maxValue={100}
							onChangeValue={value => {
								if (validateNutrientValue(0, value, 100)) {
									editFatValue(value)
								}
							}}
							emptyColor={palette.nutrients.fatLight}
							backColor={palette.nutrients.fat}
						/>

						<Slider
							value={carbonValue}
							labelName={'Углеводы'}
							minValue={0}
							maxValue={100}
							onChangeValue={value => {
								if (validateNutrientValue(0, value, 100)) {
									editCarbonValue(value)
								}
							}}
							emptyColor={palette.nutrients.crbhLight}
							backColor={palette.nutrients.crbh}
						/>

						<Slider
							value={kkValue}
							labelName={'Килокалории'}
							minValue={0}
							maxValue={500}
							onChangeValue={value => {
								if (validateNutrientValue(0, value, 100)) {
									editKkValue(value)
								}
							}}
							emptyColor={palette.nutrients.kkLight}
							backColor={palette.nutrients.kk}
						/>
					</View>
				</BodyContainer>
			</Page>
		</>
	)
}

export { ProductCreate }
