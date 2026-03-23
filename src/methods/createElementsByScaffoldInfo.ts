import path from "path";
import fs from "fs-extra";
import { FileType } from "../enums/FileType";
import type { CrafterCommandFile } from "../types/CrafterCommandFile";
import { getConfigFile } from "./getConfigFile";
import { recursiveFileCreator } from "./recursiveFileCreator";
import { getSpaceDepthString } from "./getSpaceDepthString";
import { replaceSpecialProperty } from "./replaceSpecialProperty";

const { ensureDirSync, writeFileSync } = fs;

interface CreateElementsByScaffoldInfoProps {
    startingPath: string,
    depth?: number,
    scaffold: CrafterCommandFile[]
}

/**
 * With this recursive method we can create all the files and folders off the passed scaffoled information
 * starting from the starting path.
 * 
 * @param Object On this param you must pass an object with two or three property: <br></br>
 * - scaffold: On this property you need to pass an array of instanced objects of CrafterCommandFile.
 * - startingPath: On this property you need to pass an string of the starting path of the command.
 * - depth: On this property you need to pass the depth level you have on the file recursion, starting with 0, depth (Optional): in normal scenarios you don't need to pass this property. the default value is 0.
 * @example
 * recursiveFileCreator({scaffold: [CrafterCommandFileObjectIntanced], startingPath: "", depth: 0});
 * 
 * @returns returns and string for print on console the recursivity of the creation
 * of the files.
 */
export const createElementsByScaffoldInfo = ({scaffold, startingPath, depth = 0}: CreateElementsByScaffoldInfoProps): string => {

    const extraDetails = getConfigFile().showExtraDetails;

    let textOfTheCreation = "";

    for (let eachElement = 0; eachElement < scaffold.length; eachElement++) {
        const elementSelected = scaffold[eachElement];
        let textOfTheCreationContext = "";
            if (elementSelected.type != undefined && elementSelected.name != undefined && elementSelected.name.length > 0) {

                let fileName = replaceSpecialProperty({stringToReplace: elementSelected.name});
                const newStartingPath = path.join(startingPath, fileName);

                if (elementSelected.type == FileType.Folder) {
                    textOfTheCreationContext = "\n" + getSpaceDepthString({depth}) + fileName;
                    ensureDirSync(newStartingPath);

                    if (Array.isArray(elementSelected.content)) {
                        textOfTheCreationContext += recursiveFileCreator({
                            scaffold: elementSelected.content,
                            startingPath: newStartingPath,
                            depth: depth + 1
                        })
                    }
                }
                else if (elementSelected.type == FileType.File && typeof elementSelected.content === "string") {
                    textOfTheCreationContext = "\n" + getSpaceDepthString({depth}) + fileName;
                    if (extraDetails == true) textOfTheCreationContext += " ( " + newStartingPath + " ).";
                    let content = replaceSpecialProperty({stringToReplace: elementSelected.content});
                    writeFileSync(newStartingPath, content);
                }
            }
            textOfTheCreation += textOfTheCreationContext;
    }

    return textOfTheCreation;
}