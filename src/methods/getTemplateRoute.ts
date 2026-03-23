import path from "path";
import { getTemplateFolderRoute } from "./getTemplateFolderRoute";

interface GetTemplateRouteProps {
    templateName: string;
}

/**
 * With this method we can get the path of where is the templates of the choosen template.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * - templateName: On this property you need to pass an string name of the template.
 * 
 * @example
 * getTemplateRoute({templateName: "component"});
 * 
 * @returns returns the path of where is the templates of the choosen template.
 */
export const getTemplateRoute = ({templateName}: GetTemplateRouteProps): string => {
    const templatePath = getTemplateFolderRoute();
    return path.join(templatePath, templateName);

}