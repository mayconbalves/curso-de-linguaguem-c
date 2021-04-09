#include <stdio.h>
#include <assert.h>

int main (){

    int a, b, temp;
    a = 999;
    b = 555;

    //
    // Sua lógica
    //
    temp = a;     // registramos o valor de 'a' em 'temp'
    a    = b;     // sobrescrever 'a' com o valor de 'b'
    b    = temp;  // sobrescrever 'b' com o valor que era de 'a' (e foi registrado em 'temp')

    //
    // Testes
    //
    assert(a == 555);
    assert(b == 999);

    return 0;
}
