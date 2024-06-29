'use client'
import Image from  "next/image"
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import styles from "./components.module.css"
import ErrorFetch from "./ErrorFetch";

export default function Main() {
  const [listaProduto, setListaProduto] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isError, setIsError] = useState(false)

    useEffect(() => {
      const getProduct = async () => {
        try{
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setListaProduto(data);
          setListComplete(data);
        }
        catch{
          setIsError(true)
        }

      }
      getProduct()
    }, 
    [])

    const orderAz = () => {
      const listAux = [...listaProduto].sort((a,b) =>
      a.title.localeCompare(b.title))
      setListaProduto(listAux)
    }
    const orderZa = () => {
      const listAux = [...listaProduto].sort((a,b) =>
      b.title.localeCompare(a.title))
      setListaProduto(listAux)
    }

    const orderPriceMm = () => {
      const listAux = [...listaProduto].sort((a,b) => 
      a.price - b.price )
      setListaProduto(listAux)
    }
    const orderPricemM = () => {
      const listAux = [...listaProduto].sort((a,b) => 
      b.price - a.price )
      setListaProduto(listAux)
    }

    const search = (text) => {
      setTextSearch(text)

      if(text.trim() == ""){
        setListaProduto(listComplete)
        return
      }
      const newList = listaProduto.filter((product) => 
        product.title.toUpperCase().trim().includes(textSearch.toUpperCase())
      )
      setListaProduto(newList)
    }
  
    if(isError == true){
      return <ErrorFetch/>
    }

    if(listComplete[0] == null){
      return(
        <main className={styles.main}>
          <Spinner/>
           
        </main>
      )
    }
  
  return (
    <>
    <div>
      <div>
        <button onClick={ orderAz }>Ordenar de A a Z</button>
        <button onClick={ orderZa }>Ordenar de Z a A</button>
        <button onClick={ orderPriceMm }>Ordenar Maior pro Menor</button>
        <button onClick={ orderPricemM }>Ordenar Menor pro Maior</button>
        <input type="text" value={textSearch} placeholder="Pesquisar produto" 
        onChange={(event) => search(event.target.value) }/>
      </div>
    </div>
    <main className={styles.main}>
      {listaProduto.map((products)=> 
        <div className={styles.card} key={products.id}> 
          <p>
            {products.title.slice(0, 16)+"..."} 
          </p>
          <Image 
          width={300} 
          height={300} 
          src={products.image}
          />
          <p>
            R$ {products.price} 
          </p>
          <p>
            R$ {products.description.slice(0, 40)+"..."} 
          </p>
        </div>
    )}
    </main>
    </>
  );
}
