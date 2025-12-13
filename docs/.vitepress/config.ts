import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'ru-RU',
  cleanUrls: true,
  appearance: "force-dark",
  title: 'Milandur',
  description: 'Milandur - Minecraft Сервер',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    logo: '/logo.png',
    nav: [
      { text: 'Главное', link: '/' },
      // { text: 'О сервере', link: '/about' },
      { text: 'Магазин', link: 'https://store.milandur.ru' },
      { text: 'Правила', link: '/rules' },
      { text: 'Вики', link: '/wiki' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],
    socialLinks: [{ icon: 'discord', link: 'https://discord.gg/MaBUyCyQgP' }],

    outline: {
            label: "На этой странице",
        },
    docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },
    sidebar: {
      // Эта боковая панель отображается, когда пользователь находится в директории `guide`
      '/about/': [
        {
          text: 'О сервере',
          items: [{ text: 'О Milandur', link: '/about/' }],
        },
      ],
      '/rules/': [
        {
          text: 'Правила',
          items: [
            { text: 'О правилах', link: '/rules/' },
            { text: 'Основные принципы', link: '/rules/general-principles' },
            { text: 'Правила поведения', link: '/rules/behavior' },
            { text: 'Игровые правила', link: '/rules/gameplay' },
            { text: 'Нарушения и наказания', link: '/rules/punishments' },
            { text: 'Для персонала', link: '/rules/staff' },
            { text: 'Восстановление и апелляции', link: '/rules/appeals' },
            { text: 'Судебная система', link: '/rules/court' },
          ],
        },
      ],
      '/wiki/': [
        {
          text: 'Руководство',
          items: [
            { text: 'Начало', link: '/wiki/' },
            { text: 'Как играть?', link: '/wiki/play' },
            { text: 'Модификации/Лаунчер', link: '/wiki/modifications' },
          ],
        },
        {
          text: 'Механики и команды',
          collapsed: true,
          items: [
            { text: '❄️ Новогоднее обновление', link: '/wiki/new_year' },
            { text: 'Чат', link: '/wiki/chat' },
            // { text: 'Банк', link: '/wiki/bank' },
            { text: 'Лупа', link: '/wiki/lupa' },
            { text: 'Мяч', link: '/wiki/ball' },
            { text: 'Сито', link: '/wiki/sito' },
            { text: 'Настольные игры', link: '/wiki/boardgames' },
            { text: 'Команды', link: '/wiki/cmd' },
            { text: 'Мелкие плагины', link: '/wiki/plugins' },
          ],
        },
      ],
    },
  },
});




