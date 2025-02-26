
import { useState } from 'react';
const defualtFormState = 
{
    artist: "",
title: ""
}

const TrackForm = (props) => {
    // formData state to control the form
    const [formData, setFormData] = useState(props.selected ? props.selected : defualtFormState);

    // handleChange function to update formData state
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmitForm = (evt) => {
     
        evt.preventDefault();
        if(props.selected){
            props.handleUpdateTrack(props.selected._id, formData)
        }else{
            props.handleAddTrack(formData)
        }

        setFormData(defualtFormState)
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="artist"> Artist </label>
                <input
                    id="artist"
                    name="artist"
                    value={formData.artist}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="title"> Title </label>
                <input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <button type="submit">
                    { props.selected ?
                        'Update Track'
                        :
                        'Add New Track'
                    }
                </button>
            </form>
        </div>
    );
};

export default TrackForm;