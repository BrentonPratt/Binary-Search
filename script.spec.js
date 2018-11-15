let BinarySearch = require("../script");

describe('SearchService', function () {
    let search;

    beforeEach(function () {
        search = new BinarySearch;
    });

    describe('search', function () {
        it('should return the array position of found value', function () {
            let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            binarySearch(myArr, 9);
            expect(binarySearch(myArr, 9)).toEqual(8);
        });
        it('should return undefined if desired value is not found', function () {
            let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            binarySearch(myArr, 11);
            expect(binarySearch(myArr, 11)).toEqual(undefined);
        });
    });
});
