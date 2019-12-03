export default `
#include <stdio.h>

void print_dec(int dec) {
    printf("%d", dec);
}

int main()
{
    int dec = 100;
    print_dec(dec);

    return(0);
}
`