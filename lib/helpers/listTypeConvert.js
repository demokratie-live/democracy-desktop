const listTypes = [
  {
    title: 'in Abstimmung',
    graphql: 'IN_VOTE',
    url: 'in-abstimmung',
  },
  {
    title: 'Vergangen',
    graphql: 'PAST',
    url: 'vergangen',
  },
  {
    title: 'in Vorbereitung',
    graphql: 'PREPARATION',
    url: 'in-vorbereitung',
  },
  {
    title: "What's Hot",
    graphql: 'HOT',
    url: 'whats-hot',
  },
];

const listTypeUrlToQueryParam = listTypeParam =>
  listTypes.find(listType => listTypeParam === listType.url).graphql;

const titleByUrlParam = listTypeParam =>
  listTypes.find(listType => listTypeParam === listType.url).title;

export { listTypeUrlToQueryParam, titleByUrlParam };
