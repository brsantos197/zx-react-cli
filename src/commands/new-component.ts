import { GluegunToolbox, strings } from 'gluegun'

module.exports = {
  name: 'new:component',
  description: 'Create a new component',
  run: async ({
    parameters,
    template: { generate },
    print: { info, error, success },
  }: GluegunToolbox) => {
    const name = parameters.first

    const path = parameters.options.components.path

    if (!name) {
      error('Component name must be provided')
      info(`Example: react new:component <name>`)
      return
    }

    const lastName = strings.pascalCase(
      name.split('/')[name.split('/').length - 1]
    )

    await generate({
      template: 'component.tsx.ejs',
      target: `${path}/${name}/index.tsx`,
      props: { name: lastName },
    })

    success(`Generated file at ${path}/${name}/index.tsx`)
  },
}
