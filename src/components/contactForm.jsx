import {useState} from 'react';

function ContactForm() {
    const handleChange=(e)=>{
        const {value, name}=e.target;
        setData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    
    const [data, setData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newErrors = {};
        if (!data.email) {
            newErrors.email = 'Email is required';
        }
        setErrors(newErrors);
        if(Object.keys(newErrors).length>0) {
        return;
    }
    return (
        <form
        onSubmit={handleSubmit}
         className="flex flex-col gap-4 p-4 max-w-md mx-auto bg-white rounded shadow">
            <input 
                className="border-1" 
                type="text" 
                placeholder="Full Name" 
                name="fullName"
                onChange={handleChange}
            />
            <input 
                className="border-1" 
                type="email" 
                placeholder="Email" 
                name="email"
                onChange={handleChange}
            />
            {errors.email &&
            <p className="text-red-500 text-sm">{errors.email}</p>
            }
            <textarea 
                className="border-1" 
                placeholder="Message" 
                name="message"
                onChange={handleChange}
                value={data.message}
            ></textarea>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">
                Submit
            </button>
        </form>
    )
}
 export default ContactForm;