import Image from 'next/image'
import style from './components.module.css'
export default async function Header() {
    return (
        <header className={style.header}> 
            <Image width={40} height={40} src={'https://fakestoreapi.com/icons/logo.png'}/>
            <p>é uma loja fake</p>
            <Image width={30} height={30} src={'https://fakestoreapi.com/icons/logo.png'}/>
            <button className={style.button}>add</button>
        </header>
    );
  }