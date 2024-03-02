import {useState} from "react";

function Form() {

    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "user"
    })

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm(form => ({...form, [name]: value }))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return (<div>
            <form onSubmit={submitHandler}>
        <input type="text" placeholder="Email" name="email" value={form.email} onChange={changeHandler}/>
        <input type="password" placeholder="Password" name="password" value={form.password} onChange={changeHandler}/>
        <select value={form.role} onChange={changeHandler} name="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>
            <button type="submit">Login</button>
            </form>
    </div>

    );
}

export default Form;