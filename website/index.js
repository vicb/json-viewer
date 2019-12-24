import '../src';
import * as Comlink from 'comlink';

const JSONCrush = Comlink.wrap(new Worker('JSONCrush.js'));

const json = document.querySelector('#json');
const viewer = document.querySelector('json-viewer');
const toggle = document.querySelector('#toggle-panel');
const container = document.querySelector('#container');

const debounce = (fn, timeout = 500) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), timeout);
    };
};

const loadJson = data => {
    try {
        viewer.data = JSON.parse(data);
    } catch (ex) {
        viewer.data = ex.message;
    }
};

const handleEditorChange = () => {
    const jsonString = editor.getValue();
    loadJson(jsonString);

    JSONCrush.crush(jsonString).then(value => {
        location.hash = value;
    });
};

const editor = CodeMirror.fromTextArea(json, {
    mode: { name: 'javascript', json: true },
    // matchBrackets: true,
    // smartIndent: true,
    // indentUnit: 4,
    // lineWrapping: true,
    lineNumbers: true,
    theme: 'jsv',
    styleActiveLine: true,
    // foldGutter: true,
    // gutters: ['CodeMirror-lint-markers', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    lint: {
        esversion: 6
    }
});

toggle.addEventListener('click', () => {
    container.classList.toggle('collapsed');
});

editor.on('change', debounce(handleEditorChange));

JSONCrush.uncrush(location.hash.slice(1)).then(value => {
    if (value) {
        editor.setValue(value);
        container.classList.add('collapsed');
    } else {
        handleEditorChange();
    }
});
