import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [name, setName] = useState("");
    const [nim, setNIM] = useState("");
    const [jurusan, setJurusan] = useState("SIIO");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Laki-Laki");
    const navigate = useNavigate();

    const saveMahasiswa = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users/', {
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
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveMahasiswa}>
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
                        <button type='submit' className='button is-success is-centered'>Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser