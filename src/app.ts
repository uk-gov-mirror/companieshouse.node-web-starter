import * as express from "express";
import * as nunjucks from "nunjucks";
import * as path from "path";
import router from "./routers";

const app = express();

const viewPath = path.join(__dirname, "views");
console.log(viewPath);

// set up the template engine
const env = nunjucks.configure([
  viewPath,
  "node_modules/govuk-frontend/",
  "node_modules/govuk-frontend/components"
], {
  autoescape: true,
  express: app
});

app.set("views", viewPath);
app.set("view engine", "html");

// add global variables to all templates
env.addGlobal("PIWIK_URL", "https://example.com");
env.addGlobal("PIWIK_SITE_ID", "123");

// apply our default router to /
app.use("/", router);

export default app;
