function flipCard() {
    var card = document.getElementById('card');
    card.classList.toggle('flipped');
    card.classList.add('fullscreen');

    var insideContent = document.querySelector('.card .inside');
    if (!insideContent.classList.contains('visible')) {
        insideContent.classList.add('visible');
    }
}