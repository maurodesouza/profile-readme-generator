const novatorem_repo = 'https://github.com/novatorem/novatorem';
const itstommi_repo = 'https://github.com/itstommi/Spotify-Readme';

const novatorem_deploy_setup = `${novatorem_repo}/blob/master/SetUp.md`;
const itstommi_deploy_setup = `${itstommi_repo}#setup`;

const vercel_base_url = 'https://vercel.com/new/clone?repository-url=';
const heroku_base_url = 'https://dashboard.heroku.com/new?template=';

const projects_links = {
  novatorem: [
    {
      label: 'Github',
      link: novatorem_repo,
    },
    {
      label: 'Setup to deploy',
      link: novatorem_deploy_setup,
    },
    {
      label: 'Deploy to Vercel',
      link: `${vercel_base_url}${novatorem_repo}`,
    },
    {
      label: 'Deploy to Heroku',
      link: `${heroku_base_url}${novatorem_repo}`,
    },
  ],
  itstommi: [
    {
      label: 'Github',
      link: itstommi_repo,
    },
    {
      label: 'Setup to deploy',
      link: itstommi_deploy_setup,
    },
    {
      label: 'Deploy to Vercel',
      link: `${vercel_base_url}${itstommi_repo}`,
    },
    {
      label: 'Deploy to Heroku',
      link: `${heroku_base_url}${itstommi_repo}`,
    },
  ],
};

export { projects_links };
