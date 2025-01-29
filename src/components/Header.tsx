import React from "react";
import CompanyLogo from "./CompanyLogo";

function Header({ logoAndBrand }: { logoAndBrand: () => void }) {
  return (
    <div id="header">
      <CompanyLogo />
    </div>
  );
}

export default Header;
