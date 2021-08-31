const icons = Array.from(document.querySelectorAll('.icon'));

let currentDivEl = document.querySelector('div[contenteditable="true"]:nth-child(1n)');

let bold = false;
let italic = false;
let underline = false;

Array.from(document.querySelectorAll('div[contenteditable="true"')).forEach((div) => {
    div.addEventListener('focus', () => {
        currentDivEl = div;
    });
});

icons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const action = icon.dataset.action;

        let tag;

        switch (action) {
            case 'bold':
                tag = 'strong';
                break;

            case 'italic':
                tag = 'em';
                break;

            case 'underline':
                tag = 'span style="text-decoration: underline"';
                break;

            case 'list':
                tag = 'li';
                break;

            default:
                tag = null;
                break;
        }

        const selectedText = document.getSelection().toString();

        if (tag == 'span style="text-decoration: underline"') {                                                   
            currentDivEl.innerHTML = currentDivEl.innerHTML.replace(selectedText, `<${tag}>${selectedText}</span><span>&nbsp;</span>`);
        } else if (tag == 'li') {
            currentDivEl.innerHTML = currentDivEl.innerHTML.replace(selectedText, `\u2022 ${selectedText}`);
        } else {
            currentDivEl.innerHTML = currentDivEl.innerHTML.replace(selectedText, `<${tag}>${selectedText}</${tag}><span>&nbsp;</span>`);
        }

    });
})
