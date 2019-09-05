import React, {Component} from 'react';
import PropTypes from "prop-types";
import Button from "../components/Form/Button";

const noop = () => {
};
export default class Bkm extends Component {

    refBkm = React.createRef();

    static propTypes = {
        id: PropTypes.string,
        token: PropTypes.string,
        path: PropTypes.string,
        onCancel: PropTypes.func,
        onComplete: PropTypes.func,

    };

    static defaultProps = {
        id: "",
        token: "",
        path: "",
        onCancel: noop,
        onComplete: noop,
    };


    componentDidMount() {
        window.refBkm = this.refBkm;
        this.init();
    }

    init = () => {
        const {id, token, path, onCancel, onComplete} = this.props;

        window.Bex.init({
                "id": id,
                "token": token,
                "path": path
            },
            "modal",
            {
                onCancel: (status) => {
                    onCancel(status)
                },
                onComplete: (status) => {
                    onComplete(status)
                },
                skipButton: true,
                buttonSize: [135, 70],
                container: "payment-dropin",
            });
    };

    render() {
        return (<React.Fragment>
                <div id="payment-dropin" ref={this.refBkm}></div>
            </React.Fragment>
        );
    }
}
