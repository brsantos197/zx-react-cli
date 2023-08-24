import { GluegunToolbox, strings } from 'gluegun'

module.exports = {
  name: 'new:component',
  description: 'Create a new component',
  run: async ({
    parameters,
    template: { generate },
    print: { info, error, success },
  }: GluegunToolbox) => {
    let name = parameters.first

    if (!name) {
      error('Component name must be provided')
      info(`Example: react new:component <name>`)
      return
    }

    name = strings.pascalCase(name)

    await generate({
      template: 'component.tsx.ejs',
      target: `components/${name}/index.tsx`,
      props: { name },
    })

    success(`Generated file at components/${name}/index.tsx`)
  },
}
