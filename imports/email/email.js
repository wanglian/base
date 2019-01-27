ThreadCategories.add("Email", {
  icon: "fa fa-envelope-open-o",
  iconUnread: "fa fa-envelope-o",
  details: ['Email', 'Search', 'Members', 'Files'],
  actions() {
    return [
      ThreadActions.star,
      ThreadActions.search,
      ThreadActions.archive
    ]
  }
});
