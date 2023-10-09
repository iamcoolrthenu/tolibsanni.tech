
class MyHeader extends HTMLElement {
    connectedCallback() {
        fetch("/Tolib_Sanni_Website/Template/Header.html")
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            });
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        fetch('/Tolib_Sanni_Website/Template/Footer.html')
        .then(response => response.text())
        .then(html =>{
            this.innerHTML = html;
        })
    }   
}

customElements.define('my-footer', MyFooter)