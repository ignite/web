import * as components from './components/index'
import './styles/app.scss'

const install = (instance) => {
	for (let componentKey in components) {
		instance.component(components[componentKey].name, components[componentKey])
	}

	instance.directive('click-outside', {
		beforeMount(el, binding) {
			el.clickOutsideEvent = function (event) {
				if (!(el === event.target || el.contains(event.target))) {
					binding.value(event, el)
				}
			}
			document.body.addEventListener('click', el.clickOutsideEvent)
		},
		unmounted(el) {
			document.body.removeEventListener('click', el.clickOutsideEvent)
		}
	})
}

export default install

export * from './components'
