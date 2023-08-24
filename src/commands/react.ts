import { readFileSync } from 'fs'
import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'react',
  run: async (toolbox) => {
    const { print, parameters } = toolbox

    print.info(parameters.options)
  },
}

module.exports = command
