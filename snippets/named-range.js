var namedRanges = ['UID', 'Row4U'];

var rangeArray = [{
    name: 'UID',
    column: null
},
{
    name: 'people',
    column: null
}
];

/**
 * 
 * @param {array} ranges 
 * @param {*} sheet 
 */
function matchNamedRangesToSheet(ranges, sheet) {

    var sheetRanges = sheet.getNamedRanges();

    return ranges.map(function (range) {

        sheetRanges.filter(function (sheetRange) {
            if (range.name === sheetRange.getName()) {
                return range.column = sheetRange.getRange().getColumn();
            }
        });
        return range;
    });
}