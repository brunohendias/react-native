import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Teste from './components/teste'
import ParImpar from './components/parImpar'
import Contador from './components/contador'
import Evento from './components/evento'
import Avo from './components/avo'

export default createDrawerNavigator({
	Avo: {
		screen: () => <Avo nome="Joao" sobrenome="Dias"/>
	},
	Evento: {
		screen: () => <Evento />
	},
	Contador: {
		screen: () => <Contador />
	},
	Teste: {
		screen: () => <Teste texto="Novo componente" />
	},
	ParImpar: {
		screen: () => <ParImpar num={20} />, navigationOption: {title: 'Par & Impar'}
	}
}, { drawerWidth: 300 }) 