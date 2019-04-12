function RichResult (result) {
    this._me = this;
    this.metadata = result.metaData.map(value =>  value["name"]);
    this.rows = new RichRows(result.rows, this._me)
}

RichResult.prototype.getField = function(rowNumber, fieldName) {
    if(rowNumber >= this.rows.length) return undefined;

    let fieldIndex = this.metadata.indexOf(fieldName.toUpperCase());
    if (fieldIndex < 0) return undefined;

    return this.rows[rowNumber].all[fieldIndex];
};

function RichRows(rows, richResultFather) {
    let richRows = [];
    rows.forEach((row, index) => {
        let richRow = {};
        richRow.all = row;
        richRow.getField = function(fieldName) {
            return richResultFather.getField(index, fieldName)
        };
        richRows.push(richRow);
    });
    return richRows;
}

module.exports.RichResult = RichResult;