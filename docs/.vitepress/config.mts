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
      { text: 'OS', link: '/OS/os' },
      { text: 'Examples', link: '/Examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'OS',
        items: [
          { text: 'Home', link: '/OS/os' },
          { text: 'Linux', link: '/OS/Linux/linux' },
          { text: 'Windows', link: '/OS/Windows/windows' }
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ADereusme' }
    ],
  },
})
