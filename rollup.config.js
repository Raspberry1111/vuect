import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";


export default {
	
		input: "./src/index.ts",
		output: [
			{
				dir: "dist",
				format: "es",
			},
		],
	
		plugins: [
			json(),
			typescript(),
			babel({
				presets: ["@babel/preset-env"],
				extensions: [".ts"],
			}),
			terser(),
		],

};
