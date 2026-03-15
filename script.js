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
const userAgent = navigator.userAgent.toLowerCase()
const isAndroid = userAgent.indexOf('android') > -1

if (isAndroid) {
saveContactBtn.href = 'intent:#Intent;action=android.intent.action.INSERT;type=vnd.android.cursor.dir/contact;S.name=Beautiful%20You%20PE;S.company=Beautiful%20You;S.phone=+27415810444;S.secondary_phone=+27609555518;S.email=info@beautifulyou.co.za;end'
} else {
saveContactBtn.href = 'data:text/vcard;charset=utf-8,BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3ABeautiful%20You%20PE%0AORG%3ABeautiful%20You%0ATEL%3BTYPE%3DWORK%2CVOICE%3A%2B27415810444%0ATEL%3BTYPE%3DCELL%2CVOICE%3A%2B27609555518%0AEMAIL%3Ainfo%40beautifulyou.co.za%0AURL%3Ahttps%3A%2F%2Fwww.beautifulyou.co.za%2F%0AADR%3A%3B%3B141%20Heugh%20Road%3BWalmer%3BGqeberha%3B6070%3BSouth%20Africa%0AEND%3AVCARD'
}
}
})