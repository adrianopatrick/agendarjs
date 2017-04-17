import React from 'react';

const Item = (props) => (
    <div>
        {/*<div>*/}
            {/*<label className="texto label">{props.label}:</label>*/}
        {/*</div>*/}
        <div className="texto">{props.value}</div>
    </div>
);

export default Item;
