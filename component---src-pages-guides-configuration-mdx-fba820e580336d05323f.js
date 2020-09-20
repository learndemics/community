(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{w9ml:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t("cxan"),o=t("+wNj"),i=(t("ERkP"),t("ZVZ0")),r=t("Qr8n"),b=(t("l1C2"),{}),l=function(e){return function(n){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",n)}},s=l("PageDescription"),c=l("AnchorLinks"),p=l("AnchorLink"),d=l("Row"),m=l("Column"),g={_frontmatter:b},A=r.a;function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(A,Object(a.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"Gatsby themes allow you to override configuration from the theme by defining the\nsame property in your ",Object(i.b)("inlineCode",{parentName:"p"},"gatsby-config.js")," at the root of your project. You can\nsee the default configuration provided by the theme’s\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/gatsby-theme-carbon/gatsby-config.js"}),Object(i.b)("inlineCode",{parentName:"a"},"gatsby-config.js")),"\nfile.")),Object(i.b)(c,{mdxType:"AnchorLinks"},Object(i.b)(p,{mdxType:"AnchorLink"},"Site metadata"),Object(i.b)(p,{mdxType:"AnchorLink"},"Manifest"),Object(i.b)(p,{mdxType:"AnchorLink"},"Favicon"),Object(i.b)(p,{mdxType:"AnchorLink"},"Additional font weights"),Object(i.b)(p,{mdxType:"AnchorLink"},"Image compression"),Object(i.b)(p,{mdxType:"AnchorLink"},"Global search"),Object(i.b)(p,{mdxType:"AnchorLink"},"Navigation style"),Object(i.b)(p,{mdxType:"AnchorLink"},"Edit on Github link"),Object(i.b)(p,{mdxType:"AnchorLink"},"Medium"),Object(i.b)(p,{mdxType:"AnchorLink"},"Other options")),Object(i.b)("h2",null,"Site metadata"),Object(i.b)("p",null,"To add a title and description to each page, simply provide them to siteMetadata\nin your ",Object(i.b)("inlineCode",{parentName:"p"},"gatsby-config.js")," file."),Object(i.b)("p",null,"The language attribute applied to the ",Object(i.b)("inlineCode",{parentName:"p"},"<html>")," tag on every page is English\n(",Object(i.b)("inlineCode",{parentName:"p"},"en"),") by default, but you can choose to override this. For more information on\ndeclaring the language of a page in HTML, please review\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"}),"W3 Criterion 3.1.1 Language of a Page"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  siteMetadata: {\n    title: 'Gatsby Theme Carbon',\n    description: 'A Gatsby theme for the carbon design system',\n    keywords: 'gatsby,theme,carbon',\n    lang: 'en',\n  },\n  plugins: ['gatsby-theme-carbon'],\n};\n")),Object(i.b)("h2",null,"Manifest"),Object(i.b)("p",null,"One of the first configurations should be to override the default manifest\noptions, you can do this in ",Object(i.b)("inlineCode",{parentName:"p"},"gatsby-config.js"),". Any options you don’t set, will\nbe provided by the theme. See the example project."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"siteMetadata: {\n    title: 'Gatsby Theme Carbon',\n  },\n  plugins: [\n    'gatsby-theme-carbon',\n    {\n      resolve: 'gatsby-plugin-manifest',\n      options: {\n        name: 'Carbon Design Gatsby Theme',\n        short_name: 'Gatsby Theme Carbon',\n        start_url: '/',\n        background_color: '#ffffff',\n        theme_color: '#0062ff',\n        display: 'browser',\n      },\n    },\n  ],\n")),Object(i.b)("h2",null,"Favicon"),Object(i.b)("p",null,"If you need to override the default favicon, you can do so by passing a relative\npath to the icon. It’s recommended to provide a 512 x 512 version."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"IMPORTANT:")," For best results, if you’re providing an icon for generation it\nshould be…"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"at least as big as the largest icon being generated (512x512 by default)."),Object(i.b)("li",{parentName:"ul"},"square (if it’s not, transparent bars will add to make it square)."),Object(i.b)("li",{parentName:"ul"},"of one of the follow formats: JPEG, PNG, WebP, TIFF, GIF or SVG.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        iconPath: './src/images/custom-icon-512.jpg'\n      },\n    },\n  ],\n")),Object(i.b)("h2",null,"Additional font weights"),Object(i.b)("p",null,"If needed, you can add support for additional Plex font weights. Don’t forget to\nspecify italics for the additional weights if needed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        // will get added to default [300, 400, 600]\n        additionalFontWeights: ['200', '200i]\n      },\n    },\n  ],\n")),Object(i.b)("h2",null,"Image compression"),Object(i.b)("p",null,"You can enable WebP by passing ",Object(i.b)("inlineCode",{parentName:"p"},"withWebp: true")," or providing your own\noptimization level. See the gatsby-remark-images\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-remark-images/#options"}),"plugin options"),".\nYou can also tweak the image quality based on design tolerance and performance\nthresholds."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        withWebp: true, // true, false (default false)\n        imageQuality: 50, // 0-100 (default 75)\n      },\n    },\n  ],\n};\n")),Object(i.b)("h2",null,"Global search"),Object(i.b)("p",null,"Site-wide search is provided by the theme. The only requirement for a page to\nshow up in the results is for it to have ",Object(i.b)("inlineCode",{parentName:"p"},"title")," set in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/components/MDX#frontmatter"}),"frontmatter"),". To render more helpful search\nresults (and improve SEO), you’ll want to make sure your pages have\n",Object(i.b)("inlineCode",{parentName:"p"},"description")," set in the frontmatter as well."),Object(i.b)("p",null,"Global search is enabled by default. To disable it, set the ",Object(i.b)("inlineCode",{parentName:"p"},"isSearchEnabled"),"\noption to false."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        isSearchEnabled: false\n      },\n    },\n  ],\n")),Object(i.b)("p",null,"Under the hood, we use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://lunrjs.com/"}),"Lunr")," to create our search index.\nIf necessary, you tweak the search scoring algorithm and source nodes. To do so,\nprovide your own\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gatsbyjs.org/packages/gatsby-plugin-lunr/#getting-started"}),"resolvers object"),"\nto the ",Object(i.b)("inlineCode",{parentName:"p"},"lunrOptions")," theme option."),Object(i.b)("h2",null,"Navigation style"),Object(i.b)("p",null,"By default, the navigation style used by the theme is a sidebar that sits on the\nleft-hand side of the screen. You can see it right now as you read this\ndocumentation. This style works great for websites with a lot of content, like\ndocumentation sites."),Object(i.b)("p",null,"However, if your site is more editorial in nature, and has less pages of\ncontent, you may want to use the ",Object(i.b)("inlineCode",{parentName:"p"},"header")," navigation. This will remove the\nsidebar on the left-hand side of the page and replace it with a navigation menu\nthat sits in the header. If in the future, the content on your site evolves and\nyou feel the left nav is better suited, you can always change it back."),Object(i.b)("p",null,"To enable the header nav, provide ",Object(i.b)("inlineCode",{parentName:"p"},"header")," as a string to the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationStyle"),"\noption. To switch back to the default left nav provide an empty string ",Object(i.b)("inlineCode",{parentName:"p"},"''")," to\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"navigationStyle")," option. Note: By using the ",Object(i.b)("inlineCode",{parentName:"p"},"header")," navigation style, you\nwill lose the ResourceLinks that sit directly below the left nav."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        navigationStyle: 'header',\n      },\n    },\n  ],\n")),Object(i.b)("p",null,"When enabled, your header navigation will look like the image below:"),Object(i.b)(d,{mdxType:"Row"},Object(i.b)(m,{colMd:8,colLg:8,mdxType:"Column"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4LReZxQ//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAIQMTL/2gAIAQEAAQUClbfJ/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQAQETEhUXH/2gAIAQEAAT8hztEGKKli3rf/2gAMAwEAAgADAAAAEJPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRABAAEDBQAAAAAAAAAAAAAAAQARMWEQUXGhwf/aAAgBAQABPxAyLisDUibowZZZe4nTeaf/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Header navigation style",title:"Header navigation style",src:"/static/e57ea23bd169fd3d0dac4e22c4a4a31c/2e753/header-nav-config.jpg",srcSet:["/static/e57ea23bd169fd3d0dac4e22c4a4a31c/69549/header-nav-config.jpg 288w","/static/e57ea23bd169fd3d0dac4e22c4a4a31c/473e3/header-nav-config.jpg 576w","/static/e57ea23bd169fd3d0dac4e22c4a4a31c/2e753/header-nav-config.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)("p",null,"With the header navigation style enabled, the content on your page will be\nfurther left-aligned to allow for more content space."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Just a note:")," In mobile-view, when the header navigation is enabled, the\nsidebar will persist."),Object(i.b)("h2",null,"Edit on GitHub link"),Object(i.b)("p",null,"To add a link to the bottom of each page that points to the current page source\nin GitHub, provide a ",Object(i.b)("inlineCode",{parentName:"p"},"repository")," object to ",Object(i.b)("inlineCode",{parentName:"p"},"siteMetadata")," in your\n",Object(i.b)("inlineCode",{parentName:"p"},"gatsby-config.js")," file. You can provide a ",Object(i.b)("inlineCode",{parentName:"p"},"baseUrl"),", and if needed, the\n",Object(i.b)("inlineCode",{parentName:"p"},"subDirectory")," and ",Object(i.b)("inlineCode",{parentName:"p"},"branch")," where your site source lives."),Object(i.b)("p",null,"To disable the ",Object(i.b)("inlineCode",{parentName:"p"},"Edit in Github")," link, remove the ",Object(i.b)("inlineCode",{parentName:"p"},"repository")," option. If the\noptions object is now empty, delete it all together."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        repository: {\n          baseUrl: 'https://github.com/carbon-design-system/gatsby-theme-carbon',\n          subDirectory: '/packages/example',\n          branch: 'main',\n        },\n      },\n    },\n  ],\n")),Object(i.b)("h2",null,"Medium"),Object(i.b)("p",null,"In order to change the source account for the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/components/MediumPosts"}),Object(i.b)("inlineCode",{parentName:"a"},"MediumPosts"))," component, provide an account with the\n",Object(i.b)("inlineCode",{parentName:"p"},"mediumAccount")," option."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"plugins: [\n  {\n    resolve: 'gatsby-theme-carbon',\n    options: {\n      mediumAccount: 'carbondesign',\n    },\n  },\n];\n")),Object(i.b)("h2",null,"Other options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"additionalFontWeights")," – add support for additional Plex font weights. Don’t\nforget to specify italics for the additional weights if needed.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"mdxExtensions")," – change the file extensions processed by ",Object(i.b)("inlineCode",{parentName:"p"},"gatsby-mdx"),"\n(default ","[‘.mdx’, ‘.md’]",").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"pngCompressionSpeed")," - a speed/quality trade-off from 1 (brute-force) to 10\n(fastest). Speed 10 has 5% lower quality, but is 8 times faster than the\ndefault (4).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"titleType")," – pick between four formats for the ",Object(i.b)("inlineCode",{parentName:"p"},"<title>")," element for your\nsite. Here are the four options using this page as an example:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),": “Configuration” (default)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"site"),": “Gatsby Theme Carbon”"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"append"),": “Gatsby Theme Carbon – Configuration”"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepend"),": “Configuration - Gatsby Theme Carbon”")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        additionalFontWeights: ['200', '200i'],\n        mdxExtensions: ['.mdx'],\n        titleType: 'append'\n      },\n    },\n  ],\n")),Object(i.b)("h2",null,"Additional remark plugins and override existing remark plugin configuration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gatsbyRemarkPlugins")," - An array containing gatsby remark plugin\nconfigurations to be added/overridden."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"remarkPlugins")," - An array containing\n",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#remark-plugins"}),"remark plugin configurations"),"\nto be added.")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"gatsbyRemarkPlugins")," option is compatible with all gatsby-remark-","*","\nplugins, for example ",Object(i.b)("inlineCode",{parentName:"p"},"gatsby-remark-mermaid"),". If a gatsby remark plugin does not\nwork, you can try calling the (underlying) remark plugin directly using the\n",Object(i.b)("inlineCode",{parentName:"p"},"remarkPlugins")," option."),Object(i.b)("h3",null,"Example ",Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"https://www.gatsbyjs.org/packages/gatsby-remark-mermaid/"}),"Gatsby Remark Mermaid plugin")),Object(i.b)("p",null,"For the below markdown snippet:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"```mermaid\ngraph LR\ninstall[Install Plugin]\ninstall --\x3e configure[Configure Plugin]\nconfigure --\x3e draw[Draw Fancy Diagrams]\n```\n")),Object(i.b)("p",null,"to turn into an image one should add the following configuration to her/his own\nproject:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"})," plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        repository: {\n          baseUrl: 'https://github.com/carbon-design-system/gatsby-theme-carbon',\n          subDirectory: '/packages/example',\n          branch: 'main',\n        },\n        gatsbyRemarkPlugins: [\n          {\n            resolve: 'gatsby-remark-mermaid',\n            options: {\n              language: 'mermaid',\n              theme: 'dark',\n              viewport: {\n                width: 200,\n                height: 200,\n              },\n              mermaidOptions: {\n                themeCSS: '.node rect { fill: cornflowerblue; }',\n              },\n            },\n          },\n        ],\n      },\n    },\n  ],\n\n")),Object(i.b)("h3",null,"Example ",Object(i.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/zestedesavoir/zmarkdown/tree/master/packages/remark-grid-tables"}),"Remark Grid Tables")),Object(i.b)("p",null,"For the below markdown snippet:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"+-------+----------+------+\n| Table Headings   | Here |\n+-------+----------+------+\n| Sub   | Headings | Too  |\n+=======+==========+======+\n| cell  | column spanning |\n+ spans +----------+------+\n| rows  | normal   | cell |\n+-------+----------+------+\n| multi | cells can be    |\n| line  | *formatted*     |\n|       | **paragraphs**  |\n| cells |                 |\n| too   |                 |\n+-------+-----------------+\n")),Object(i.b)("p",null,"After installing the ",Object(i.b)("inlineCode",{parentName:"p"},"remark-grid-tables")," plugin, add it to the ",Object(i.b)("inlineCode",{parentName:"p"},"remarkPlugins"),"\narray in the theme options."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"})," plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        remarkPlugins: [require(\"remark-grid-tables\")],\n      },\n    },\n  ],\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-configuration-mdx-fba820e580336d05323f.js.map