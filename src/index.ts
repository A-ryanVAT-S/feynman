import { ensureSupportedNodeVersion } from "./system/node-version.js";

async function run(): Promise<void> {
	ensureSupportedNodeVersion();
	// alphaXiv login hints from the bundled alpha-hub then name `feynman alpha login`.
	process.env.ALPHA_HUB_CLI ??= "feynman alpha";
	const { main } = await import("./cli.js");
	await main();
}

run().catch((error) => {
	console.error(error instanceof Error ? error.message : String(error));
	process.exitCode = 1;
});
