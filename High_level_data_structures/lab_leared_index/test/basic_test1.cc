#include "test.h"

int main(int argc, char **argv) {
  int ret = 0;
  ret = test("uniform_10000");
  if (ret != -1) {
    std::cout << "test uniform_10000 passed" << std::endl;
  } else {
    std::cout << "test uniform_10000 failed" << std::endl;
  }
  ret = test("normal_10000");
  if (ret != -1) {
    std::cout << "test normal_10000 passed" << std::endl;
  } else {
    std::cout << "test normal_10000 failed" << std::endl;
  }
  return ret;
}
