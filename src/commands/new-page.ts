import { GluegunToolbox, strings } from 'gluegun'

module.exports = {
  name: 'new:page',
  description: 'Create a new page component',
  run: async ({
    parameters,
    template: { generate },
    print: { info, error, success },
  }: GluegunToolbox) => {
    const name = parameters.first

    const path = parameters.options.pages.path

    const lastName = strings.pascalCase(
      name.split('/')[name.split('/').length - 1]
    )

    if (!name) {
      error('Page Component name must be provided')
      info(`Example: react new:page <name>`)
      return
    }

    await generate({
      template: 'page.tsx.ejs',
      target: `${path}/${name}/index.tsx`,
      props: { name: lastName },
    })

    success(`Generated file at ${path}/${name}/index.tsx`)
  },
}
