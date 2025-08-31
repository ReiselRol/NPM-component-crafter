/**
 * With this enum we can know what type
 * of file gonna create the custom command
 * from the settings file of the component
 * crafter.
 */
export enum FileType {
    /**
     * This enum property is for mark that the file type
     * is Folder.
     */
    Folder = "folder",
    /**
     * This enum property is for mark that the file type
     * is File.
     */
    File = "file"
}