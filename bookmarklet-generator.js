const fs = require("fs").promises;

const readFile = async (file) => {
  return await fs
    .readFile(file, "utf-8")
    .then(async (buf) => {
      const script =
        "javacript:(function(){" + buf.replace(/\r?\n/g, "") + "})();";
      await fs.writeFile("./dist/bookmarklet.js", script).catch((err) => {
        console.log("fail", err.toString());
        return false;
      });
      console.log("*** COPY and PASTE your bookmark ***");
      console.log("");
      console.log(script);
      console.log("");
      console.log("************************************");
      return true;
    })
    .catch((err) => {
      console.log("fail", err.toString());
      return false;
    });
};

readFile("./dist/index.min.js");
