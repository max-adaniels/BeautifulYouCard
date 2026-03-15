document.addEventListener('DOMContentLoaded', () => {
const shareButton = document.getElementById('share-btn')

if (shareButton) {
shareButton.addEventListener('click', () => {
if (navigator.share) {
navigator.share({
title: 'Beautiful You PE',
text: 'Book your premium beauty services in Gqeberha',
url: window.location.href
})
}
})
}
})