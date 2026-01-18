# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a Jekyll-based static site for DocGPT.ai, an AI productivity tools platform. The site is built using the Hydra Jekyll template and serves as a marketing site with blog functionality.

### Key Components

- **Jekyll Static Site Generator**: Uses Jekyll ~4.2.0 with multiple plugins for SEO, feeds, and archives
- **Marketing Site**: Product landing pages for AI tools (Gmail, Sheets, Docs, etc.)
- **Blog System**: Jekyll blog with pagination and category support
- **Documentation**: Extensive docs collection with AI prompts and guides
- **Staff System**: Jekyll collection for team member profiles

### Directory Structure

- `_layouts/` - Jekyll layout templates (default, page, post, docs)
- `_includes/` - Reusable template components
- `_posts/` - Blog posts in markdown
- `_staff_members/` - Staff profiles collection
- `_data/` - Site configuration data (navigation, footer)
- `_sass/` - Sass stylesheets organized by component
- `docs/` - Documentation pages and AI prompt guides
- `assets/` - Static assets (CSS, JS, images)
- `_site/` - Generated site output (do not edit)

## Development Commands

### Setup
```bash
bundle install
```

### Development Server
```bash
bundle exec jekyll serve
```

### Build Site
```bash
bundle exec jekyll build
```

## Site Configuration

- Main config in `_config.yml`
- Site URL: https://docgpt.ai
- Google Analytics tracking enabled
- SEO optimized with jekyll-seo-tag plugin
- Sitemap and RSS feed generation

## Content Management

- Blog posts go in `_posts/` with YAML front matter
- Documentation pages in `docs/` directory
- Staff profiles in `_staff_members/` collection
- Navigation configured in `_data/navigation.yml`
- Footer links in `_data/footer.yml`

## AI Tools Integration

The site promotes several AI productivity tools:
- GPT for Gmail
- GPT for Google Sheets
- GPT for Google Docs
- GPT for Google Slides
- Mail Merge tools
- LinkedIn automation
- Social media generators

## JavaScript Components

- `assets/js/windows.js` - Toast notification system for user engagement
- `assets/js/index.js` - Main site JavaScript
- `assets/js/anchor.min.js` - Anchor link functionality

## Deployment

Site is deployed via Netlify with continuous deployment from the main branch.