import path from "path";
import { getProjectRoot } from "./getProjectRoot"
import { ConfigTemplatesFolderName } from "../constants/ConfigTemplatesFolderName";

/**
 * With this method we can get the path of where is the templates of the project.
 * 
 * @example
 * getTemplateFolderRoute();
 * 
 * @returns returns the path of where is the templates of the project.
 */
export const getTemplateFolderRoute = (): string => {
    const projectRootPath = getProjectRoot();
    return path.join(projectRootPath, ConfigTemplatesFolderName);
}