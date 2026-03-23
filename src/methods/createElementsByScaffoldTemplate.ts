import path from "path";
import fs from "fs-extra";
import { getConfigFile } from "./getConfigFile";
import { getTemplateRoute } from "./getTemplateRoute";
import { getSpaceDepthString } from "./getSpaceDepthString";
import { replaceSpecialProperty } from "./replaceSpecialProperty";

const { ensureDirSync, readFileSync, readdirSync, writeFileSync } = fs;

interface CreateElementsByScaffoldTemplateProps {
    startingPath: string,
    depth?: number,
    contentPath?: string,
    scaffold: string
}

/**
 * With this recursive method we can create all the files and folders off the passed scaffoled template name
 * starting from the starting path.
 * 
 * @param Object On this param you must pass an object with two or three property: <br></br>
 * - scaffold: On this property you need to pass an string name of the template.
 * - startingPath: On this property you need to pass an string of the starting path of the command.
 * - depth: On this property you need to pass the depth level you have on the file recursion, starting with 0, depth (Optional): in normal scenarios you don't need to pass this property. the default value is 0.
 * @example
 * recursiveFileCreator({scaffold: "component", startingPath: "", depth: 0});
 * 
 * @returns returns and string for print on console the recursivity of the creation
 * of the files.
 */
export const createElementsByScaffoldTemplate = ({scaffold, startingPath, contentPath = "", depth = 0}: CreateElementsByScaffoldTemplateProps): string => {
    const extraDetails = getConfigFile().showExtraDetails;

    let textOfTheCreation = "";
    contentPath = (contentPath == "") ? getTemplateRoute({templateName: scaffold}) : contentPath;

    const filesAndFolders = readdirSync(contentPath, { withFileTypes: true, recursive: false });

    filesAndFolders.filter(eachElement => eachElement.isDirectory()).map(eachFolder => {
        let filename = replaceSpecialProperty({ stringToReplace: eachFolder.name });
        let newContentPath = path.join(contentPath, filename);
        let newStartingPath = path.join(startingPath, filename);
        textOfTheCreation = "\n" + getSpaceDepthString({depth}) + filename;
        ensureDirSync(newStartingPath);
        textOfTheCreation += createElementsByScaffoldTemplate({
            scaffold,
            startingPath: newStartingPath,
            contentPath: newContentPath,
            depth: depth + 1
        });
    });

    filesAndFolders.filter(eachElement => eachElement.isFile()).map(eachFile => {
        let rawFileName = eachFile.name;
        let filename = replaceSpecialProperty({ stringToReplace: eachFile.name });
        let newContentPath = path.join(contentPath, rawFileName);
        let newStartingPath = path.join(startingPath, filename);
        ensureDirSync(startingPath);
        let content = replaceSpecialProperty({ stringToReplace: readFileSync(newContentPath, "utf-8")});
        textOfTheCreation += "\n" + getSpaceDepthString({depth}) + filename;
        if (extraDetails == true) textOfTheCreation += " ( " + newStartingPath + " ).";
        writeFileSync(newStartingPath, content);
    });

    return textOfTheCreation;
}