import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Estilo from '../estilo/estilo'

const Entrada = props => 
	<View>
		<TextInput style={Estilo.input} value={props.texto} onChangeText={props.mudarText} />
	</View>

export default class sincronizado extends Component {

	state = { 
		texto: ''
	}

	alterarTexto = texto => {
		this.setState({ texto })
	}

	render() {
		return ( 
			<View style={Estilo.container}>
				<Text style={Estilo.letra}> {this.state.texto} </Text>
				<Entrada texto={this.state.texto} mudarText={this.alterarTexto} />
			</View>
		)
	}

}