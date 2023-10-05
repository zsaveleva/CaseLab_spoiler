const spoiler = document.getElementById('spoiler')

document.getElementById('myBtn').addEventListener('click', function () {

    if (spoiler.classList.contains('closed')) {
        spoiler.classList.remove('closed')
    } else {
        spoiler.classList.add('closed')
    }
})

window.onkeydown = function (event) {
    if (event.key === 'Escape' && !spoiler.classList.contains('closed')) {
        spoiler.classList.add('closed')
    }
}