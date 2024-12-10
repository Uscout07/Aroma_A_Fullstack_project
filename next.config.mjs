const isGithubPages = process.env.NODE_ENV === 'production';

export default {
  basePath: isGithubPages ? '/Aroma_A_Fullstack_project' : '',
  assetPrefix: isGithubPages ? '/Aroma_A_Fullstack_project/' : '',
};
