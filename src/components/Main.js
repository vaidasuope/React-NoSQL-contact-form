import React, {useState,useEffect} from 'react';
import firebase from "../firebase";

function Main() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [q, setQ] = useState('');

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) =>{
        e.preventDefault();

        firebase
            .firestore()
            .collection('contacts').add({
            name:name,
            email:email,
            q:q,
        })
            .then(()=>{
                alert("Your message has been submitted!")
            })
            .catch((error)=>{
                alert(error.message)
            });
        setName("");
        setEmail("");
        setQ("");
    }

    return (
        <div className="container">
            <h1 className="p-5">Contact form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput2"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="John"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Question</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="q" rows="3"
                           value={q}
                           onChange={(e) => setQ(e.target.value)}
                           placeholder="Your question?"/>
                </div>
                <button>Submit</button>
            </form>
        </div>

    );
}

export default Main;