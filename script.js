document.addEventListener('DOMContentLoaded', () => {
const shareButton = document.getElementById('share-btn')
const saveContactBtn = document.getElementById('save-contact-btn')

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

if (saveContactBtn) {
saveContactBtn.addEventListener('click', (e) => {
e.preventDefault()
const vcard = "BEGIN:VCARD\nVERSION:3.0\nFN:Beautiful You PE\nORG:Beautiful You\nTEL;TYPE=WORK,VOICE:+27415810444\nTEL;TYPE=CELL,VOICE:+27609555518\nEMAIL:info@beautifulyou.co.za\nURL:https://www.beautifulyou.co.za/\nADR:;;141 Heugh Road;Walmer;Gqeberha;6070;South Africa\nEND:VCARD"
const blob = new Blob([vcard], { type: 'text/vcard' })
const url = window.URL.createObjectURL(blob)
const link = document.createElement('a')
link.href = url
link.download = 'BeautifulYou.vcf'
document.body.appendChild(link)
link.click()
document.body.removeChild(link)
window.URL.revokeObjectURL(url)
})
}
})