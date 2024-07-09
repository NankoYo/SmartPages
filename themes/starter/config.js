/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'SmartPage', // 英雄区文字
  STARTER_HERO_TITLE_2: 'SmartPage is an innovative web project, aiming to provide users with a simple but powerful way to create static websites. By combining natural language processing and graphics technology, NankoYo is able to generate complex web page layouts and designs from the simple text descriptions provided by users.', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:'', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: 'https://cdn.nankoyo.com/public/cache/star/images/hero/hero-image.png', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/signin',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/signup',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'characteristic', // 特性
  STARTER_FEATURE_TEXT_1: 'Key Features', // 特性
  STARTER_FEATURE_TEXT_2:
    'Easily create personalized static websites using natural language processing and graphics techniques.', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Natural language processing techniques', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'Translating user descriptions into web design through natural language understanding。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn more', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://nankoyo.com/feature-1', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Graphics technology', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'Create beautiful web page layouts and designs using advanced graphics techniques.', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn more', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://nankoyo.com/feature-2', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Easy-to-use interface', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'Provides an intuitive and simple interface that makes it easy for users to create websites without programming knowledge.', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn more', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://nankoyo.com/feature-3', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Fully customizable options', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'Allows users to customize and adjust the generated web pages according to their needs, enabling personalized design.', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn more', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://nankoyo.com/feature-4', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'A lightweight and practical solution for building websites',
  STARTER_ABOUT_TEXT:
    'SmartPage is a simple yet powerful web page generator designed to make it easy for anyone to create impressive websites without programming knowledge.<br /> <br />We combine natural language processing and graphics technology to provide users with an intuitive and flexible web design experience.Whether you are an individual user or a corporate client, NanKoYo can meet your needs and make web design easy, intuitive and creative.',
  STARTER_ABOUT_BUTTON_TEXT: 'Learn more',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: 'https://cdn.nankoyo.com/public/cache/star/images/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: 'https://cdn.nankoyo.com/public/cache/star/images/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '100,000＋',
  STARTER_ABOUT_TIPS_2: 'end customer',
  STARTER_ABOUT_TIPS_3: 'Using our products',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: 'price list',
  STARTER_PRICING_TEXT_1: 'Great pricing plan.',
  STARTER_PRICING_TEXT_2:
    'We have developed a flexible payment model that you can choose from on demand.',

  STARTER_PRICING_1_TITLE: 'Basic Package',
  STARTER_PRICING_1_PRICE: '99',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: 'year',
  STARTER_PRICING_1_HEADER: 'function point',
  STARTER_PRICING_1_FEATURES: 'Suitable for individual users or small teams, natural language processing technology, basic graphical support, easy-to-use interface, 1 customized domain name, basic technical support', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: 'Buy Now',
  STARTER_PRICING_1_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  STARTER_PRICING_2_TAG: 'testimonials',
  STARTER_PRICING_2_TITLE: 'Professional Package',
  STARTER_PRICING_2_PRICE: '199',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: 'year',
  STARTER_PRICING_2_HEADER: 'function point',
  STARTER_PRICING_2_FEATURES: 'Ideal for small to medium sized businesses or entrepreneurs, natural language processing technology, full graphical tech support, easy to use interface, 3 custom domains, customization options, priority tech support', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: 'Buy Now',
  STARTER_PRICING_2_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  STARTER_PRICING_3_TITLE: 'Corporate Packages',
  STARTER_PRICING_3_PRICE: '499',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: 'year',
  STARTER_PRICING_3_HEADER: 'function point',
  STARTER_PRICING_3_FEATURES: 'Ideal for large enterprises or users requiring advanced customization, natural language processing technology, full graphical technical support, easy-to-use interface, unlimited customizable domain names, customization options, 24/7 priority technical support, SLA service level agreements', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: 'Buy Now',
  STARTER_PRICING_3_BUTTON_URL:
    'https://qm.qq.com/q/hawob9Eyw8',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'User feedback',
  STARTER_TESTIMONIALS_TEXT_1: 'What our users say',
  STARTER_TESTIMONIALS_TEXT_2:
    'Listening to you to build a better tomorrow',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'SmartPage is truly a godsend easy to use and saves me tons of time!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-01.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Alice Wang',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'product manager',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'SmartPage is one of the easiest and most effective tools Iove ever used and has greatly improved my productivity!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-02.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Michael Smith',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'webmaster',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'The stability and reliability of SmartPage gives me peace of mind without having to worry about website crashes or data loss!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-03.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Emily Johnson',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Web Developer',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'The team at SmartPage has been very helpful, responding and addressing my questions and needs in a timely manner, making me feel very satisfied and at ease!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-04.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'David Brown',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'system administrator',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'SmartPage user feedback display feature has helped me better understand user needs and provided valuable input for product improvement! ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-05.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Sarah Wilson',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'market analyst',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'I cant say enough about SmartPages User Feedback Showcase, which allows me to visualize users needs and opinions and provides an important reference for product improvement!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/testimonials/author-06.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'John Lee',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'project manager',
      STARTER_TESTIMONIALS_ITEM_URL: '/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'Frequently Asked Questions',
  STARTER_FAQ_TEXT_1: 'Have any questions?Check here.',
  STARTER_FAQ_TEXT_2: 'We have collected common user queries',

  STARTER_FAQ_1_QUESTION: 'What is SmartPage?',
  STARTER_FAQ_1_ANSWER:
    'SmartPage is a tool for creating static websites that converts website content into plain HTML, CSS and JavaScript files to improve website loading speed and security.',

  STARTER_FAQ_2_QUESTION: 'How is SmartPage different from a dynamic website?',
  STARTER_FAQ_2_ANSWER:
    'Instead of dynamically generating content on every request, SmartPage-generated sites generate all pages at build time, as opposed to dynamic sites.This reduces server load and improves site performance.',

  STARTER_FAQ_3_QUESTION: 'What types of websites is SmartPage suitable for?',
  STARTER_FAQ_3_ANSWER:
    'SmartPage is suitable for many types of websites, especially for sites with infrequently updated content or sites that do not require dynamic interaction, such as blogs, document sites and official corporate websites.',

  STARTER_FAQ_4_QUESTION: 'What are the benefits of SmartPage?',
  STARTER_FAQ_4_ANSWER:
    'SmartPage offers a number of advantages, including faster page loads, lower server costs, better security, and a simpler deployment process.In addition, it is better able to handle challenges such as high traffic and DDoS attacks.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Team Members',
  STARTER_TEAM_TEXT_1: 'Our Technical Team',
  STARTER_TEAM_TEXT_2:
    'The NanKoYo developer team is a passionate and creative team dedicated to developing innovative static website generators.They specialize in providing easy-to-use, efficient and reliable tools that help users quickly build high-performance static websites.',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://cdn.nankoyo.com/public/cache/star/images/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Emily Zhang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Data Analyst'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Andrew Li',
      STARTER_TEAM_ITEM_DESCRIPTION: 'web designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jason Liu',
      STARTER_TEAM_ITEM_DESCRIPTION: 'software engineer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-04.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Sophia Chen',
      STARTER_TEAM_ITEM_DESCRIPTION: 'User Experience Designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-05.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Kevin Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Front-end Development Engineer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-06.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jessica Wu',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Backend Development Engineer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-07.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Brian Zhao',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Mobile Application Designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-08.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Alice Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'UI/UX Designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-09.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Daniel Lee',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Database Administrator'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-10.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Angela Xu',
      STARTER_TEAM_ITEM_DESCRIPTION: 'system architect'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-11.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Steven Chen',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Network Security Specialist'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-12.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Cindy Zhou',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Natural Language Processing Engineer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-13.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eric Huang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Artificial Intelligence Engineer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-14.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Michelle Liu',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Quality Assurance Engineer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-15.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Tony Guo',
      STARTER_TEAM_ITEM_DESCRIPTION: 'project manager'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-16.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Grace Lin',
      STARTER_TEAM_ITEM_DESCRIPTION: 'webmaster'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-17.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Michael Zhang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'data scientist'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-18.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jennifer Wang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Cloud Computing Engineer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-19.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Alex Wu',
      STARTER_TEAM_ITEM_DESCRIPTION: 'front-end designer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.nankoyo.com/public/cache/star/images/team/team-20.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Lucy Chen',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Software Test Engineer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Our Blog',
  STARTER_BLOG_COUNT: 5, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Recent News',
  STARTER_BLOG_TEXT_2:
    'Some of the latest news about NanKoYo will be posted here, including new movements, new future plans, and features of new functionality',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact Us',
  STARTER_CONTACT_TEXT: 'Tell us about the problem you are experiencing',
  STARTER_CONTACT_LOCATION_TITLE: 'Our Location',
  STARTER_CONTACT_LOCATION_TEXT: 'China，Hongkong',
  STARTER_CONTACT_EMAIL_TITLE: 'How can we help you?',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@nankoyo.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/feedback-yjrioz', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'SmartPage is an innovative web project designed to provide users with a simple yet powerful way to create static websites.By combining natural language processing and graphics technologies, NankoYo is able to generate complex web page layouts and designs from simple text descriptions provided by the user.The goal of this project is to make website creation easier and more intuitive enabling anyone to design impressive websites without programming knowledge.SmartPage brings users creativity to life, giving them a whole new experience in web development.',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Contact Us',
      LINK_GROUP: [
        { TITLE:'WeChat', URL: 'https://html.nankoyo.com/wechat.html' },
        { TITLE:'Tiktok', URL: 'https://html.nankoyo.com/tiktok.html' },
        {
          TITLE: 'Kwai',
          URL:'https://html.nankoyo.com/kwai.html'
        },
        {
          TITLE: 'Bilibili',
          URL:'https://html.nankoyo.com/bilibili.html'
        },
        {
          TITLE:'Weibo',
          URL:'https://html.nankoyo.com/weibo.html'
        }
      ]
    },
    {
      TITLE: 'Help Support',
      LINK_GROUP: [
        {
          TITLE:'operating document',
          URL:'https://nankoyo.com/operating'
        },
        {
          TITLE:'Help Support',
          URL:'https://nankoyo.com/how-to-question'
        },
        {
          TITLE:'Cookie Protocol',
          URL:'https://nankoyo.com/Cookie_Policy'
        },
        {
          TITLE:'Deployment Guide',
          URL:'https://nankoyo.com/deploy-nankoyo-next'
        },
        {
          TITLE:'Upgrade Guide',
          URL:'https://nankoyo.com/how-to-update-nankoyo'
        },
        { TITLE:'latest version', URL: 'https://nankoyo.com/latest' }
      ]
    },
    {
      TITLE: 'Friendly Link',
      LINK_GROUP: [
        {
          TITLE: 'Status',
          URL: 'https://status.nankoyo.com'
        },
        {
          TITLE: 'Tools',
          URL: 'https://tools.nankoyo.com'
        },
        {
          TITLE: 'Music',
          URL: 'https://music.nankoyo.com'
        },
        {
          TITLE: 'Unlock',
          URL: 'https://unlock.nankoyo.com'
        },
        {
          TITLE: 'DNS',
          URL: 'https://dns.nankoyo.com'
        },
        {
          TITLE: 'Hot',
          URL: 'https://hot.nankoyo.com'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Articles',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'privacy policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notices',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'service agreement',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: 'We cant seem to find the page you are looking for.',
  STARTER_404_TEXT: 'Sorry!The page you are looking for does not exist.It may have been moved or deleted.',
  STARTER_404_BACK: 'Back to Main Page',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://nankoyo.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
