import React, {Component} from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Estilo from '../estilo/estilo'

export default class Contador extends Component {

	state = {
		num: 0
	}

	maisUm = () => {
		this.setState({ num: this.state.num + 1 })
	}

	limpar = () => {
		this.setState({ num: 0 })
	}

	render() {
		return (
			<View style={Estilo.container}>
				<Text style={Estilo.letra}>{this.state.num}</Text>
				<TouchableHighlight 
					onPress={this.maisUm} 
					onLongPress={this.limpar}>
					<Text>Almentar/zerar</Text>
				</TouchableHighlight>
			</View>
		)
	}
}