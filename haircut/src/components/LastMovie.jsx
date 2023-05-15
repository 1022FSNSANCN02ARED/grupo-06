import React from "react";
import BigCard from "./BigCard.jsx";
import imgMandalorian from "../images/image-1683931097852.jpg";
import MovieDetail from "./MovieDetail.jsx";

function LastMovie() {
    return (
        <BigCard title="Last product in Data Base">
            <MovieDetail
                img={imgMandalorian}
                title="Aceite fortalecedor"
                desc="Iron Ore es una pomada fijadora base agua que ofrece un gran control sobre el cabello lo que la convierte en el aliado perfecto para peinados donde se requiera mucha definición. Al ser base agua se elimina con facilidad del cabello, cuenta con una fijación fuerte, acabado con brillo y un fresco aroma con tonos terrosos. Como todos los productos de Prospectors, su fórmula incluye aceite de cáñamo para ayudar a nutrir, hidratar y proteger el cabello y cuero cabelludo."
                url="/"
            />
        </BigCard>
    );
}

export default LastMovie;
