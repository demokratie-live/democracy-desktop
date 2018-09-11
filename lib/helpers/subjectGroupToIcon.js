const subjectGroups = {
  'Arbeit und Beschäftigung': {
    icon: 'hammer',
    image: require('../../static/images/sachgebiete/arbeit_beschaeftigung.jpg'),
  },
  'Ausländerpolitik, Zuwanderung': {
    icon: 'add-user',
    image: require('../../static/images/sachgebiete/auslaenderpolitik.jpg'),
  },
  'Außenpolitik und internationale Beziehungen': {
    icon: 'planet',
    displayTitle: 'Außenpolitik und intern. Beziehungen',
    image: require('../../static/images/sachgebiete/aussenpolitik.jpg'),
  },
  Außenwirtschaft: {
    icon: 'anker',
    image: require('../../static/images/sachgebiete/aussenwirtschaft.jpg'),
  },
  'Bildung und Erziehung': {
    icon: 'magic',
    image: require('../../static/images/sachgebiete/bildung_erziehung.jpg'),
  },
  Bundestag: {
    icon: 'bundestag',
    image: require('../../static/images/sachgebiete/bundestag.jpg'),
  },
  Energie: {
    icon: 'lamp',
    image: require('../../static/images/sachgebiete/energie.jpg'),
  },
  Entwicklungspolitik: {
    icon: 'locate',
    image: require('../../static/images/sachgebiete/entwicklungspolitik.jpg'),
  },
  'Europapolitik und Europäische Union': {
    icon: 'europe',
    image: require('../../static/images/sachgebiete/europapolitik.jpg'),
  },
  'Gesellschaftspolitik, soziale Gruppen': {
    icon: 'share',
    image: require('../../static/images/sachgebiete/gesellschaft.jpg'),
  },
  Gesundheit: {
    icon: 'heart',
    image: require('../../static/images/sachgebiete/gesundheit.jpg'),
  },
  'Innere Sicherheit': {
    icon: 'camera',
    image: require('../../static/images/sachgebiete/innere_sicherheit.jpg'),
  },
  Kultur: {
    icon: 'book',
    image: require('../../static/images/sachgebiete/kultur.jpg'),
  },
  'Landwirtschaft und Ernährung': {
    icon: 'settings',
    image: require('../../static/images/sachgebiete/landwirtschaft_ernaehrung.jpg'),
  },
  'Medien, Kommunikation und Informationstechnik': {
    icon: 'network',
    displayTitle: 'Medien, Kommunikation, Informationstechnik',
    image: require('../../static/images/sachgebiete/it.jpg'),
  },
  'Neue Bundesländer / innerdeutsche Beziehungen': {
    icon: 'puzzle',
    displayTitle: 'Neue Bundesländer',
    image: require('../../static/images/sachgebiete/neue_bundeslaender.jpg'),
  },
  'Öffentliche Finanzen, Steuern und Abgaben': {
    icon: 'calculator',
    image: require('../../static/images/sachgebiete/oeffentliche_finanzen_steuern_und_abgaben.jpg'),
  },
  'Politisches Leben, Parteien': {
    icon: 'chat',
    displayTitle: 'Politisches Leben',
    image: require('../../static/images/sachgebiete/politisches_leben_parteien.jpg'),
  },
  'Raumordnung, Bau- und Wohnungswesen': {
    icon: 'house',
    image: require('../../static/images/sachgebiete/bauwesen.jpg'),
  },
  Recht: {
    icon: 'pen',
    image: require('../../static/images/sachgebiete/recht.jpg'),
  },
  'Soziale Sicherung': {
    icon: 'umbrella',
    image: require('../../static/images/sachgebiete/soziale_sicherung.jpg'),
  },
  'Sport, Freizeit und Tourismus': {
    icon: 'image',
    image: require('../../static/images/sachgebiete/tourismus.jpg'),
  },
  'Staat und Verwaltung': {
    icon: 'government',
    image: require('../../static/images/sachgebiete/staat_verwaltung.jpg'),
  },
  Umwelt: {
    icon: 'water-drop',
    image: require('../../static/images/sachgebiete/umwelt.jpg'),
  },
  Verkehr: {
    icon: 'plane',
    image: require('../../static/images/sachgebiete/verkehr.jpg'),
  },
  Verteidigung: {
    icon: 'shield',
    image: require('../../static/images/sachgebiete/verteidigung.jpg'),
  },
  Wirtschaft: {
    icon: 'increase-arrow',
    image: require('../../static/images/sachgebiete/wirtschaft.jpg'),
  },
  'Wissenschaft, Forschung und Technologie': {
    icon: 'rocket',
    image: require('../../static/images/sachgebiete/wissenschaft_forschung_technologie.jpg'),
  },
};

const getDisplayTitle = subjectGroup => {
  if (subjectGroups[subjectGroup] && subjectGroups[subjectGroup].displayTitle) {
    return subjectGroups[subjectGroup].displayTitle;
  }
  return subjectGroup;
};

const getImage = subjectGroup => {
  if (subjectGroups[subjectGroup] && subjectGroups[subjectGroup].image) {
    return subjectGroups[subjectGroup].image;
  }
};

export { subjectGroups, getDisplayTitle, getImage };

export default subjectGroup => {
  if (subjectGroups[subjectGroup]) {
    return subjectGroups[subjectGroup].icon;
  }
};
