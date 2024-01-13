import React from "react";
import { Facebook } from "../iconos/Facebook";
import { Github } from "../iconos/Github";
import { Instagram } from "../iconos/Instagram";
import { Envelope } from "../iconos/Envelope";
const Social = () => {
  return (
    <div className="btn-group">
      <a
        href="https://www.instagram.com/amne.calle/"
        className="btn social"
        aria-current="page"
      >
        <Instagram lado="2em" />
      </a>
      <a href="https://github.com/Amneweb" className="btn social">
        <Github lado="2em" />
      </a>
      <a href="https://www.facebook.com/amneris.calle/" className="btn social">
        <Facebook lado="2em" />
      </a>
      <a href="mailto:amneris.calle@gmail.com" className="btn social">
        <Envelope lado="2em" />
      </a>
    </div>
  );
};

export default Social;
