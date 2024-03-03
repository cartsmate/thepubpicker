
def firstn_generator(n):
    num = 0
    while num < n:
        yield num
        num += 1


def singleline_generator(n):
    my_generator = (i for i in range(n) if i % 2 == 0)
    return my_generator


def singleline_list_generator(n):
    my_list = [i for i in range(n) if i % 2 == 0]
    return my_list


print(sum(firstn_generator(10)))
print(sum(singleline_generator(10)))
print(singleline_list_generator(10))
