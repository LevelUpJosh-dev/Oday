import { parse } from "https://deno.land/std@0.144.0/encoding/_yaml/parse.ts";

async function BuildDataModal () {
    const yamlString = await Deno.readTextFile("Oday.yaml");
    window.Oday = parse(yamlString);

    return window.Oday;
}

export { BuildDataModal };