#include <stdio.h>
#include <assert.h>

int main() {
  int num;
  printf("Digite um numero qualquer ");
  scanf("%d", &num);

  if(num % 2 == 0) {
    printf("Seu numero e par");
  } else {
    printf("Seu numero e impar");
  }

  assert(10 % 2 == 0);
  assert(9 % 2 == 1);
  return 0;
}
