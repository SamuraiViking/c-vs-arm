export default `
#include <stdio.h>

void put_byte(char * str, int index, char c) {
    str[index] = c;
}

int main()
{
    char inputChars[99];
    char * b = inputChars;
    size_t bufsize = 99;

    printf("Enter a line of input: \\n");
    getline(&b,&bufsize,stdin);

    put_byte(inputChars, 0, 'I');
    printf("%s", inputChars);

    return(0);
}
`