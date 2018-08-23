const subjectGroups = {
  'Arbeit und Beschäftigung': {
    icon: 'hammer',
  },
  Verkehr: {
    icon: 'plane',
  },
  'Ausländerpolitik, Zuwanderung': {
    icon: 'add-user',
  },
  'Außenpolitik und internationale Beziehungen': {
    icon: 'planet',
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
  'Medien, Kommunikation und Informationstechnik': {
    icon: 'network',
  },
  'Neue Bundesländer / innerdeutsche Beziehungen': {
    icon: 'puzzle',
  },
  'Öffentliche Finanzen, Steuern und Abgaben': {
    icon: 'calculator',
  },
  'Politisches Leben, Parteien': {
    icon: 'chat',
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

export { subjectGroups };

export default subjectGroup => {
  if (subjectGroups[subjectGroup]) {
    return subjectGroups[subjectGroup].icon;
  }
};
