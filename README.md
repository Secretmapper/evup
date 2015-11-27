# UP CSI Devcamp

[![wercker status](https://app.wercker.com/status/03ed7770d56d36667cf22a75c293afb5/m "wercker status")](https://app.wercker.com/project/bykey/03ed7770d56d36667cf22a75c293afb5)

Our mission is to kickstart generations (camps) of talented and ambitious students here in UP.

This website serves as the official UP CSI devcamp website.

## Contribution Guide

### Content

If you wish to contribute content (add a guide, fix a typo) the easiest way is through github's [online tools](https://help.github.com/articles/editing-files-in-another-user-s-repository/) or through [Prose](http://prose.io).

All you need to do is to edit the [markdown](http://daringfireball.net/projects/markdown/) content file. All content is under the `content/` directory, and the directory structure should be self explanatory (`content/resources` contains all resources, `content/trackposts` contains all track posts, etc.). Make sure to take note of the front matter in every content file.

Authors are defined using [yaml](http://yaml.org) or [toml](https://github.com/toml-lang/toml) files under `data/authors/`.

### Site Functionality / Theming

You will need to install [Hugo](http://gohugo.io) and [npm](https://nodejs.org).

Install the dependencies by running `npm install`.

The default `gulp` task takes care of file watching and asset compilation, and also runs `hugo server` for you, so you can get started hacking right away.

The src theme files is under `themes/src`

## Platform

- Built with the static site generator [Hugo](http://gohugo.io)
- Build system with [Gulpjs](http://gulpjs.com)
- Javascript module bundler with [webpack](http://webpack.github.io)
- Automatic Deployments through [Wercker](http://wercker.com)
