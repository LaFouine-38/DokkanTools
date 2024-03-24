function camelToSnake(str) {
    return str.replace(/[A-Z]/g, function(match) {
        return "_" + match.toLowerCase()
    }).slice(1);
}

function getItemTableFromType(type) {
    let tableName = type
    if (type === 'SD::Pack') {
        tableName = tableName.replace(/::/g, '_');
    } else {
        tableName = camelToSnake(type)
        tableName = tableName.replace(/::[A-Aa-z_]+/g, 's');
    }
    tableName = tableName.replace(/Item$/, '_items'); 
    tableName = tableName.replace(/s$/, ''); 
    tableName = tableName + "s";
    tableName = tableName.replace(/ys$/, 'ies')
    return tableName.toLowerCase();
}

module.exports = { getItemTableFromType }