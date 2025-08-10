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
      { text: 'Systèmes', link: '/os/os' },
      { text: 'Infra', link: '/infrastructure/infrastructure' },
      { text: 'Outils', link: '/outils/outils' },
      { text: 'Support', link: '/support/support' },
      { text: 'Examples', link: '/examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'OS',
        items: [
          { text: 'Home', link: '/os/os' },
          { text: 'Linux', link: '/os/linux/linux' },
          { text: 'Windows', link: '/os/windows/windows' }
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
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      }
    ],
    //socialLinks: [
      //{ icon: 'github', link: 'https://github.com/ADereusme' }
    //],
  },
})
