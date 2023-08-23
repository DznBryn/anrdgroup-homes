import { logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";
import DEV_ENV from './env'
if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => {
    return (process.env.NODE_ENV === "development") ? { env: { ...context.env, ...DEV_ENV} } :{ env: context.env }
  },
  mode: process.env.NODE_ENV,

});
