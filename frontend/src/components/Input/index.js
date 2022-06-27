import React, {useState} from 'react'
import './Style/index.css';


function Input () {
    const [nomeLivro,setNomeLivro] = useState('');
    const [autorLivro,setAutorLivro] = useState('');
    const [dataPublicação,setDataPublicação] = useState('');

    function handleSubmit () {
        const data = {
            nome_livro : nomeLivro,
            nome_autor :autorLivro,
            data_publicacao :dataPublicação,
        }
    }

    return(
        <form>
            <div className="promotion-form_group">
                <label htmlFor="title">Nome do Livro</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={nomeLivro}
                    onChange={e => setNomeLivro(e.target.value)}
                />
            </div>

            <div className="promotion-form_group">
                <label htmlFor="title">Autor do livro</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={autorLivro}
                    onChange={e => setAutorLivro(e.target.value)}
                />
            </div>

            <div className="promotion-form_group">
                <label htmlFor="title">Data de publicação</label>
                <input
                    id="title"
                    name="title"
                    type="date"
                    value={dataPublicação}
                    onChange={e => setDataPublicação(e.target.value)}
                />
            </div>
        </form>
    )
}

export default Input;