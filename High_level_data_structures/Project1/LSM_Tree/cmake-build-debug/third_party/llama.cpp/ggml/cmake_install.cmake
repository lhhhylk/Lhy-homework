# Install script for directory: C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "C:/Program Files (x86)/LSM_TREE")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Debug")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

# Set path to fallback-tool for dependency-resolution.
if(NOT DEFINED CMAKE_OBJDUMP)
  set(CMAKE_OBJDUMP "C:/WinGw64/mingw64/bin/objdump.exe")
endif()

if(NOT CMAKE_INSTALL_LOCAL_ONLY)
  # Include the install script for the subdirectory.
  include("C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/cmake-build-debug/third_party/llama.cpp/ggml/src/cmake_install.cmake")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/cmake-build-debug/third_party/llama.cpp/ggml/src/ggml.a")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-cpu.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-alloc.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-backend.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-blas.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-cann.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-cpp.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-cuda.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-kompute.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-opt.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-metal.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-rpc.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-sycl.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/ggml-vulkan.h"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/third_party/llama.cpp/ggml/include/gguf.h"
    )
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE STATIC_LIBRARY FILES "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/cmake-build-debug/third_party/llama.cpp/ggml/src/ggml-base.a")
endif()

if(CMAKE_INSTALL_COMPONENT STREQUAL "Unspecified" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/cmake/ggml" TYPE FILE FILES
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/cmake-build-debug/third_party/llama.cpp/ggml/ggml-config.cmake"
    "C:/Users/96317/Desktop/homework/High_level_data_structures/Project1/LSM_Tree/cmake-build-debug/third_party/llama.cpp/ggml/ggml-version.cmake"
    )
endif()

