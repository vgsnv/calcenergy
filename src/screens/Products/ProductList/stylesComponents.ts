import styled from 'styled-components/native'
import palette from '../../../constants/palette'

export const Page = styled.SafeAreaView`
	width: 100%;
	height: 100%;
`

export const BodyContainer = styled.View`
	flex: 1;
	flex-direction: column;
`

export const Container = styled.TouchableOpacity`
	padding: 0 0 0 34px;
	height: 88px;
`

export const Item = styled.View`
	flex: 1;
	flex-direction: row;
	border-style: solid;
	border-color: #eff0f2;
	border-bottom-width: 1px;
`

export const Left = styled.View`
	flex: 2;
	flex-direction: column;
`

export const TilteTextContainer = styled.View`
	flex: 1;
	justify-content: center;
`

export const TitleText = styled.Text`
	font-size: 26px;
	font-weight: 600;
	color: ${palette.gray};
`

export const DetailContainer = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
`

interface DetailItem {
	type: string
}

export const DetailItem = styled.View<DetailItem>`
	height: 18px;
	width: 44px;
	background-color: ${props => palette.nutrients[props.type]};
	border-radius: 4px;
	margin-right: 10px;
	justify-content: center;
`

export const DetailText = styled.Text`
	font-size: 12px;
	text-align: center;
	color: ${palette.grayLight};
`

export const Right = styled.View`
	flex: 1;
	align-self: center;
	justify-content: center;
	padding-right: 40px;
`

export const BigText = styled.Text`
	font-size: 37px;
	text-align: right;
	font-weight: 700;
	letter-spacing: -0.6px;

	color: ${palette.grayText};
`

export const Img = styled.Image`
	position: absolute;
	align-self: flex-end;
	width: 52px;
	height: 52px;
`
