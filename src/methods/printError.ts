import { printTitle } from "./printTitle";

interface PrintErrorProps {
    message: string;
}

/**
 * With this function we can print some error message on the terminal.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * - message: On this property you need to pass an string of what you want to print on console.
 * 
 * @example
 * printError({ message: "File not found" });
 */
export const printError = ({ message }: PrintErrorProps) => {
    printTitle()
    console.log("");
    console.log(message);
    console.log("");
    console.log('\x1b[31m', "____________________________________________________________________________________");
    console.log('\x1b[31m', "|_|                                                                              |_|");
    console.log('\x1b[31m', "|_           A C T I O N   F I N I S H E D   W I T H   A N   E R R O R            _|");
    console.log('\x1b[31m', "|_|______________________________________________________________________________|_|");
    console.log('\x1b[0m', "");
    console.log('\x1b[0m', "");
    console.log('\x1b[0m', "");
}