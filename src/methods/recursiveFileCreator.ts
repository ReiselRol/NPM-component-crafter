import path from "path";
import { FileType } from "../enums/FileType";
import { CrafterCommandFile } from "../types/CrafterCommandFile";
import { getCommandSpecialProperty } from "./getCommandSpecialProperty";
import { getConfigFile } from "./getConfigFile";
import { ensureDirSync, writeFileSync } from "fs-extra";

interface RecursiveFileCreatorProps {
    startingPath: string,
    depth?: number,
    scaffold: CrafterCommandFile[]
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
    const specialProperty = getCommandSpecialProperty();
    const extraDetails = getConfigFile().showExtraDetails;

    for (let eachElement = 0; eachElement < scaffold.length; eachElement++) {

        const elementSelected = scaffold[eachElement];
        let textOfTheCreationContext = ""

        if (elementSelected.type != undefined && elementSelected.name != undefined && elementSelected.name.length > 0) {

            let fileName = (specialProperty == undefined) ? elementSelected.name : elementSelected.name.replace("|SPECIAL|", specialProperty);
            const newStartingPath = path.join(startingPath, fileName);

            if (elementSelected.type == FileType.Folder) {
                textOfTheCreationContext = "\n";
                for (let spaceDepth = 0; spaceDepth < depth; spaceDepth++) textOfTheCreationContext += (spaceDepth == depth - 1) ? " |______ " : "         ";
                textOfTheCreationContext += fileName;
                ensureDirSync(newStartingPath);

                if (Array.isArray(elementSelected.content)) {
                    textOfTheCreationContext += recursiveFileCreator({
                        scaffold: elementSelected.content,
                        startingPath: newStartingPath,
                        depth: depth + 1
                    })
                }
            }
            else if (elementSelected.type == FileType.File) {
                textOfTheCreationContext = "\n";
                for (let spaceDepth = 0; spaceDepth < depth; spaceDepth++) textOfTheCreationContext += (spaceDepth == depth - 1) ? " |______ " : "         ";
                textOfTheCreationContext += fileName;
                if (extraDetails == true) textOfTheCreationContext += " ( " + newStartingPath + " ).";
                let content = (specialProperty == undefined) ? elementSelected.content as string : (elementSelected.content as string).replace("|SPECIAL|", specialProperty);
                writeFileSync(newStartingPath, content);
            }
        }
        textOfTheCreation += textOfTheCreationContext;
    }

    return textOfTheCreation;
}