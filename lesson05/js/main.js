const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    let mychapt = input.value;
    input.value = '';

    const chaptlist = document.createElement('li');
    const text = document.createElement('span');
    const btn= document.createElement('button');

    chaptlist.appendChild(text);
    text.textContent = mychapt;
    chaptlist.appendChild(btn);
    btn.textContent = 'Delete';
    list.appendChild(chaptlist);

    btn.onclick = function(e) {
        list.removeChild(chaptlist);
    };

    input.focus();
}
)