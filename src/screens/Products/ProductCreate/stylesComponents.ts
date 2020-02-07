import styled from 'styled-components/native'
import palette from '../../../constants/palette'

export const Page = styled.SafeAreaView`
	width: 100%;
	height: 100%;
	flex-direction: column;
	background-color: ${palette.graySuperLight};
`

export const HeaderContainer = styled.View`
	flex: 1;
`

export const TitleInputContainer = styled.View`
	flex: 1;
	justify-content: center;
`

export const BodyContainer = styled.View`
	flex: 6;
	flex-direction: row;
	align-items: flex-start;
	padding: 0 8px;
`

export const SliderWrapper = styled.View`
	flex: 1;
	align-items: center;
`
