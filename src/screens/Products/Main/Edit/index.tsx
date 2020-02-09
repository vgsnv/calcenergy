import React, { FC, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import { useDispatch, useSelector } from 'react-redux'
import palette from '../../../../constants/palette'
import { Store } from '../../../../store'
import * as ui from '../../../../ui'
import { Header } from './Header'
import { Slider } from './Slider'
import { BodyContainer, HeaderContainer, Page, SliderWrapper, TitleInputContainer } from './stylesComponents'
import cancel from './thunks/cancel'
import done from './thunks/done'
import init from './thunks/init'

type Params = { id: string }

type ScreenProps = {}

export interface Props {}

export interface Dispatch {}

const ProductEdit: FC<Props & Dispatch & NavigationStackScreenProps<Params, ScreenProps>> = props => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(init())
	}, [])

	const {
		navigation: {
			state: {
				params: { id },
			},
		},
	} = props

	const {
		db: { products },
	} = useSelector((store: Store) => store)

	const product = products[id]

	const [productTitle, editProductTitle] = useState(product.title)
	const [proteinValue, editProteinValue] = useState(product.protein)
	const [fatValue, editFatValue] = useState(product.fat)
	const [carbonValue, editCarbonValue] = useState(product.crbh)
	const [kkValue, editKkValue] = useState(product.kk)

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

export { ProductEdit }
