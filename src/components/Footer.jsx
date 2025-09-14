import React from "react";


function Footer() {
    const currentYear = new Date().getFullYear();
    return <p>
        copyright © {currentYear}
    </p>
}

export default Footer;