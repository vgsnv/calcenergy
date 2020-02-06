import palette from '../../constants/palette'

import styled from 'styled-components/native'

import { InputType } from './index'

export const InputContainer = styled.View`
  flex-direction: row;
  padding: 12px 26px;
  align-items: center;
`

export const Label = styled.Text`
  flex: 3;
  font-size: 16px;
  color: ${palette.black};
  text-align: left;
  text-transform: capitalize;
`

interface TextInput {
  inputType: InputType
}

export const Input = styled.TextInput<TextInput>`
  flex: 1;
  padding: 14px 16px;

  font-size: 16px;
  text-align: ${props =>
    props.inputType === InputType.STRING ? 'left' : 'right'};
  border-radius: 4px;
  border-color: ${palette.grayText};
  border-bottom-width: 1;
`
