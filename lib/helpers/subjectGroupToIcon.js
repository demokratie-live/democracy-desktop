const subjectGroups = {
  'Arbeit und Beschäftigung': {
    icon: 'hammer',
    image: '/static/images/sachgebiete/arbeit_beschaeftigung.jpg',
  },
  'Ausländerpolitik, Zuwanderung': {
    icon: 'add-user',
    image: '/static/images/sachgebiete/auslaenderpolitik.jpg',
  },
  'Außenpolitik und internationale Beziehungen': {
    icon: 'planet',
    displayTitle: 'Außenpolitik und intern. Beziehungen',
    image: '/static/images/sachgebiete/aussenpolitik.jpg',
  },
  Außenwirtschaft: {
    icon: 'anker',
    image: '/static/images/sachgebiete/aussenwirtschaft.jpg',
  },
  'Bildung und Erziehung': {
    icon: 'magic',
    image: '/static/images/sachgebiete/bildung_erziehung.jpg',
  },
  Bundestag: {
    icon: 'bundestag',
    image: '/static/images/sachgebiete/bundestag.jpg',
  },
  Energie: {
    icon: 'lamp',
    image: '/static/images/sachgebiete/energie.jpg',
  },
  Entwicklungspolitik: {
    icon: 'locate',
    image: '/static/images/sachgebiete/entwicklungspolitik.jpg',
  },
  'Europapolitik und Europäische Union': {
    icon: 'europe',
    image: '/static/images/sachgebiete/europapolitik.jpg',
  },
  'Gesellschaftspolitik, soziale Gruppen': {
    icon: 'society',
    image: '/static/images/sachgebiete/gesellschaft.jpg',
  },
  Gesundheit: {
    icon: 'heart',
    image: '/static/images/sachgebiete/gesundheit.jpg',
  },
  'Innere Sicherheit': {
    icon: 'camera',
    image: '/static/images/sachgebiete/innere_sicherheit.jpg',
  },
  Kultur: {
    icon: 'book',
    image: '/static/images/sachgebiete/kultur.jpg',
  },
  'Landwirtschaft und Ernährung': {
    icon: 'settings',
    image: '/static/images/sachgebiete/landwirtschaft_ernaehrung.jpg',
  },
  'Medien, Kommunikation und Informationstechnik': {
    icon: 'network',
    displayTitle: 'Medien, Kommunikation, Informationstechnik',
    image: '/static/images/sachgebiete/it.jpg',
  },
  'Neue Bundesländer / innerdeutsche Beziehungen': {
    icon: 'puzzle',
    displayTitle: 'Neue Bundesländer',
    image: '/static/images/sachgebiete/neue_bundeslaender.jpg',
  },
  'Öffentliche Finanzen, Steuern und Abgaben': {
    icon: 'calculator',
    image: '/static/images/sachgebiete/oeffentliche_finanzen_steuern_und_abgaben.jpg',
  },
  'Politisches Leben, Parteien': {
    icon: 'chat',
    displayTitle: 'Politisches Leben',
    image: '/static/images/sachgebiete/politisches_leben_parteien.jpg',
  },
  'Raumordnung, Bau- und Wohnungswesen': {
    icon: 'house',
    image: '/static/images/sachgebiete/bauwesen.jpg',
  },
  Recht: {
    icon: 'pen',
    image: '/static/images/sachgebiete/recht.jpg',
  },
  'Soziale Sicherung': {
    icon: 'umbrella',
    image: '/static/images/sachgebiete/soziale_sicherung.jpg',
  },
  'Sport, Freizeit und Tourismus': {
    icon: 'image',
    image: '/static/images/sachgebiete/tourismus.jpg',
  },
  'Staat und Verwaltung': {
    icon: 'government',
    image: '/static/images/sachgebiete/staat_verwaltung.jpg',
  },
  Umwelt: {
    icon: 'water-drop',
    image: '/static/images/sachgebiete/umwelt.jpg',
  },
  Verkehr: {
    icon: 'plane',
    image: '/static/images/sachgebiete/verkehr.jpg',
  },
  Verteidigung: {
    icon: 'shield',
    image: '/static/images/sachgebiete/verteidigung.jpg',
  },
  Wirtschaft: {
    icon: 'increase-arrow',
    image: '/static/images/sachgebiete/wirtschaft.jpg',
  },
  'Wissenschaft, Forschung und Technologie': {
    icon: 'rocket',
    image: '/static/images/sachgebiete/wissenschaft_forschung_technologie.jpg',
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
