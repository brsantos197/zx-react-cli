import { GluegunToolbox, strings } from 'gluegun'

module.exports = {
  name: 'new:hook',
  description: 'Create a new page component',
  run: async ({
    parameters,
    template: { generate },
    print: { info, error, success },
  }: GluegunToolbox) => {
    let name = parameters.first

    if (!name) {
      error('Hook name must be provided')
      info(`Example: react new:hook <name>`)
      return
    }

    name = strings.pascalCase(name)

    await generate({
      template: 'hook.ts.ejs',
      target: `hooks/${name}/index.tsx`,
      props: { name },
    })

    success(`Generated file at hooks/${name}/index.tsx`)
  },
}
