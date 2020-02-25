import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProductsNavigatorParamList } from '../../ProductsNavigator'
import { ProductsMainNavigatorParamList } from '../ProductsMainNavigatorStack'
import React, { FC, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '../../../../store'
import { Header } from './Header'
import {
	BigText,
	BodyContainer,
	Container,
	DetailContainer,
	DetailItem,
	DetailText,
	HeaderContainer,
	Img,
	Item,
	Left,
	ListTitle,
	ListTitleText,
	Page,
	Right,
	TilteTextContainer,
	TitleText,
} from './stylesComponents'
import init from './thunks/init'
import toCreate from './thunks/toCreate'
import toEdit from './thunks/toEdit'

const rightImg = require('../../../../assets/header_icons/Add.png')
const forward = require('../../../../assets/body/Forward.png')

export type ProductListNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<ProductsNavigatorParamList, 'ProductCreate'>,
	StackNavigationProp<ProductsMainNavigatorParamList>
>

export type ProductListRouteProp = RouteProp<ProductsMainNavigatorParamList, 'ProductList'>

export interface Props {
	route: ProductListRouteProp
	navigation: ProductListNavigationProp
}

export interface Dispatch {}

export const ProductList: FC<Props & Dispatch> = props => {
	const dispatch = useDispatch()

	const {
		db: { products },
	} = useSelector((store: Store) => store)

	const productList = products
		? Object.keys(products).map(key => {
				return products[key]
		  })
		: []

	useEffect(() => {
		dispatch(init())
	}, [])

	const keyExtractor = item => item.id

	const renderItem = ({ item }) => {
		const { id, title, kk, protein, fat, crbh } = item

		return (
			<Container onPress={() => dispatch(toEdit(props.navigation, id))}>
				<Item>
					<Left>
						<TilteTextContainer>
							<TitleText>{title}</TitleText>
						</TilteTextContainer>

						<DetailContainer>
							<DetailItem type={'protein'}>
								<DetailText>{parseFloat(protein).toFixed(1)}</DetailText>
							</DetailItem>
							<DetailItem type={'fat'}>
								<DetailText>{parseFloat(fat).toFixed(1)}</DetailText>
							</DetailItem>
							<DetailItem type={'crbh'}>
								<DetailText>{parseFloat(crbh).toFixed(1)}</DetailText>
							</DetailItem>
						</DetailContainer>
					</Left>
					<Right>
						<BigText>{parseFloat(kk).toFixed(0)}</BigText>
						<Img source={forward} />
					</Right>
				</Item>
			</Container>
		)
	}

	const header = {
		rightButton: {
			image: rightImg,
			onPress: () => dispatch(toCreate(props.navigation)),
		},
	}

	return (
		<>
			<StatusBar barStyle="dark-content" />

			<Page>
				<HeaderContainer>
					<Header {...header} navigation={props.navigation} />
				</HeaderContainer>

				<BodyContainer>
					<FlatList
						data={productList}
						keyExtractor={keyExtractor}
						renderItem={renderItem}
						ListHeaderComponent={() => (
							<ListTitle>
								<ListTitleText>{'Продукты'}</ListTitleText>
							</ListTitle>
						)}
					/>
				</BodyContainer>
			</Page>
		</>
	)
}
