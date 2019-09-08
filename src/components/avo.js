import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo/estilo'

const estilo = { style: Estilo.letra }

const Filho = props => 
	<View>
		<Text {...estilo} >filho: {props.nome} {props.sobrenome} </Text>
	</View>

const Pai = props => 
	<View>
		<Text {...estilo} >Pai: {props.nome} {props.sobrenome} </Text>
		{props.children}
	</View>

const Avo = props =>
	<View style={Estilo.container}>
		<Text {...estilo} >Avo: {props.nome} {props.sobrenome} </Text>
		<Pai nome="Reni" sobrenome={props.sobrenome} >
			<Filho nome="Bruno"/>
			<Filho nome="Evelyn"/>
		</Pai>
		<Pai {...props} nome="fernando">
			<Filho nome="Isadora" />
			<Filho nome="Leticia" />
		</Pai>
	</View>

export default Avo