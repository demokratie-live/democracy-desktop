const subjectGroups = {
  'Arbeit und Beschäftigung': {
    icon: 'hammer',
  },
  'Ausländerpolitik, Zuwanderung': {
    icon: 'add-user',
  },
  'Außenpolitik und internationale Beziehungen': {
    icon: 'planet',
    displayTitle: 'Außenpolitik und intern. Beziehungen',
  },
  Außenwirtschaft: {
    icon: 'anker',
  },
  'Bildung und Erziehung': {
    icon: 'magic',
  },
  Bundestag: {
    icon: 'bundestag',
  },
  Energie: {
    icon: 'lamp',
  },
  Entwicklungspolitik: {
    icon: 'locate',
  },
  'Europapolitik und Europäische Union': {
    icon: 'europe',
  },
  'Gesellschaftspolitik, soziale Gruppen': {
    icon: 'share',
  },
  Gesundheit: {
    icon: 'heart',
  },
  'Innere Sicherheit': {
    icon: 'camera',
  },
  Kultur: {
    icon: 'book',
  },
  'Landwirtschaft und Ernährung': {
    icon: 'settings',
  },
  'Medien, Kommunikation, Informationstechnik': {
    icon: 'network',
  },
  'Neue Bundesländer / innerdeutsche Beziehungen': {
    icon: 'puzzle',
    displayTitle: 'Neue Bundesländer',
  },
  'Öffentliche Finanzen, Steuern und Abgaben': {
    icon: 'calculator',
  },
  'Politisches Leben, Parteien': {
    icon: 'chat',
    displayTitle: 'Politisches Leben',
  },
  'Raumordnung, Bau- und Wohnungswesen': {
    icon: 'house',
  },
  Recht: {
    icon: 'pen',
  },
  'Soziale Sicherung': {
    icon: 'umbrella',
  },
  'Sport, Freizeit und Tourismus': {
    icon: 'image',
  },
  'Staat und Verwaltung': {
    icon: 'government',
  },
  Umwelt: {
    icon: 'water-drop',
  },
  Verkehr: {
    icon: 'plane',
  },
  Verteidigung: {
    icon: 'shield',
  },
  Wirtschaft: {
    icon: 'increase-arrow',
  },
  'Wissenschaft, Forschung und Technologie': {
    icon: 'rocket',
  },
};

const getDisplayTitle = subjectGroup => {
  if (subjectGroups[subjectGroup] && subjectGroups[subjectGroup].displayTitle) {
    return subjectGroups[subjectGroup].displayTitle;
  }
  return subjectGroup;
};

export { subjectGroups, getDisplayTitle };

export default subjectGroup => {
  if (subjectGroups[subjectGroup]) {
    return subjectGroups[subjectGroup].icon;
  }
};
