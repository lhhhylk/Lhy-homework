cmake_minimum_required(VERSION 3.20)
project(median_selection)

set(CMAKE_CXX_STANDARD 23)

# Enable C++23 features (std::print requires this)
add_compile_definitions(__cpp_lib_print)

# Add executable
add_executable(median_selection
        median.cc
)

# Include current directory for headers
target_include_directories(median_selection PRIVATE ${CMAKE_CURRENT_SOURCE_DIR})

# Set compiler warnings
if(MSVC)
    target_compile_options(median_selection PRIVATE /W4 /WX)
else()
    target_compile_options(median_selection PRIVATE -Wall -Wextra -Werror -pedantic)
endif()
