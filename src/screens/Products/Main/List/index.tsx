import React, { FC, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { NavigationInjectedProps } from 'react-navigation'
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
	Img,
	Item,
	Left,
	Page,
	Right,
	TilteTextContainer,
	TitleText,
	ListTitle,
	ListTitleText,
} from './stylesComponents'
import init from './thunks/init'
import toCreate from './thunks/toCreate'
import toEdit from './thunks/toEdit'

const rightImg = require('../../../../assets/header_icons/Add.png')
const forward = require('../../../../assets/body/Forward.png')

export interface Props {}

export interface Dispatch {}

export const ProductList: FC<Props & Dispatch & NavigationInjectedProps> = props => {
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

	const onPressItem = () => dispatch(toCreate(props.navigation, 1))

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
			onPress: onPressItem,
		},
	}

	return (
		<>
			<StatusBar barStyle="dark-content" />

			<Header {...header} navigation={props.navigation} />
			<Page>
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
