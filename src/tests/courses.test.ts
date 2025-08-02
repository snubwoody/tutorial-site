import {expect, test} from "vitest";

test("Courses collection",async () => {
    const {getCollection,getEntry} = await import("astro:content");
    const courses = await getCollection("courses");
    const lessons = await getCollection("lessons");
    console.log(courses,lessons);
})