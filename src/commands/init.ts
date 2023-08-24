import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'init',
  run: async (toolbox) => {
    const { print, prompt } = toolbox

    const package_json = toolbox.filesystem.read('package.json', 'json')
    if (!package_json || !package_json.dependencies['react']) {
      print.error('This directory is not a react project')
      return
    }
    const alreadyConfigFile = toolbox.filesystem.read('react-cli.config.json')

    if (!!alreadyConfigFile) {
      const { overwriteConfigFile } = await prompt.ask([
        {
          type: 'confirm',
          name: 'overwriteConfigFile',
          message:
            'There is already a settings file in your project would you like to overwrite it?',
          initial: false,
        },
      ])
      if (!overwriteConfigFile) {
        return
      }
    }

    const data = {
      components: {
        path: 'components/',
      },
      pages: {
        path: 'pages/',
      },
      hooks: {
        path: 'hooks/',
      },
    }

    toolbox.filesystem.write('./react-cli.config.json', data, { jsonIndent: 2 })

    print.success('Config file created successfully')
  },
}

module.exports = command
