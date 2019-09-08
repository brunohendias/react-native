import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo/estilo'

export default function App(props) {
	return(
		<View style={Estilo.container}>
			{
				props.num % 2 === 0 ? <Text style={Estilo.letra}>Numero {props.num} é: par</Text> : <Text style={Estilo.letra}>Numero {props.num} é: impar</Text>
			}
		</View>
	)
}