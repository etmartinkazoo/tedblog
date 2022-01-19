---
tags: post
title: Coding a Blog
date: 2022-01-18
layout: "layouts/blog"
---

I knew I wanted to start writing again but I didn't want to join a big platform, mess with clunky software, etc... I wanted to create a simple place aesthetically and functionally to focus on putting words on paper. This mean thinking about technology. Let's review.

1. **Eleventy**: There is a overwhelming move in modern web development to move code from servers on the backend which serve up HTML to clients toward JavaScript on the frontend rendered by the client; namely, you and your browser. For those not in web development this may seem like a nothing burgher but understanding some of the history is important. Essentially Facebook had unique software needs - this is natural as they have *billions* of users - and they developed a frontend software library called *React*. It is phenomenal technology for highly interactive sites like Facebook that need to "react" to changing data without page refreshes; in face Facebook is more "app" like and needs that single page feel. There are numerous drawbacks to this approach:
- Added complexity
- Search Engine SEO suffers
- Performance suffers on first page load
- There are *a lot* of dependencies and huge amounts of code in the background

These are only a few of the tradeoffs but suffice it to say, React is not necessary for most sites and is normally not a great choice for personal blogs, marketing sites, etc... I wanted to leverage a tool that was flexible, lean, and which allowed me to focus on writing. I chose *Eleventy* which serves no client side JavaScript and let's me architect the codebase in a way that makes sense for my use case.

2. **Alpine.js**: I do need to use JavaScript in a few places. The mobile menu and the contact form and instead of reaching for a giant frontend library/framework, I am using Alpine.js which is perfect for my use case. It is a great balance between writing everything in vanilla JavaScript and the larger libraries.

3. **Markdown**: When I write for this blog I want a way to keep my writing both locally and on the webpage that you are reading. Markdown is a simple markup language that compiles into HTML at build time but leaves me with simple and portable text files for the original writing.

4. **Eleventy Images**: Eleventy has a great image tool that is underated. Images are important for websites but they are hard to do right. Namely you need the correct formats, the right size for the right device, speed/compression, etc... Doing all of this manually doesn't make sense and having the right tool in this regard makes a huge difference. The other benefit is that because it is local, I don't have to pay for a cloud service to do the work on their machines somewhere else.

5. **Local Assets**: I didn't want to pull in a lot of external dependencies or for-pay libraries so everything is local here. The code stands on its own which makes it resiliant and dependable. It also means things like icons are open source and served from the website here. All positives for a site like this.

This site is not meant to be mind blowingly complicated or sophisticated. It is meant to be an appropriate tool for one who enjoys writing. I hope the work in the background which you cannot see facilitates your ability to focus on the things you can, my words.
