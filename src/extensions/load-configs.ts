import { readFileSync } from 'fs'
import { GluegunToolbox } from 'gluegun'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  const { options, command } = toolbox.parameters
  const notConfigCommands = ['react', 'help', 'init']
  if (notConfigCommands.includes(command)) {
    return
  }

  const fileConfig = JSON.parse(readFileSync('./react-cli.config.json', 'utf8'))

  Object.entries(fileConfig).forEach(([key, value]) => {
    if (!options[key]) {
      options[key] = value
    }
  })
}
