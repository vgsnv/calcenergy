import styled from 'styled-components/native'
import palette from '../../../../constants/palette'

export const Page = styled.SafeAreaView`
	width: 100%;
	height: 100%;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	background-color: ${palette.white};
`

export const BodyContainer = styled.View`
	flex: 1 0 auto;
	align-items: center;
`

export const PageTitleContainer = styled.View`
	background-color: #ccc;
	height: 60px;
	padding-top: 37px;
`
export const PageTitleContainerText = styled.Text`
	font-size: 16px;
	font-weight: 600;
	line-height: 21px;
	letter-spacing: 0.32;
`