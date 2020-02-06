import styled from 'styled-components/native'

import palette from '../../../../constants/palette'

export const HeaderContainer = styled.View`
	background-color: ${palette.graySuperLight};
`

export const EmptySpace = styled.View`
	height: 45px;
`

export const Nav = styled.View`
	height: 51px;
	flex-direction: row;
	padding: 0 16px;
	border-color: ${palette.grayRoze};
	border-bottom-width: 1px;
`

export const LButtonContainer = styled.TouchableOpacity`
	flex: 1;
	align-items: flex-start;
	justify-content: center;
`

export const RButtonContainer = styled.TouchableOpacity`
	flex: 1;
	align-items: flex-end;
	justify-content: center;
`

export const Title = styled.Text`
	font-size: 18px;
	color: ${palette.mainDark};
`
