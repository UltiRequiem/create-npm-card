const personalConfig = {
  name: `{{name}}`,
  email: `{{email}}`,
  farewell: `{{finalNote}}`,
  bio: `{{bio}}`,
};

function internalParse(config) {
  return config;
}

export const data = internalParse(personalConfig);
