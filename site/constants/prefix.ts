const isBuildSite = process.env.SITE === 'true';

export const prefix = isBuildSite ? 'https://api.powerfulyang.com' : '';
