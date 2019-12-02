import cWhileLoop from './snippets/cWhileloop' 
import armWhileLoop from './snippets/armWhileloop'
import armLocalVars from './snippets/armLocalVars'
import cLocalVars from './snippets/cLocalVars'

export default [
    { value: {'c': cWhileLoop, 'arm': armWhileLoop }, label: 'While Loop' },
    { value: {'c': cLocalVars, 'arm': armLocalVars }, label: 'Local Variables' },
];