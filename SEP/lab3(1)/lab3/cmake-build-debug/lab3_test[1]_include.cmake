if(EXISTS "C:/Users/96317/Desktop/Haoyu_Liu/homeworks/SEP/lab3-handout/cmake-build-debug/lab3_test[1]_tests.cmake")
  include("C:/Users/96317/Desktop/Haoyu_Liu/homeworks/SEP/lab3-handout/cmake-build-debug/lab3_test[1]_tests.cmake")
else()
  add_test(lab3_test_NOT_BUILT lab3_test_NOT_BUILT)
endif()
