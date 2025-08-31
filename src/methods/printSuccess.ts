import { printTitle } from "./printTitle";

interface PrintSuccessProps {
    message: string;
}

/**
 * With this function we can print some successfully message on the terminal.
 * 
 * @param Object On this param you must pass an object with one property: <br></br>
 * - message: On this property you need to pass an string of what you want to print on console.
 * 
 * @example
 * printSuccess({ message: "File was created successfully!" });
 */
export const printSuccess = ({ message }: PrintSuccessProps) => {
    printTitle()
    console.log("");
    console.log(message);
    console.log("");
    console.log('\x1b[32m', "____________________________________________________________________________________");
    console.log('\x1b[32m', "|_|                                                                              |_|");
    console.log('\x1b[32m', "|_           A C T I O N   F I N I S H E D   S U C C E S S F U L L Y              _|");
    console.log('\x1b[32m', "|_|______________________________________________________________________________|_|");
    console.log('\x1b[0m', "");
    console.log('\x1b[0m', "");
    console.log('\x1b[0m', "");
}