export const getBadgeColor = (type) => {
  switch (type) {
    case 'React':
      return 'cyan';
    case 'React Query':
    case 'Redux':
      return 'indigo';
    case 'React Hook Form':
      return 'rose';
    case 'MongoDB':
      return 'green';
    case 'NodeJS':
    case 'Flask':
      return 'lime';
    case 'Express':
      return 'sky';
    case 'MailgunJS':
    case 'Typescript':
      return 'red';
    case 'Xumm':
      return 'blue';
    case 'MapboxJS':
    case 'Cloudinary':
    case 'SyncFusion':
      return 'orange';
    case 'Contentful':
    case 'Sass/SCSS':
      return 'yellow';
    default:
      return 'gray';
  }
};
