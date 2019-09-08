import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo/estilo'

export default function App(props) {
	return(
		<View style={Estilo.container}>
			<Text style={Estilo.letra}>{props.texto}</Text>
		</View>
	)
}