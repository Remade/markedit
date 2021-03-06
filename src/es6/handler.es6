export class Handler {

    constructor(document) {
        this.document = document;
    }

    dispatch(e, cType, payload) {
        if (window.CustomEvent) {
            /*global CustomEvent :true*/
            /*eslint no-undef: "error"*/
            var event = new CustomEvent(cType, {
                detail: payload,
                bubbles: true,
                cancelable: true
            });
            e.currentTarget.dispatchEvent(event);
        }
    }

    handle(cType, handlerFunc) {
        this.document.addEventListener(cType, handlerFunc, false);
    }

}
