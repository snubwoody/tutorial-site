import {expect, test} from "vitest";
import {type LessonEntry, splitLessons} from "../lib";

test("Split collection entry",async () => {
    const entries: LessonEntry[] =[
        {
            id: "rust/smart-pointers/box",
            collection: "lessons",
            data: {title: "Box", course: {id: "rust", collection: "courses"}}
        },
        {
            id: "rust/smart-pointers/rc",
            collection: "lessons",
            data: {title: "Reference Counting", course: {id: "rust", collection: "courses"}}
        },
        {
            id: "rust/string-types/string",
            collection: "lessons",
            data: {title: "String", course: {id: "rust", collection: "courses"}}
        },
    ];
    const map = splitLessons(entries);

    let smartPointers = map.get("smart-pointers");
    let stringTypes = map.get("string-types");
    expect(smartPointers).toContain("box");
    expect(smartPointers).toContain("rc");
    expect(stringTypes).toContain("string");
})