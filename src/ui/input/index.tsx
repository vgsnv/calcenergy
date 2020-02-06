import * as React from 'react'
import { Input, InputContainer, Label } from './stylesComponents'

export enum InputType {
  STRING,
  NUMBER,
}

export interface Props {
  label?: string
  value: string
  placeholder?: string
  inputType: InputType
}

export interface Dispatch {
  onChangeText: (text) => void
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  public render() {
    const { label, value, placeholder, inputType } = this.props
    return (
      <InputContainer>
        {inputType === InputType.NUMBER && <Label>{label}</Label>}
        <Input
          onSubmitEditing={() => console.log('submit')}
          keyboardType={
            inputType === InputType.NUMBER ? 'decimal-pad' : 'default'
          }
          returnKeyType={'done'}
          inputType={inputType}
          value={value}
          onChangeText={text => this.handleOnChangeText(text)}
          placeholder={placeholder}
        />
      </InputContainer>
    )
  }
  private handleOnChangeText = text => {
    const { onChangeText } = this.props
    onChangeText(text)
  }
}
