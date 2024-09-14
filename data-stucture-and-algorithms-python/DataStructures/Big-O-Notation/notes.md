BigO ---> def foo(array): size(array) -> 100 -> 0.22 milliseconds
                        size(array) -> 1000 -> 2.30 milliseconds
                        # time = a*n + b 
                        1. keep fastest growing term (a*n)
                        2. drop constants (i.e n)


O(n) ---> 