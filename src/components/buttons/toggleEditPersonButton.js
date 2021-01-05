import React from 'react';

import Button from '@Components/baseComponents/button';

const ToggleEditPersonButton = ({ setEditState }) => {
    const handler = () => { setEditState(true) };

    return(
        <Button text="Edit" handler={handler}></Button>
    )
}

export default ToggleEditPersonButton;