import React, {Component} from 'react'
import { View, Text, TextInput} from 'react-native'
import Estilo from '../estilo/estilo'

export default class App extends Component {

	state = {
		texto: ''
	}

	alteraTexto = texto => this.setState({ texto })

	render() {
		return (
			<View style={Estilo.container}>
				<Text style={Estilo.letra}>{this.state.texto}</Text>
				<TextInput style={Estilo.input} value={this.state.texto} onChangeText={this.alteraTexto}/>
			</View>
		)
	}
}