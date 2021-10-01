export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6156bc641569729bbb954de8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wnat1856',
                  apiId: '665a06dc-a135-4c02-a7cd-4607283fda5e'
                },
                {
                  buildHookId: '6156bc65e27ee98ce5658d6c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8pmtgwhx',
                  apiId: '2549e398-7cc7-415a-859d-ef6792f32779'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hpeurane/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8pmtgwhx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
