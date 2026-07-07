import fs from "node:fs";
import path from "node:path";

/** Checks whether a path under /public actually exists on disk, e.g. "/images/foo.png". */
export function assetExists(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}
