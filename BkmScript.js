import React, {Component} from 'react';

class BkmScript extends Component {
    componentDidMount(): void {
        this.addBkmScript();
    }

    addBkmScript = () => {
        const body   = document.body || document.getElementsByTagName('body')[0];
        const script = document.createElement('script');
        script.type  = "text/javascript";
        //script.src   = "https://preprod-js.bkmexpress.com.tr/v1/javascripts/bex.js"; // PreProd
        script.src   = "https://js.bkmexpress.com.tr/v1/javascripts/bex.js"; //Prod
        body.appendChild(script);

    };
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default BkmScript;