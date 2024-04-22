import React from "react";
import Button1 from "../../common components/buttons/Button1";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="flex justify-end items-center text-secondary md:min-h-screen lg:h-[80vh]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/muscular-man-touch-skin-after-shaving-isolated-black-background-studio-shot-muscular-man_474717-87361.jpg?w=900)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center md:text-right flex justify-center md:justify-end w-10/12 mx-auto">
        <div className="w-8/12 my-5">
          <p>Namaste, Welcome to Amrutam </p>

          <h1 className="text-xl md:text-3xl lg:text-5xl my-3">
            Step into Holistic Healing with Ayurveda Book Consultation with
            certified Experts.{" "}
          </h1>

          <p className="flex justify-end mb-4">
          <span className="w-9/12 hidden md:block">
          Dive into the world of ayurveda and Experience Personalized Health
            Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
            Anytime, anywhere.
          </span>
          </p>

          <Link to="/find-doctors">
            <Button1 width={"max-w-[200px]"}>Book An Appointment</Button1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
