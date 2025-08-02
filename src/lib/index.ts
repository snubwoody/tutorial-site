import type {CollectionEntry} from "astro:content";

export type LessonEntry = CollectionEntry<'lessons'>;

/**
 * Extract the sections and lessons from the lessons collection.
 * @param lessons An array of lesson entries.
 * @returns A map of the section id to an array of the lesson ids
 */
export const splitLessons = (lessons: LessonEntry[]) => {
    let map = new Map<string,string[]>();
    lessons.forEach(({id}) => {
        const split = id.split("/");
        const section = split[1];
        const lesson = split[2];
        let lessons = map.get(section);
        if (!lessons){
            map.set(section, [lesson]);
            return
        }
        lessons.push(lesson);
        map.set(section, lessons);
    });
    return map;
}