const list_items = [
  {
    id: 1,
    content: `
      Create a
      <a href="https://developer.spotify.com/dashboard/applications" target="_blank">
        Spotify application
      </a>
      , you can follow this
      <a href="https://github.com/novatorem/novatorem/blob/master/SetUp.md#spotify-api" target="_blank">
        guide
      </a>
      .
    `,
  },
  {
    id: 2,
    content: 'Choose one of the available projects.',
  },
  {
    id: 3,
    content: 'Upload your own project instance.',
  },
  {
    id: 4,
    content: 'Then put the url of your app here.',
  },
];

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

export { list_items, projects_links };
