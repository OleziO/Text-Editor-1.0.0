//--------------------------------Constants------------------------------------
const EDIT_TEXT_BTN = document.querySelector('.btn-warning');
const SAVE_EDIT_BTN = document.querySelector('#save-btn');
const STYLE_BTN = document.querySelector('.btn-info');
const ADD_BTN = document.querySelector('#add-btn');
const BOLD = document.querySelector('.bold-btn');
const CURSIVE = document.querySelector('.cursive-btn');
const SELECT = document.querySelector('.form-select');
const COLOR_CHANGE = document.querySelector('.btn-color-change');
const BGCOLOR_CHANGE = document.querySelector('.bg-color-change');
const COLOR_BOX = document.querySelector('.change-color-box');
const TABLE_CREATE = document.querySelector('#tableCreate');
const LIST_CREATE = document.querySelector('#listCreate');
const LIST_CREATE_BTN = document.querySelector('#createListBtn');
const COUNT_TR = document.querySelector('#countTr');
const COUNT_TD = document.querySelector('#countTd');
const WIDTH_TD = document.querySelector('#widthTd');
const HEIGHT_TD = document.querySelector('#heightTd');
const TABLE_CREATE_BTN = document.querySelector('#tableCreateBtn');
const BORDER_WIDTH = document.querySelector('#borderWidthVal');
//-------------------------------Variables------------------------------------
let FONT_STYLE = document.querySelector('.font-style-block');
let EDIT_WRAPPER = document.querySelector('.edit-text-field');
let EDIT_TEXT = document.querySelector('.show-block');
let EDIT_BLOCK = document.querySelector('#editing-text');
let CREATE_ITEM_BLOCK = document.querySelector('.create-item-block');
let TABLE_OPTIONS = document.querySelector('.style-table-create');
let LIST_OPTIONS = document.querySelector('.style-list-create');
let BORDER_TYPE = document.querySelector('#borderType').value;
let BORDER_COLOR = document.querySelector('#borderColors').value;
let LIST_MARK_STYLE = document.querySelector('.list-mark-style');
//-------------------------------Flag Variables-------------------------------
let bgBoxClick = false;
let styleClicked = false;
//-------------------------------Site Logic-----------------------------------
EDIT_TEXT_BTN.addEventListener('click', event => { //Get HTML text
    styleClicked = false;
    EDIT_BLOCK.style.display = 'flex';
    SAVE_EDIT_BTN.style.display = 'flex';
    ADD_BTN.style.display = 'flex';
    FONT_STYLE.style.display = 'none';
    EDIT_WRAPPER.style.justifyContent = 'center';
    EDIT_WRAPPER.style.alignItems = 'center';
    EDIT_BLOCK.value = EDIT_TEXT.innerHTML;
})
//----------------------------------------------------------------------------
ADD_BTN.addEventListener('click', event => { //Add button click (show menu of create element)
    EDIT_WRAPPER.style.display = 'none';
    EDIT_TEXT.style.display = 'none';
    STYLE_BTN.style.display = 'none';
    EDIT_TEXT_BTN.style.display = 'none';
    CREATE_ITEM_BLOCK.style.display = 'flex';
    CREATE_ITEM_BLOCK.style.height = 'auto';
})
//----------------------------------------------------------------------------
TABLE_CREATE.addEventListener('click', event => { // Show creating table menu
    LIST_OPTIONS.style.display = 'none';
    TABLE_OPTIONS.style.display = 'block';
})
//----------------------------------------------------------------------------
LIST_CREATE.addEventListener('click', event => { // Show creating list menu
    TABLE_OPTIONS.style.display = 'none';
    LIST_OPTIONS.style.display = 'block';
})
//----------------------------------------------------------------------------
TABLE_CREATE_BTN.addEventListener('click', event => { // Creating table
    let newTable = document.createElement('table');
    
    for (let i = 0; i < Number(COUNT_TR.value); ++i) {
        let newTr = document.createElement('tr');
        for (let j = 0; j < Number(COUNT_TD.value); ++j) {
            let newTd = document.createElement('td');
            newTd.textContent = 'TD';
            newTd.style.width = WIDTH_TD.value;
            newTd.style.height = HEIGHT_TD.value;
            newTr.append(newTd);
        }
        newTable.append(newTr);
    }

    BORDER_TYPE = document.querySelector('#borderType').value;
    BORDER_COLOR = document.querySelector('#borderColors').value;

    for (let i = 0; i < newTable.querySelectorAll('td').length; ++i)
        newTable.querySelectorAll('td')[i].style.border = BORDER_WIDTH.value + ' ' + BORDER_TYPE + ' ' + BORDER_COLOR;
    
    EDIT_BLOCK.value = EDIT_TEXT.innerHTML + '\n' + newTable.outerHTML;

    EDIT_TEXT.style.height = 'auto';

    EDIT_TEXT.style.width =  '80%';
    EDIT_WRAPPER.style.width = '80%';

    EDIT_WRAPPER.style.display = 'flex';
    EDIT_TEXT.style.display = 'flex';
    STYLE_BTN.style.display = 'flex';
    EDIT_TEXT_BTN.style.display = 'flex';
    CREATE_ITEM_BLOCK.style.display = 'none';

    WIDTH_TD.value = '';
    HEIGHT_TD.value = '';
    COUNT_TD.value = '';
    COUNT_TR.value = '';
    BORDER_WIDTH.value = '';

})
//----------------------------------------------------------------------------
LIST_CREATE_BTN.addEventListener('click', event => { // Creating list
    let newList = document.createElement('ul');
    let n = Number(document.querySelector('#countLi').value);

    newList.style.listStyleType = LIST_MARK_STYLE.value;
    
    for (let i = 0; i < n; ++i) {
        let newLi = document.createElement('li');
        newLi.textContent = 'LI';
        newList.append(newLi);
    }

    EDIT_BLOCK.value = EDIT_TEXT.innerHTML + '\n' + newList.outerHTML;

    EDIT_TEXT.style.height = 'auto';

    EDIT_WRAPPER.style.display = 'flex';
    EDIT_TEXT.style.display = 'flex';
    STYLE_BTN.style.display = 'flex';
    EDIT_TEXT_BTN.style.display = 'flex';
    CREATE_ITEM_BLOCK.style.display = 'none';

    document.querySelector('#countLi').value = '';

    
})
//----------------------------------------------------------------------------
SAVE_EDIT_BTN.addEventListener('click', event => {
    if (EDIT_BLOCK.value.length > 1)
        EDIT_TEXT.innerHTML = EDIT_BLOCK.value; // Reload text (button "Save")
    EDIT_BLOCK.value = '';
})
//----------------------------------------------------------------------------
STYLE_BTN.addEventListener('click', event => {
    if (!styleClicked) { // Show style block
        EDIT_BLOCK.style.display = 'none';
        SAVE_EDIT_BTN.style.display = 'none';
        ADD_BTN.style.display = 'none';
        FONT_STYLE.style.display = 'flex';
        FONT_STYLE.style.flexDirection = 'column';
        EDIT_WRAPPER.style.alignItems = 'flex-start';
        styleClicked = true;
    } else { // Hide style block
        styleClicked = false;
        EDIT_BLOCK.style.display = 'flex';
        SAVE_EDIT_BTN.style.display = 'flex';
        ADD_BTN.style.display = 'flex';
        FONT_STYLE.style.display = 'none';
        EDIT_WRAPPER.style.justifyContent = 'center';
        EDIT_WRAPPER.style.alignItems = 'center';
    }
})
//----------------------------------------------------------------------------
FONT_STYLE.addEventListener('click', event => {
    if (event.target.type == 'radio') {
        EDIT_TEXT = document.querySelector('.show-block');
        EDIT_TEXT.style.fontSize = event.target.value; //Font size
    }
})
//----------------------------------------------------------------------------
BOLD.addEventListener('click', event => {
    if (event.target.checked) {
        EDIT_TEXT = document.querySelector('.show-block');
        EDIT_TEXT.style.fontWeight = event.target.value; //Bold styling
    } else {
        EDIT_TEXT = document.querySelector('.show-block');
        EDIT_TEXT.style.fontWeight = 'normal';
    }
})
//----------------------------------------------------------------------------
CURSIVE.addEventListener('click', event => {
    if (event.target.checked) {
        EDIT_TEXT = document.querySelector('.show-block');
        EDIT_TEXT.style.fontStyle = event.target.value; //Italic styling
    } else {
        EDIT_TEXT = document.querySelector('.show-block');
        EDIT_TEXT.style.fontStyle = 'normal';
    }
})
//----------------------------------------------------------------------------
SELECT.addEventListener('change', event => {
    EDIT_TEXT = document.querySelector('.show-block');
    EDIT_TEXT.style.fontFamily = event.target.value; //Changing font of text
})
//----------------------------------------------------------------------------
COLOR_CHANGE.addEventListener('click', event => {
    COLOR_BOX.style.display = COLOR_BOX.style.display == 'none' ? 'flex' : 'none'; //Open menus of colors
    bgBoxClick = false;
})
//----------------------------------------------------------------------------
BGCOLOR_CHANGE.addEventListener('click', event => {
    COLOR_BOX.style.display = COLOR_BOX.style.display == 'none' ? 'flex' : 'none'; //Open menus of colors
    bgBoxClick = true;
})
//----------------------------------------------------------------------------
COLOR_BOX.addEventListener('click', event => {
    if (bgBoxClick) { //Deleting previos bg styles
        const BG_COLORS_LIST = ['bg-primary',
            'bg-secondary',
            'bg-success',
            'bg-danger',
            'bg-warning',
            'bg-info',
            'bg-light',
            'bg-dark',
            'bg-white'
        ];
        for (let i = 0; i < BG_COLORS_LIST.length; ++i)
            EDIT_TEXT.classList.remove(BG_COLORS_LIST[i]);

        EDIT_TEXT.classList.add(event.target.classList[event.target.classList.length - 1]); //Addition new bg style
    } else { //Deleting previos text styles
        const TEXT_COLORS_LIST = ['text-primary',
            'text-secondary',
            'text-success',
            'text-danger',
            'text-warning',
            'text-info',
            'text-light',
            'text-dark',
            'text-white'
        ];
        for (let i = 0; i < TEXT_COLORS_LIST.length; ++i)
            EDIT_TEXT.classList.remove(TEXT_COLORS_LIST[i]);

        EDIT_TEXT.classList.add(event.target.classList[event.target.classList.length - 2]); //Addition new text style
    }
})
//----------------------------------------------------------------------------