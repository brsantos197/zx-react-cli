import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'react',
  hidden: true,
  run: async (toolbox) => {
    const { system, print } = toolbox
    const result = await system.run('react -h')
    print.info(result)
  },
}

module.exports = command
