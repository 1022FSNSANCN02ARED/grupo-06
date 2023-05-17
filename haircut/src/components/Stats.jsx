import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard.jsx";

function Stats() {
    const [myStats, setMyStats] = useState([
        {
            id: 1,
            title: "Users in Data Base",
            value: "Cargando...",
            color: "warning",
            icon: "fa-user",
        },
        {
            id: 2,
            title: "Products in Data Base",
            value: "Cargando...",
            color: "primary",
            icon: "fa-film",
        },
        {
            id: 3,
            title: "Categories in Data Base",
            value: "Cargando...",
            color: "success",
            icon: "fa-user",
        },
    ]);

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:3000/api/product"),
            fetch("http://localhost:3000/api/user"),
            fetch("http://localhost:3000/api/category"),
        ])
            .then((responses) =>
                Promise.all(responses.map((response) => response.json()))
            )
            .then((results) => {
                const moviesCount = results[0].meta.total;
                const actorsCount = results[1].meta.total;
                const categoriesCount = results[2].meta.total;

                const updatedStats = myStats.map((stat) => {
                    if (stat.title === "Products in Data Base") {
                        return { ...stat, value: moviesCount.toString() };
                    } else if (stat.title === "Users in Data Base") {
                        return { ...stat, value: actorsCount.toString() };
                    } else if (stat.title === "Categories in Data Base") {
                        return { ...stat, value: categoriesCount.toString() };
                    }
                    return stat;
                });

                setMyStats(updatedStats);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [myStats]);

    return (
        <div className="row flex-wrap">
            {myStats.map((stat) => (
                <SmallCard
                    key={stat.id}
                    title={stat.title}
                    value={stat.value}
                    color={stat.color}
                    icon={stat.icon}
                />
            ))}
        </div>
    );
}

export default Stats;
