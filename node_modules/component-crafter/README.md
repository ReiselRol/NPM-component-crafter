# Component Crafter

Component Crafter is a tool that allows you to create custom commands to generate templates for files and folders in your project. With Component Crafter, you can streamline your workflow by automating the creation of common structures and boilerplate code, saving you time and effort.

# Installation

## Downloading the Package

You can install Component Crafter via npm:

~~~
npm install component-crafter --save-dev
~~~

or you can install Component Crafter via yarn:

~~~
yarn add -D component-crafter
~~~

**IMPORTANT: THIS PACKAGE DON'T WORK WHEN IS GLOBALLY INSTALLED**

## Inizializing the Component Crafter

After you have installed your package in your project, you should run the command yarn crafter init to create the template configuration file.

You can inizialize Component Crafter via npm:

~~~
npm run crafter init
~~~

or you can inizialize Component Crafter via yarn:

~~~
yarn crafter init
~~~

Once this is done, it will create a file which should be in the root of the project named *'.component-crafter-config.json'*. This file is important and should not be deleted.

# Usage

## Creating new command for a template

First of all, all configurations are done within the file named '.component-crafter-config.json' that we created earlier. The structure of the file should be as follows:

~~~
{
    "commands": [
        ...
    ]
}
~~~

To create a new command, we must create an object within the array of 'commands' that has the following properties:

~~~
{
    "name": "your custom command name",
    "description": "your custom command description",
    "startingPath": [],
    "scaffold": []
}
~~~

| Property Name | Description | Example |
|---------------|-------------|---------|
| "name"          | The custom command name. | **"component"** |
| "description"          | The custom command description. | **"A command for make a react component."** |
| "startingPath" | Where the command will start creating files and folders. This path starts from the root of the project. | **[ "src", "components"]** <br><br> (This indicates that it will start from the root, then proceed to the 'src' folder, and within that folder, it will continue to 'components' where it will create the scaffold.) |
| "scaffold" | The files and folders it will create. | [ ]|

## Customizing the Scaffold

Once we have created the command, we need to define the scaffold, which is the tree structure of folders and files that we want to create each time we execute that command.

We will start with the following example:

~~~
{
    "commands": [
        {
            "name": "web",
            "description": "this command will create an html file inside a folder.",
            "startingPath": [],
            "scaffold": []
        }
    ]
}
~~~

To begin, before creating a file or a folder, we need the following three properties:

~~~
{
    "name": "folder/file name",
    "type": "file" for files / "folder" for folder ,
    "content": "" for files / [] for folder,
}
~~~

| Property Name | Description | Example |
|---------------|-------------|---------|
| "name"          | The name for the file or folder. | **"coolFolder"** <br><br>Remember if you want to make a file you need to put the extennsion like *.html* and if you want to pass the name via command you need to put *\|SPECIAL\|*.|
| "type" | The type of element you are creating (file or folder). | **"folder"** for folders and **"file"** for files. |
| "content" | The content of the file or folder. | **"Im a file content :)"** this is for files and you need to put the string of the content. this content accepts too the *\|SPECIAL\|*. <br><br> **[ ]** this is an array of objects that can be other folders or files. |


Now we will create an empty folder within the *html* command, for make that we need to make the next object inside the *scaffold*:

~~~
{
    "name": "|SPECIAL|",
    "type": "folder",
    "content": [],
}
~~~

This folder has the name that you will pass on your command, later this will we explained on the *Execute a new custom command*.

This folder need to be inside the scaffold:

~~~
{
    "commands": [
        {
            "name": "web",
            "description": "this command will create an html file inside a folder.",
            "startingPath": [],
            "scaffold": [
                {
                    "name": "|SPECIAL|",
                    "type": "folder",
                    "content": [],
                }
            ]
        }
    ]
}
~~~

For finally the example we gonna add the file inside the content of the folder:

~~~
{
    "commands": [
        {
            "name": "web",
            "description": "this command will create an html file inside a folder.",
            "startingPath": [],
            "scaffold": [
                {
                    "name": "|SPECIAL|",
                    "type": "folder",
                    "content": [
                        {
                            "name": "|SPECIAL|.html",
                            "type": "file",
                            "content": "<html><head><title>|SPECIAL|</title></head><body></body</html>"
                        }
                    ],
                }
            ]
        }
    ]
}
~~~

## Execute a new custom command

Once we have our commands set up and we want to execute them, we should do the following:

On yarn:

~~~
yarn crafter customCommandName specialParameter
~~~

On npm:

~~~
npm run crafter customCommandName specialParameter
~~~

You will need to replace the `customCommandName` with the name of your command and if you are using the `"|SPECIAL|"` you need to replace the `specialParameter` with the name example:

~~~
yarn crafter web Cool
~~~

Following the example of *Customizing the Scaffold* this will create a folder with name 'Cool' and inside the folder will be a file named 'Cool.html'

~~~
    Cool
     |____Cool.html
~~~