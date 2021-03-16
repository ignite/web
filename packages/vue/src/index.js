import * as components from './components/index'
import './styles/app.scss'

const install = (instance) => {
	for (let componentKey in components) {
		instance.component(components[componentKey].name, components[componentKey])
	}
}

export default install

export * from './components'
