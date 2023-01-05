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
    ages_list = list(ages_set)
    oldest_age1 = None
    oldest_age2 = None
    age_table = list()
    oldest_age1 = max(ages_list)
    age_table.append(oldest_age1)
    ages_list.remove(oldest_age1)
    oldest_age2 = max(ages_list)
    age_table.append(oldest_age2)
    sort = tuple(sorted(age_table))
    return sort



print("should return, (8, 10) ----->,", two_oldest_ages([1, 2, 10, 8]))
print("should return, (9, 10) ----->,", two_oldest_ages([6, 1, 9, 10, 4]))
print("should return, (2, 5) ----->,", two_oldest_ages([1, 5, 5, 2])) 