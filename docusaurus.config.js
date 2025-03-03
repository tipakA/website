module.exports = {
  title: 'Spectacles',
  tagline: 'Discord bots at scale',
  url: 'https://spec.pleb.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'spec-tacles', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Spectacles',
      logo: {
        alt: 'Spectacles',
        src: 'img/black-padding.svg',
        srcDark: 'img/white-padding.svg',
        href: '/',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/spec-tacles',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/zU3vha6',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/spectacles',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/spec-tacles',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Will Nelson. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['toml', 'bash'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/spec-tacles/website/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/spec-tacles/website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
