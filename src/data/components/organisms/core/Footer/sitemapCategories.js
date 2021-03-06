/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import { ROUTE_BLOG, ROUTE_COMMUNITY, ROUTE_DOCS, ROUTE_PORTS, ROUTE_ROOT } from "config/routes/mappings";
import { sectionIdFor } from "utils";

/**
 * The mapping of categories for the sitemap.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.5.0
 */
const sitemapCategories = [
  {
    name: "Nord",
    url: ROUTE_ROOT,
    links: [
      { title: "Palettes", url: `#${sectionIdFor(ROUTE_ROOT, 1)}` },
      { title: "Ports", url: `#${sectionIdFor(ROUTE_ROOT, 3)}` },
      { title: "Swatches", url: `#${sectionIdFor(ROUTE_ROOT, 4)}` },
      { title: "Syntax Highlighting", url: `#${sectionIdFor(ROUTE_ROOT, 5)}` },
      { title: "Community", url: `#${sectionIdFor(ROUTE_ROOT, 6)}` }
    ]
  },
  {
    name: "Ports",
    url: ROUTE_PORTS,
    links: []
  },
  {
    name: "Docs",
    url: ROUTE_DOCS,
    links: []
  },
  {
    name: "Blog",
    url: ROUTE_BLOG,
    links: []
  },
  {
    name: "Community",
    url: ROUTE_COMMUNITY,
    links: []
  }
];

export default sitemapCategories;
