export const default_config = {
  default_lang: {
    lang: "en",
    dir: "ltr",
  },
  default_theme: "dark",
};

export const layouts_transition_default = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  // transition: { delay: 0.1 }
};

export const pages_transition_default = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
  transition: { delay: 0.1 },
};

export const modal_transition_default = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};

export const modals_types = {
  edit: "edit",
  view: "view",
  delete: "delete",
  add: "add",
  status: "status",
  other: "other",
  filter: "filter",
  sort: "sort",
};
