const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {

    try {
const res = await fetch(BASE_URL)
const data = await res.json()
return data


    } catch (error) {console.log(error)
    }
    }

    const create = async (formData) => { 
        try {
            const res = await fetch(BASE_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return res.json()



        } catch (error) {
            console.log(error);
        }}

        const update = async (id, formData) => {
            try {
                const res = await fetch(`${BASE_URL}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                return res.json()
            } catch (error) {
                console.log(error);
            }
        }

        const deleteTrack = async (id) => { 
            try {
                const res = await fetch(`${BASE_URL}/${id}`, {
                    method: 'DELETE'
                })
                return res.json()
            } catch (error) {
                console.log(error);
            }
        }

        export {
            index,
            create,
            update,
            deleteTrack
        }