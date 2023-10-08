import { GluegunToolbox, strings } from 'gluegun'

module.exports = {
  name: 'new:hook',
  description: 'Create a new page component',
  run: async ({
    parameters,
    template: { generate },
    print: { info, error, success },
  }: GluegunToolbox) => {
    const name = parameters.first

    const path = parameters.options.hooks.path

    if (!name) {
      error('Hook name must be provided')
      info(`Example: react new:hook <name>`)
      return
    }

    const lastName = strings.pascalCase(
      name.split('/')[name.split('/').length - 1]
    )

    await generate({
      template: 'hook.ts.ejs',
      target: `${path}/use${name}.ts`,
      props: { name: lastName },
    })

    success(`Generated file at ${path}/use${name}.ts`)
  },
}
