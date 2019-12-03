export default `
#include <stdio.h>

int main()
{
    printf("Enter a line of input:\\n");

    char inputChars[99];
    char * b = inputChars;
    int bufsize = 99;
    getline(&b,&bufsize,stdin);
    
    printf("%s",inputChars);

    return(0);
}
`