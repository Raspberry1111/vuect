import dts from "rollup-plugin-dts";

module.exports = {
	input: "./dist/types/src/index.d.ts",
	output: [{ file: "dist/types/index.d.ts", format: "es" }],
	plugins: [dts()],
};
