/* eslint-disable */
import './styles/app.scss'
import { App as Application, Plugin } from 'vue'
import { setVueInstance } from './utils/config/index'

const install: Exclude<Plugin['install'], undefined> = (
  instance: Application
) => {
  setVueInstance(instance)
}

export default install
export * from './components'
