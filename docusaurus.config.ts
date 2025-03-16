import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'HuggingPaper',
  tagline: '开源 AI 论文学习平台',
  favicon: 'img/favicon.ico',

  url: 'https://huggingpaper.com',
  baseUrl: '/',

  organizationName: 'huggingpaper',
  projectName: 'huggingpaper',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/huggingpaper/huggingpaper/tree/main/',
          routeBasePath: '/',
          breadcrumbs: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/huggingpaper/huggingpaper/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            'katex/dist/katex.min.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  staticDirectories: ['static'],

  plugins: [
    async function imageOptimizer(context, options) {
      return {
        name: 'image-optimizer',
        configureWebpack(config, isServer, utils) {
          return {
            module: {
              rules: [
                {
                  test: /\.(gif|png|jpe?g|svg)$/i,
                  use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192,
                        name: 'assets/images/[name].[hash:8].[ext]',
                      },
                    },
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        mozjpeg: {
                          progressive: true,
                          quality: 65,
                        },
                        optipng: {
                          enabled: true,
                        },
                        pngquant: {
                          quality: [0.65, 0.90],
                          speed: 4,
                        },
                        gifsicle: {
                          interlaced: false,
                        },
                        webp: {
                          quality: 75,
                        },
                      },
                    },
                  ],
                },
              ],
            },
          };
        },
      };
    },
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#3578e5',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.svg',
            color: '#3578e5',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://huggingpaper.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'dns-prefetch',
        href: 'https://huggingpaper.com',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '开源 AI 论文学习平台，让每个人都能轻松学习和理解 AI 论文',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'AI, 机器学习, 深度学习, 论文, 学习平台, HuggingPaper, 人工智能',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'HuggingPaper - 开源 AI 论文学习平台',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: '开源 AI 论文学习平台，让每个人都能轻松学习和理解 AI 论文',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://huggingpaper.com/img/huggingpaper-social-card.jpg',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: 'HuggingPaper - 开源 AI 论文学习平台',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content: '开源 AI 论文学习平台，让每个人都能轻松学习和理解 AI 论文',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://huggingpaper.com/img/huggingpaper-social-card.jpg',
      },
    },
  ],

  scripts: [
    {
      src: '/js/custom.js',
      async: true,
      defer: true,
    },
  ],

  themeConfig: {
    metadata: [
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'google-site-verification',
        content: 'YOUR_GOOGLE_VERIFICATION_CODE',
      },
    ],
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'huggingpaper',
      contextualSearch: true,
      searchParameters: {
        facetFilters: ['language:zh-Hans'],
      },
    },
    image: 'img/huggingpaper-social-card.jpg',
    navbar: {
      title: 'HuggingPaper',
      logo: {
        alt: 'HuggingPaper Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'paperSidebar',
          position: 'left',
          label: '论文解读',
        },
        {
          type: 'docSidebar',
          sidebarId: 'conceptSidebar',
          position: 'left',
          label: '核心概念',
        },
        {to: '/blog', label: '技术博客', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/huggingpaper/huggingpaper',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '论文解读',
              to: '/papers',
            },
            {
              label: '核心概念',
              to: '/concepts',
            },
            {
              label: '技术博客',
              to: '/blog',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/huggingpaper/huggingpaper/discussions',
            },
            {
              label: '贡献指南',
              to: '/contributing',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/huggingpaper/huggingpaper',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} HuggingPaper. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
