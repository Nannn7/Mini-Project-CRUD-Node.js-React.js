import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const [name, setName] = useState("");
    const [nim, setNIM] = useState("");
    const [jurusan, setJurusan] = useState("SIIO");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Laki-Laki");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUsersById();
    }, []);

    const updateMahasiswa = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                nim,
                jurusan,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getUsersById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setNIM(response.data.nim);
        setJurusan(response.data.jurusan);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateMahasiswa}>
                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nama' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">NIM</label>
                        <div className="control">
                            <input type="text" className="input" value={nim} onChange={(e) => setNIM(e.target.value)} placeholder='NIM' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Jurusan</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={jurusan} onChange={(e) => setJurusan(e.target.value)}>
                                    <option value="SIIO">SIIO</option>
                                    <option value="TIO">TIO</option>
                                    <option value="TRO">TRO</option>
                                    <option value="ABO">ABO</option>
                                    <option value="TKP">TKP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">E-mail</label>
                        <div className="control">
                            <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Jenis Kelamin</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="Laki-Laki">Laki-Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success is-centered'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser