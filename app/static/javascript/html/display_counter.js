function display_counter(counter) {
    console.log('inside display counter: ' + counter)
    document.getElementById("digit_100000").textContent = counter.substring(0,1)
    document.getElementById("digit_10000").textContent = counter.substring(1,2)
    document.getElementById("digit_1000").textContent = counter.substring(2,3)
    document.getElementById("digit_100").textContent = counter.substring(3,4)
    document.getElementById("digit_10").textContent = counter.substring(4,5)
    document.getElementById("digit_1").textContent = counter.substring(5,6)
}
