export const getCountry = (nationality: string) => {
  switch (nationality) {
    case 'Thai':
      return 'thailand';
    case 'Spanish':
      return 'spain';
    case 'Finnish':
      return 'finland';
    case 'Dutch':
      return 'netherlands';
    case 'French':
      return 'france';
    case 'British':
      return 'gb';
    case 'German':
      return 'germany';
    case 'Canadian':
      return 'canada';
    case 'Monegasque':
      return 'monaco';
    case 'Danish':
      return 'denmark';
    case 'Mexican':
      return 'mexico';
    case 'Australian':
      return 'australia';
    case 'Japanese':
      return 'japan';
    case 'Chinese':
      return 'China';
    default:
      return 'antarctica';
  }
};
