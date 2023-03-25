import "./banner.css";

// Page banner
function Banner() {
    return (
        <>
            {/* Container */}
            <div className="banner">
                {/* Banner Heading */}
                <h1 className="bannerHeading">The Best Database</h1>
                {/* Banner text */}
                <h2 className="bannerText">This is the best database in the industry
                    and is the best
                </h2>
            </div>
            <hr />
        </>
    );
}

export default Banner;