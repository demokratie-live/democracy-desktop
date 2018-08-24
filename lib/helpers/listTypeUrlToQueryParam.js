const listTypes = {
  'in-abstimmung': 'IN_VOTE',
  vergangen: 'PAST',
  'in-vorbereitung': 'PREPARATION',
  'whats-hot': 'HOT',
};

export default listTypeParam => listTypes[listTypeParam];
