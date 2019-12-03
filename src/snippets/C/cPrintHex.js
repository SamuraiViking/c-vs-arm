export default `
#include <stdio.h>

void print_hex(int dec) {
    printf("%x", dec);
}

int main()
{
    int dec = 100;
    print_hex(dec);

    return(0);
}
`