import { useState } from "react"
import "./ListaCarros.css"

const ListaCarros = () => {

    const [data] = useState([
        {id: 1, nome: "Fiat",       ano: 2018,   km: 20000, new: false, img:"https://www.bmw.com.br/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png" },
        {id: 2, nome: "BMW" ,       ano: 2024,   km: 0,     new: true,  img:"https://www.bmw.com.br/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png"}, 
        {id: 3, nome: "Kia" ,       ano: 2023,   km: 5000,  new: false, img:"https://www.bmw.com.br/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png" },
        {id: 4, nome: "ferrari" ,   ano: 2020,   km: 2000,  new: false, img:"https://www.bmw.com.br/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png"  },
        {id: 5, nome: "BMW" ,       ano: 2017,   km: 80000, new: false, img:"https://www.bmw.com.br/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Navigation/bmw-m-series-m2-coupe-lci-modelfinder.png"}
    ]);

    const [nome, setNome] = useState("Alison") 

    function mudarNome() {
        let nomes = nome;

        if(nomes === "Alison") {
            setNome("Alison Miguel")
        } else {
            setNome("Alison")
        }
        
    }

  return (
    <div>

        <p>Meu nome é: {nome}</p>
        <button onClick={ mudarNome }> Mudar nome </button>

      <ul className="ListadeCarros">
        {
            data.map((item) => (
                <li key={data.id} className="ListadeCarrosP" >
                    <img src={item.img} alt="Imagem de carro" className="imagemCarro" />
                    <p>Modelo: {item.nome}</p> 
                    <p>Ano: {item.ano}</p>
                    <p>Quilometragem: {item.km}</p>
                    {item.new === true ? (
                        <p>Novo</p>
                    ) : (
                        <p>Usado</p>
                    )
                }
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default ListaCarros