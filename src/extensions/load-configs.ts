import { readFileSync } from 'fs'
import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  const { options } = toolbox.parameters
  const fileConfig = JSON.parse(readFileSync('./react.config.json', 'utf8'))

  Object.entries(fileConfig).forEach(([key, value]) => {
    if (!options[key]) {
      options[key] = value
    }
  })
}
