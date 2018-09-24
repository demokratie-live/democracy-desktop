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

const procedureListTypes = [
  {
    title: 'in Abstimmung',
    graphql: 'VOTING',
  },
  {
    title: 'Vergangen',
    graphql: 'PAST',
    url: 'vergangen',
  },
  {
    title: 'in Vorbereitung',
    graphql: 'PREPARATION',
  },
];

const listTypeUrlToQueryParam = listTypeParam =>
  listTypes.find(listType => listTypeParam === listType.url).graphql;

const titleByUrlParam = listTypeParam =>
  listTypes.find(listType => listTypeParam === listType.url).title;

const titleByProcedureListType = ({ listType, completed }) =>
  procedureListTypes.find(
    procedureListType =>
      procedureListType.graphql === (listType === 'VOTING' && completed ? 'PAST' : listType),
  ).title;

export { listTypeUrlToQueryParam, titleByUrlParam, titleByProcedureListType };
