class SkillCircle extends HTMLElement {
    constructor() {
        super();
        console.warn('constructed!')
        this.innerHTML = 'hello'
    }
}

export function init() {
    customElements.define('skill-circle', SkillCircle);
}
