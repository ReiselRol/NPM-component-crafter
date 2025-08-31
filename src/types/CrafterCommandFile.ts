import { FileType } from "../enums/FileType";

/**
 * With this interface we can get the information for the custom command.
 */
export interface CrafterCommandFile {
    /**
     * With this property we can know what kind of file type this file is.
     */
    type: FileType;
    /**
     * With this property we can know what is the file name.
     */
    name: string;
    /**
     * With this property we can know the content of the file, if the filetype
     * is a folder one this content gonna have the type of CrafterCommandFile[],
     * otherwise this content gonna be the file content.
     */
    content: string | CrafterCommandFile[];
}