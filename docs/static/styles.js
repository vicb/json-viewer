
                    import { css } from '../_snowpack/pkg/lit.js';
                    export default css`:host {
    --background-color: #2a2f3a;
    --color: #f8f8f2;
    --string-color: #a3eea0;
    --number-color: #d19a66;
    --boolean-color: #4ba7ef;
    --null-color: #df9cf3;
    --property-color: #6fb3d2;
    --font-family: monaco, Consolas, 'Lucida Console', monospace;
    --preview-color: rgba(222, 175, 143, 0.9);
    --highlight-color: #7b0000;

    display: block;
    background-color: var(--background-color);
    color: var(--color);
    padding: 0.5rem;
    font-family: var(--font-family);
    font-size: 1rem;
}

.preview {
    color: var(--preview-color);
}

.null {
    color: var(--null-color, #df9cf3);
}

.key {
    color: var(--property-color, #f9857b);
    display: inline-block;
}

.collapsable:before {
    display: inline-block;
    color: var(--color);
    padding-right: 5px;
    padding-left: 5px;
    font-size: 0.7rem;
    content: '▶';
    transition: transform 195ms ease-in;
    transform: rotate(90deg);
    color: var(--property-color);
}

.collapsable.collapsableCollapsed:before {
    transform: rotate(0);
}

.collapsable {
    cursor: pointer;
    user-select: none;
}

.string {
    color: var(--string-color);
}

.number {
    color: var(--number-color);
}

.boolean {
    color: var(--boolean-color);
}

ul {
    padding: 0;
    clear: both;
}

ul,
li {
    list-style: none;
    position: relative;
}

li ul > li {
    position: relative;
    margin-left: 1.5rem;
    padding-left: 0px;
}

ul ul:before {
    content: '';
    border-left: 1px solid #333;
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    bottom: 0.5rem;
}

ul ul:hover:before {
    border-left: 1px solid #666;
}

mark {
    background-color: var(--highlight-color);
}
`;
                