import React from "react";

function MovieAbstract({ title, desc, img, url }) {
    return (
        <>
            <div className="text-center">
                <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{
                        width: "30rem",
                    }}
                    src={img}
                    alt={title}
                />
            </div>
            <p>{desc}</p>
            <a
                className="btn btn-danger"
                target="_blank"
                rel="noreferrer"
                href={url}
            >
                Edit product
            </a>
        </>
    );
}

export default MovieAbstract;
