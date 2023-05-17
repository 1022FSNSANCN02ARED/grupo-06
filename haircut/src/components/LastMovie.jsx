import React, { useEffect, useState } from "react";
import BigCard from "./BigCard.jsx";
import MovieAbstract from "./MovieAbstract.jsx";

function LastMovie() {
    const [lastProduct, setLastProduct] = useState(null);

    useEffect(() => {
        const fetchLastProduct = async () => {
            const response = await fetch(
                "http://localhost:3000/api/product/last"
            );
            console.log(response);
            const data = await response.json();
            setLastProduct(data.data[0]);
        };

        fetchLastProduct();
    }, []);

    return (
        <BigCard title="Last product in Data Base">
            {lastProduct && (
                <MovieAbstract
                    img={lastProduct.image}
                    title={lastProduct.name}
                    desc={lastProduct.description}
                    url={
                        "http://localhost:3000/products/" +
                        lastProduct.id +
                        "/edit"
                    }
                />
            )}
        </BigCard>
    );
}

export default LastMovie;
