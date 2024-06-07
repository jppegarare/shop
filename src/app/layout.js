import Header from './componentes/Header'
import Footer from './componentes/Footer'
import style from "./page.module.css"

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={style.body}>
        <Header/>
        <br/>
        {children}
        <br/>
        <Footer/>
      </body>
    </html>
  );
}
