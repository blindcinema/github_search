import { useState } from "react";


export function UsernameForm(props) {
    const [formState, setFormState] = useState({text: ""});

    const handleChange = (event) => {
        setFormState({text: event.target.value});
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(formState);
    }

return (

<form className='username-form' onSubmit={handleSubmit}>
<input type="text" value={formState.text} onChange={handleChange}  />

<button type="submit">Search</button>
</form>
);
}