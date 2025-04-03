cmake_minimum_required(VERSION 3.10)
project(rbtree)

set(CMAKE_CXX_STANDARD 17)

# Add executable
add_executable(rbtree
        rbtree.cpp
        main.cpp
)

# Include current directory for headers
target_include_directories(rbtree PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})
