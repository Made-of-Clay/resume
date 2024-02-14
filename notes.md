# Adam Leis Personal Website

TODO: structure

```
article
    header
        h1{name}
        h2{title}
        img#photo
    main
        section#experience
            ol > li * n
                h3 + time + ul>li*n
        section#about
            h2 + ul > li * n
        section#education
            h2 + ul > li * n
    footer
        ul > li * n
```

proposed data

```yml
name: Adam Leis
title: Front-end Developer
photo: /images/me.jpg
experience:
    1. company: Intellectric Technology, Inc.
        start: 08/20
        end: null
        title: Software Engineer
        work:
        - did things
        - also did stuff
    2. company: 'Rosenboom: Custom. Crafted. Cyclinders.'
about:
    # how can I obscure some of this from bots and spammers? maybe use pseudo content to render? bots might miss it
    website: https://adamleis.com
    email: adam.m.leis@gmail.com
    phone: 419.996.9794
education:
    - school: Liberty University
        degree: Master of Arts
        focus: Christian Apologetics
        graduated: May 2010
    - school: Bowling Green State University
        degree: Bachelor of Fine Arts
        focus: Digital Art
        graduated: Dec 2020
skills:
    - label: Proficient
        list:
        - HTML5/CSS3
        - JavaScript/TypeScript
        - Vue, React, React Native
        - Vite / Webpack
        - REST
    - label: Working Knowledge
        list:
        - Node.js
        - PHP
        - C# .NET Core
        - SQL, MySQL
        - Google Firebase
    - label: Novice
        list:
        - Python
        - GraphQL
```

This will just be a dumping ground now for me. My digital presence... something for the
feds to use to profile me better `;)`

Home/landing page will be large-block, single-page layout with the following:
- Welcome/About info (brief) w/ my photo
- Portfolio link (`portfolio.adamleis.com`) & any recent posts
- Blog link (`blog.adamleis.com`) & any recent posts
- Contact form - uses wp mail? decide later

Header bar links to each section and updates (maybe w/ cool animation) when new area
is entered.

Use Vuex w/ hashes to jump to area of page quickly

Probably from portfolio, link to any extra projects (e.g. Marvel calculator, topic study, ...)

Link to social media where relevant (Facebook, LinkedIn) - update where necessary

## Technical requirements
I'll use the following setup for the site

### Front-end

- Vue.js
- Vue Router
- Fetch API

Vuex probably won't be necessary as it's just one component? Maybe one layer (i.e. parent-child)

### Back-end

- WordPress (headless - admin)
- WordPress REST API (serves data)

Make sure to set up WordPress with solid security, stripped down dependencies,
and optimization plugins/code for queries

## Design Ideas
Sections will be large blocks of content (scrolling is fact of life today); easily responsive

Large photos (woo responsive image opportunity!)

Favor light background w/ forest-y greens & maybe some blues?

Very minor use of rich, bright red color too; just don't miscommunicate "error!"

Header bar/nav could use the green(s) and have a cool geometric, subtle node-grid background (think Codepen canvas node experiments)

SUPER cool header bar would be canvas bg w/ animating nodes like in Codepen (give props to who you borrow from)
- make it as a component for easy portability

## Blog & Portfolio
Treat as separate git project? Reason for this is use of subdomains

### Portfolio
Single-page, no apparent section changes

List of entries, thumbnails per entry

Click thumbnail expands to fullscreen view w/ nav from there too (and details)

Maybe brief blerb on entry to the side?

Search/filter available too

Portfolio entries come from Media w/ category "Portfolio" - captions can be added as well

### Blog
SPA w/ area navigation (categories, tags, search, recent posts, specific post)

Use Vuex/Router combo (w/ history state if easy enough)

Basically make WP blog w/ Vue front-end
