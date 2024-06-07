import Image from 'next/image'
import style from './components.module.css'
export default async function Footer() {
    return (
        <footer className={style.footer}>
           <ul>
                <li>face</li>
                <li>insta</li>
                <li>zap</li>
                <li>twitter</li>
            </ul>    
            <p>Impresa criada em 27/12/2006</p>
            <Image width={40} height={40} src={'https://fakestoreapi.com/icons/logo.png'}/>
        </footer>
    );
  }