import React from "react";

import { Button } from '../../components';

/**
 * Renders a form group with a button.
 * @param {Object} props
 * @returns {XML}
 * @constructor
 */
const FormGroupButton = ( props ) => {
    return (
		<div className="form-group">
			<div className="col-sm-offset-4 col-sm-8">
				<Button className="btn btn-primary" onClick={ props.onClick.bind( this ) } value={props.value} />
			</div>
		</div>
    );
};

export default FormGroupButton;