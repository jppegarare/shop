import Image from 'next/image'

export default async function Header() {
    return (
        <header>
            <Image width={40} height={40} src={'https://fakestoreapi.com/icons/logo.png'}/>
            <Image width={30} height={30} src={''}/>
            <button>add produto</button>
            <p>é uma loja fake</p>

        </header>
    );
  }