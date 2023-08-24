import { writeFile } from 'fs'
import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'init',
  run: async (toolbox) => {
    const { print } = toolbox

    const data = {
      type: 'test',
    }

    toolbox.filesystem.write('./react-cli.config.json', data, { jsonIndent: 2 })

    // writeFile('react-cli.config.json', JSON.stringify(data, null, 2), (err) => {
    //   if (err) {
    //     console.error(err)
    //   }
    // })

    print.info('')
  },
}

module.exports = command
