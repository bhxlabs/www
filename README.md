# BHX Labs Jekyll Site

A dark, polished Jekyll site for **BHX Labs**, designed as a professional lab-style home for research, software, datasets, and digital infrastructure projects.

## Features

- Jekyll layout and include structure
- Project cards powered by `_data/projects.yml`
- Responsive dark hero/jumbotron design
- Filterable selected-work section
- SEO metadata through `jekyll-seo-tag`
- Sitemap support through `jekyll-sitemap`
- Accessible skip link, semantic sections, and mobile navigation

## Local setup

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://localhost:4000
```

## Editing projects

Update project cards in:

```text
_data/projects.yml
```

Each item supports:

```yaml
- title: Project Name
  type: Specification
  status: Active
  category: research
  description: Short description.
  url: "#"
  cta: View project
```

Supported filter categories are:

- `research`
- `software`
- `data`
- `systems`

## Editing site metadata

Update `_config.yml` for the domain, description, title, and plugin settings.

## Deployment

This site can be deployed to GitHub Pages, Netlify, Cloudflare Pages, or any static host that supports Jekyll builds.
