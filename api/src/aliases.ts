import moduleAlias from "module-alias";
import path from "path";

const IS_DEV = process.env.TS_NODE_DEV;

const rootPath = path.resolve(__dirname, '..');
const rootPathDev = path.resolve(rootPath, 'src');
const rootPathProd = path.resolve(rootPath, 'dist');
const baseAliasesPath = IS_DEV ? rootPathDev : rootPathProd;

moduleAlias.addAliases({
  '@api': `${baseAliasesPath}/api`,
  '@application': `${baseAliasesPath}/application`,
  '@infrastructure': `${baseAliasesPath}/infrastructure`,
});