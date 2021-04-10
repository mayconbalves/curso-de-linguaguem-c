#include <stdio.h>
#include <assert.h>

int returnDouble(int num) {
  return num * 2;
}



int main() {
  int num;
  printf("Digite um numero para saber o dobro: ");
  scanf("%d", &num);

  returnDouble(num);

  assert(10 == returnDouble(5));
  assert(6 == returnDouble(3));
  return 0;
}
