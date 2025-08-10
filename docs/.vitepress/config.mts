import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NoteBook",
  description: "Documentation IT",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Systèmes', link: '/systemes/systemes' },
      { text: 'Infra', link: '/infrastructure/infrastructure' },
      { text: 'Outils', link: '/outils/outils' },
      { text: 'Support', link: '/support/support' },
      { text: 'Examples', link: '/Examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Systèmes',
        items: [
          { text: 'Home', link: '/systemes/systemes' },
          { text: 'Linux', link: '/systemes/linux/linux' },
          { text: 'Windows', link: '/systemes/windows/windows' }
        ]
      },
      {
        text: 'Outils & Logiciels',
        items: [
          { text: 'Home', link: '/outils/outils' },
          { text: 'GLPI', link: '/outils/glpi/glpi' },
          { text: 'ITIL', link: '/outils/itil/itil' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/Examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/Examples/api-examples' }
        ]
      }
    ],
    //socialLinks: [
      //{ icon: 'github', link: 'https://github.com/ADereusme' }
    //],
  },
})
