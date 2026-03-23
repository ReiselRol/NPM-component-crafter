import { CrafterCommandScaffoldType } from "../types/CrafterCommandScaffoldType";
import { checkIfThisScaffoldIsATemplate } from "./checkIfThisScaffoldIsATemplate";
import { createElementsByScaffoldInfo } from "./createElementsByScaffoldInfo";
import { createElementsByScaffoldTemplate } from "./createElementsByScaffoldTemplate";

interface RecursiveFileCreatorProps {
    startingPath: string,
    depth?: number,
    scaffold: CrafterCommandScaffoldType
}

/**
 * With this recursive method we can create all the files and folders off the passed scaffoled
 * starting from the starting path.
 * 
 * @param Object On this param you must pass an object with two or three property: <br></br>
 * - scaffold: On this property you need to pass an array of insta nced objects of CrafterCommandFile.
 * - startingPath: On this property you need to pass an string of the starting path of the command.
 * - depth (Optional): In normal scenarios you don't need to pass this property. the default value is 0.
 * 
 * @example
 * recursiveFileCreator({scaffold: [CrafterCommandFileObjectIntanced], startingPath: ""});
 * 
 * @returns returns and string for print on console the recursivity of the creation
 * of the files.
 */
export const recursiveFileCreator = ({ scaffold, startingPath, depth = 0 }: RecursiveFileCreatorProps): string => {

    let textOfTheCreation = "";

    if (checkIfThisScaffoldIsATemplate({scaffoldToCheck: scaffold}) && typeof scaffold === "string") {
        textOfTheCreation += createElementsByScaffoldTemplate({ scaffold, startingPath, depth });
    } else if (typeof scaffold !== "string") {
        textOfTheCreation += createElementsByScaffoldInfo({ scaffold, startingPath, depth });
    }

    return textOfTheCreation;
}