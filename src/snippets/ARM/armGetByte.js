export default `

    .align	2
    .global	main

main:
    push {fp, lr}	
    add fp, sp, #0
    sub	sp, sp, #16	

    ldr	r0, enter_line_promptP 
    bl	puts				 

    mov	r1, #100			
    ldr	r0, inputCharsP		
    bl	get_line			

    mov r1, #0
    ldr r0, inputCharsP
    bl get_byte

    mov r1, r0
    ldr r0, byte_textP
    bl printf

    mov	r0, #0
    sub	sp, fp, #0			
    pop	{fp, pc}

    .align	2

inputCharsP: .word inputChars
enter_line_promptP: .word enter_line_prompt
byte_textP: .word byte_text

    .section	.rodata
    .align 	2

byte_text:
    .asciz "%d"
    .align 2

enter_line_prompt:
    .asciz	"Enter a line of input:"

    .data
    .align	2

inputChars:	.skip	100

`