---
tags: post
title: Linux Fractional Scaling Part 2
date: 2022-01-26
layout: "layouts/blog"
---

Yesterday I wrote a post lamenting the state of fractional scaling in Linux. Not long after I was reading some posts from the Framework Community over my lunch and read [Using elementary OS on the Framework Laptop](https://community.frame.work/t/using-elementary-os-on-the-framework-laptop/4453) by Cassidy James who is the Co-Founder of elementary OS. In this excellent post he walks through a number of suggestions for using the Framework Laptop with Linux, including a suggestion with fractional scaling and Xrandr. I thought it would be just another hack that doesn't really work but lo and behold, this *actually* has solved all of my issues with scaling in Linux.

I think it would be best to do a walkthrough video of my setup and show rather than tell as they say. In the meantime, there is the code block:

```bash
xrandr --newmode "3000x2000_60.00"  513.44  3000 3240 3568 4136  2000 2001 2004 2069  -HSync +Vsync
xrandr --addmode eDP-1 "3000x2000_60.00"

xrandr --newmode "1504x1000_60.00"  125.19  1504 1600 1760 2016  1000 1001 1004 1035  -HSync +Vsync
xrandr --addmode eDP-1 "1504x1000_60.00"
```

The above can be placed in
```bash
~/.profile
```
followed by:
```bash
source ~/.bashrc
```

and the end result is:

{% image "./src/assets/images/display-settings.png", "Linux Display Settings", "(min-width: 30em) 50vw, 100vw" %}

I've never spent time reading the manual for xrandr but Cassidy James sure understands it, so thank you to him. It would be nice if Linux distros came with a few preset screen resolution options for fractional scaling to make the barrier to entry easier for what is unquestionably a pain point in the current Linux desktop environment landscape.

Cheers!
