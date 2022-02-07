const fs = require('fs');

interface Props{
  /**
   * Regex to match file, like /\.svg$/
   */
  match: RegExp | RegExp[];
  /**
   * exclude file 
   */
  exclude?: RegExp | RegExp[];
}

interface ReturnValue{
  code?: string;
}

export default function ({match, exclude}: Props) {
  return {
    name: 'vite-plugin-raw',
    async transform (_: string, id: string): Promise<ReturnValue> {
      const files = Array.isArray(match) ? match : [match];
      const excludes = exclude ? (Array.isArray(exclude) ? exclude : [exclude]) : exclude;
      const excludeBool = excludes ? !(excludes.find((v) => v.test(id))) : !excludes;
      const isRaw = id.endsWith("?raw");
      if ((files.find((v) => v.test(id)) && excludeBool) || isRaw) {
        if (isRaw) {
          id = id.replace("?raw", "");
        }
        const buf = fs.readFileSync(id);
        return {
          code: `export default \`${buf}\``
        };
      } else {
        return {};
      }
    }
  }
}