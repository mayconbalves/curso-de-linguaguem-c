#include <stdio.h>
#include <assert.h>

int main() {
  int firstValue, secondValue, thirdValue;
  firstValue = 10;
  secondValue = 20;
  thirdValue = 30;

  printf("Media de 60 e %d", (firstValue + secondValue + thirdValue) / 3);

  assert((10 + 20 + 30) / 3 == 20);
  assert((10 + 10 + 10) / 3 == 10);

  return 0;
}
