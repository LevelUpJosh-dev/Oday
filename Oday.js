import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";

import { parse, stringify } from "https://deno.land/std@0.144.0/encoding/yaml.ts";

import { HomeShow } from "./controllers/Home.js";
import { AboutShow } from "./controllers/About.js";

const yamlString = await Deno.readTextFile("Oday.yaml");
window.Oday = parse(yamlString);

const server = opine();

server.use(staticFiles("public"));

server.get("/", async (request, response) => {
  response.body = await HomeShow();
  response.send();
});

server.get("/about", async (request, response) => {
  response.body = await AboutShow();
  response.send();
});

server.listen(3000);
