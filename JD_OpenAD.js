//来自https://github.com/yichahucha/surge/issues/56

var obj = JSON.parse($response.body)
delete obj.images
$done({body: JSON.stringify(obj)})
