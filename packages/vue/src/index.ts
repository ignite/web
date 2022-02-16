/* eslint-disable */
// import './styles/app.scss'
import { App as Application, Plugin } from 'vue'

import * as components from './components/index'
import { setVueInstance } from './utils/config/index'
import { registerComponent } from './utils/plugins/index'

import { Buffer } from 'buffer'

// @ts-ignore
globalThis['Buffer'] = Buffer

const install: Exclude<Plugin['install'], undefined> = (
  instance: Application
) => {
  setVueInstance(instance)
  for (const componentKey in components) {
    registerComponent(instance, (components as any)[componentKey])
  }
}

export default install
export * from './components'
