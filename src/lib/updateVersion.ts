import fs from "fs";
import path from "path";
import packageJson from "../../package.json";

// read current version on package.json
const version = packageJson.version;
const content = `// ! Auto-generated. Do not edit manually.
export const APP_VERSION = "${version}";
`;

// patch to /lib/version.ts
const targetPath = path.join(__dirname, "version.ts");
fs.writeFileSync(targetPath, content);
console.log(`✅ Updated APP_VERSION to v.${version}`);
