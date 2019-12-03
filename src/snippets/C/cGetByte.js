export default `
#include <stdio.h>

char get_byte(char * str, int index) {
    return str[index];
}

int main()
{
    char inputChars[99];
    char * b = inputChars;
    size_t bufsize = 99;

    printf("Enter a line of input: \\n");
    getline(&b,&bufsize,stdin);

    char byte = get_byte(inputChars, 0);
    printf("%c", byte);

    return(0);
}
`