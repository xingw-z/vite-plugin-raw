const fs = require("fs");
function main({ match, exclude }) {
  return {
    name: "vite-plugin-raw",
    async transform(_, id) {
      const files = Array.isArray(match) ? match : [match];
      const excludes = exclude ? Array.isArray(exclude) ? exclude : [exclude] : exclude;
      const excludeBool = excludes ? !excludes.find((v) => v.test(id)) : !excludes;
      if (files.find((v) => v.test(id)) && excludeBool) {
        const buf = fs.readFileSync(id);
        return {
          code: `export default \`${buf}\``
        };
      } else {
        return {};
      }
    }
  };
}
export { main as default };
