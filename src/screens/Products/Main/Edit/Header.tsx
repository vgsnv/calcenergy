import React, { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { useDispatch } from 'react-redux'
import done from './thunks/done'

export interface Props {}

export interface Dispatch {}

const Header: FC<Props & Dispatch & NavigationInjectedProps> = props => {
	const dispatch = useDispatch()

	return (
		<>
			<View
				style={{
					flexDirection: 'row',
					height: 80,
					width: 80,
					marginTop: 20,
					backgroundColor: 'red',
				}}
			>
				<TouchableOpacity
					style={{
						height: '100%',
						width: '100%',
						justifyContent: 'center',
					}}
					onPress={() => dispatch(done(props.navigation))}
				>
					<Text style={{ textAlign: 'center' }}>Назад</Text>
				</TouchableOpacity>
			</View>
		</>
	)
}

export { Header }
