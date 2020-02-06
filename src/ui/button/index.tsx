import * as React from 'react'
import { Button, ButtonText } from './stylesComponents'

export interface Props {
  name: string
  disabled?: boolean
  activeOpacity: number
}

export interface Dispatch {
  onPress: () => void
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch,
  State
> {
  public render() {
    const { name, disabled, activeOpacity } = this.props

    return (
      <Button
        activeOpacity={activeOpacity}
        disabled={disabled}
        onPress={this.handleClick}
      >
        <ButtonText>{name}</ButtonText>
      </Button>
    )
  }
  private handleClick = () => {
    const { onPress } = this.props

    onPress()
  }
}
