function sum_array_multidimention(ar){
    var res = [];
    for (var i = 0; i < ar_d[0].length; i++) {
        var t = 0;
        for (var l = 0; l < ar_d.length; l++) { t+=ar_d[l][i] }
        res.push(t);
    }
    return res;
}
