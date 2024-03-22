function toggleDisplay() {
    var test = document.getElementById('links');
    if (test.style.display == 'flex') {
        test.style.display = 'none';
    }
    else {
        test.style.display = 'flex';
    }
}