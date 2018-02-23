const globby = require("globby");

const getPaths = (globPattern, globOptions, handleSuccess) => {
  globby(globPattern, globOptions)
    .then();
};

module.exports = {
  getPaths
};
