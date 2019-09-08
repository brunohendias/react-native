import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo/estilo'
import Teste from './components/teste'
import ParImpar from './components/parImpar'

export default function App() {
	return(
		<View style={Estilo.container}>
			<Text>Bora começar</Text>
			<Teste texto="Novo componente"/>
			<ParImpar num={13}/>
		</View>
	)
}