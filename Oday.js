import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";

import { BuildDataModal, EnableSherlock } from "./helpers/Helpers.js";

import { AboutShow } from "./controllers/About.js";
import { HomeShow } from "./controllers/Home.js";
import { DenoInfoShow } from "./controllers/Deno.js";

await BuildDataModal();

if (window.Oday.Sherlock.enabled) {
  window.Sherlock = await EnableSherlock();
}

const server = opine();

server.use(staticFiles("public"));

server.get("/", async (_request, response) => {
  response.body = await HomeShow();
  response.send();
});

server.get("/about", async (_request, response) => {
  response.body = await AboutShow();
  response.send();
});

server.get("/denoInfo", async (_request, response) => {
  response.body = await DenoInfoShow();
  response.send();
});

server.listen(3000);
