import React from "react";
import SmallCard from "./SmallCard.jsx";

const myStats = [
    {
        id: 2,
        title: "Products Data Base",
        value: "11",
        color: "primary",
        icon: "fa-film",
    },
    {
        id: 3,
        title: "Users quantity",
        value: "4",
        color: "warning",
        icon: "fa-user",
    },
    {
        id: 1,
        title: "Total categories",
        value: "8",
        color: "success",
        icon: "fa-award",
    },
];

function Stats() {
    return (
        <div className="row">
            {myStats.map((stat) => {
                return (
                    <SmallCard
                        key={stat.id}
                        title={stat.title}
                        value={stat.value}
                        color={stat.color}
                        icon={stat.icon}
                    />
                    // <SmallCard
                    //   key={stat.id}
                    //   {...stat}
                    // />
                );
            })}
            {/* [ SmallCard,SmallCard,SmallCard ] */}
        </div>
    );
}

export default Stats;
