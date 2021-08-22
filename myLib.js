function getCurrentDate(str) {
    var options = {month: 'long', day: 'numeric', year: 'numeric' }    
    var now = new Date().toLocaleDateString("vi-VN", options);
    return now;
}

exports.getCurrentDate = getCurrentDate