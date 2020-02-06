import palette from '../../constants/palette'

import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props =>
    props.disabled ? palette.mainLight : palette.mainDark};
  color: ${palette.white};
`

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${palette.white};
  font-family: 'System';
`
