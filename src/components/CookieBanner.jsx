import { useEffect, useState } from 'react'
import style from "./CookieBanner.module.scss";
import ReactGA from "react-ga4";
//displayes i bunden af skærmen
//skal have en deny og accepter option
//skal kun initialisere GTRAG hvis man accepterer

export const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(true);

//tjek om brugeren allerede har accepteret
    useEffect(() =>{
        if(localStorage.getItem('cookieAccept')){
            setShowBanner(false);
            // if (JSON.parse(localStorage.getItem("cookieAccept"))=== true){
            //     ReactGA.initialize(import.meta.env.VITE_PUBLIC_GA_ID);// BEMÆRK - HER SKAL DIN PERSONLIGE GOOGLE ANALYTICS G-ID INDSÆTTES
            // }
        }
},[showBanner])

  // accepter og sæt en local state
const accept = () => {
    localStorage.setItem("cookieAccept", true);
setShowBanner(false);
};
  // afslå og sæt en local state
const deny = () => {
    localStorage.setItem("cookieaccept", false);
setShowBanner(false);
}



  return (
    <>
    {showBanner && (
        <section className={style.cookieBanner}>
          <p>
            Denne side bruger cookies til at analysere data trafik. For at
            optimere siden. Hvis du acceptere at dine data bruges til at
            forbedre brugeroplevelsen bedes du venligts trykke accepter. Ellers
            tryk afslå.
          </p>

          <div>
            <button onClick={() => accept()}>Accepter</button>
            <button onClick={() => deny()}>Afslå</button>
          </div>
        </section>
      )}
    </>
  )
}


