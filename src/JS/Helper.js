import React from "react";
import { NavLink } from "react-router-dom";

const Helper = (props) => {
  return (
    <div>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 ">
                  <h1>{props.name}</h1>
                  <p className="text">
                    Promote it with stunning layouts for flyers, social media
                    posts, brochures, and more. Use InDesign to create
                    professional publications with graphics, images, and
                    typography. Enhance your social media presence with the
                    power of Adobe Spark.
                  </p>
                  <button className="button">
                    <NavLink to={props.visit} className="btn btn-primary">
                      {props.btname}
                    </NavLink>
                  </button>
                </div>
                <div className="col-md-6 header-img">
                  <img
                    src={props.imgSrc}
                    className="img-fluid animated"
                    alt="Helpers img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Helper;
