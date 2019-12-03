import cWhileLoop from './snippets/C/cWhileloop' 
import armWhileLoop from './snippets/ARM/armWhileloop'
import armLocalVars from './snippets/ARM/armLocalVars'
import cLocalVars from './snippets/C/cLocalVars'
import cHelloWorld from './snippets/C/cHelloWorld'
import armHelloWorld from './snippets/ARM/armHelloWorld'
import armGetLine from './snippets/ARM/armGetLine'
import cGetLine from './snippets/C/cGetLine'
import cPutByte from './snippets/C/cPutByte'
import armPutByte from './snippets/ARM/armPutByte'
import cPrintDec from './snippets/C/cPrintDec'
import armPrintDec from './snippets/ARM/armPrintDec'
import cPrintHex from './snippets/C/cPrintHex' 
import armPrintHex from './snippets/ARM/armPrintHex' 
import cGetByte from './snippets/C/cGetByte'
import armGetByte from './snippets/ARM/armGetByte'
import cInputOutput from './snippets/C/cInputOutput'
import armInputOutput from './snippets/ARM/armInputOutput'
import cGuard from './snippets/C/cGuard'
import armGuard from './snippets/ARM/armGuard'

export default [
    { value: {'c': cHelloWorld, 'arm': armHelloWorld}, label: 'Hello World'},
    { value: {'c': cPrintDec, 'arm': armPrintDec}, label: 'Print Dec'},
    { value: {'c': cPrintHex, 'arm': armPrintHex}, label: 'Print Hex'},
    { value: {'c': cGetLine, 'arm': armGetLine }, label: 'Get Line'},
    { value: {'c': cGetByte, 'arm': armGetByte }, label: 'Get Byte'},
    { value: {'c': cPutByte, 'arm': armPutByte}, label: 'Put Byte'},
    { value: {'c': cInputOutput, 'arm': armInputOutput}, label: 'Input Output'},
    { value: {'c': cLocalVars, 'arm': armLocalVars }, label: 'Local Variables' },
    { value: {'c': cWhileLoop, 'arm': armWhileLoop }, label: 'While Loop' },
    { value: {'c': cGuard, 'arm': armGuard }, label: 'Guards' },
];