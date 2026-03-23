interface GetSpaceDepthStringProps {
    depth: number
}

/**
 * With this method we can get the separation text that s before the name of a file or folder.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * - depth: On this property you need to pass a number the depth that the file have.
 * 
 * @example
 * getSpaceDepthString({depth: 2});
 * 
 * @returns returns a string with the text of ' |______ '.
 */
export const getSpaceDepthString = ({ depth }: GetSpaceDepthStringProps): String => {
    let depthSeparationText = "";
    for (let spaceDepth = 0; spaceDepth < depth; spaceDepth++) {
        depthSeparationText += (spaceDepth == depth - 1) ? " |______ " : "         ";
    }
    return depthSeparationText;
}