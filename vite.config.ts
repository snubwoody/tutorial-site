/// <reference types="vitest"/>
import {getViteConfig} from "astro/config";

export default getViteConfig({
    test: {
        exclude: ["e2e","node_modules",".vercel","dist"],
        include: ["src/**/*.test.ts"]
    }
});