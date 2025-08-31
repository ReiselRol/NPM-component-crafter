/**
 * With this method we can get the path of where is the project.
 * 
 * @example
 * getProjectRoot();
 * 
 * @returns returns the path of where is the project.
 */
export const getProjectRoot = (): string => {
    let projectRoot: string = "";

    projectRoot = process.argv[1].replace('\\node_modules\\component-crafter\\dist\\index.js', '');

    return projectRoot;
}