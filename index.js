const globby = require("globby");
const minimatch = require("minimatch");

const getFilePaths = (engineId, globPattern, globOptions, handleSuccess) => {
  if (engineId === "globby") {
    return globby(globPattern, globOptions)
      .then();
  } else if (engineId === "minimatch") {
  }
};

module.exports = {
  getFilePaths
};
