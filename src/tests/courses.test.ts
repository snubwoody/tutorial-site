import {expect, test} from "vitest";
import {getCollection,getEntry} from "astro:content";

test("Courses collection",async () => {
    const courses = await getCollection("courses");
    const fonts = await getCollection("fonts");
    console.log(fonts);
    console.log(courses);
})