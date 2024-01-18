def two_oldest_ages(ages):
    """Return two distinct oldest ages as tuple (second-oldest, oldest)..

        >>> two_oldest_ages([1, 2, 10, 8])
        (8, 10)

        >>> two_oldest_ages([6, 1, 9, 10, 4])
        (9, 10)

    Even if more than one person has the same oldest age, this should return
    two *distinct* oldest ages:

        >>> two_oldest_ages([1, 5, 5, 2])
        (2, 5)
    """

    # NOTE: don't worry about an optimized runtime here; it's fine if
    # you have a runtime worse than O(n)

    # NOTE: you can sort lists with lst.sort(), which works in place (mutates);
    # you may find it helpful to research the `sorted(iter)` function, which
    # can take *any* type of list-like-thing, and returns a new, sorted list
    # from it.
    ages_set = set(ages)
    oldest_age = None
    scnd_oldest_age = None

    oldest_age = max(ages_set)
    ages_set.remove(oldest_age)
    scnd_oldest_age = max(ages_set)

    return (scnd_oldest_age, oldest_age)



print("should return, (8, 10) ----->,", two_oldest_ages([1, 2, 10, 8]))
print("should return, (9, 10) ----->,", two_oldest_ages([6, 1, 9, 10, 4]))
print("should return, (2, 5) ----->,", two_oldest_ages([1, 5, 5, 2])) 