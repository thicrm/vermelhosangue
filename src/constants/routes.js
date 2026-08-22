/** Internal paths — never derive from translated copy. */
export const ROUTES = {
  home: '/',
  about: '/about',
  piercings: '/piercings',
  care: '/care',
  genitalPiercing: '/genital-piercing',
  gallery: '/gallery'
}

/** Gallery filter ids (URL query values) — English keys only, labels come from i18n. */
export const GALLERY_FILTERS = {
  all: 'all',
  piercings: 'piercings',
  bodyMods: 'bodyMods',
  lobuloplasty: 'lobuloplasty',
  genitalPiercings: 'genitalPiercings'
}

export const galleryRoute = (filter) =>
  filter && filter !== GALLERY_FILTERS.all
    ? `${ROUTES.gallery}?filter=${filter}`
    : ROUTES.gallery
