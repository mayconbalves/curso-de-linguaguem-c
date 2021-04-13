#include <stdio.h>



int main() {
  int num;

  printf("Digite um numero para saber seu antecessor e o seu sucessor ");
  scanf("%d", &num);

  printf("Numero antecessor: %d", num - 1);
  printf("\n");
  printf("Numero sucessor: %d", num + 1);

  return 0;
}
