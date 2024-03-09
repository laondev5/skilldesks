import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#091736]">
      <Container>
        <div className="flex justify-center items-center">
          <div className="py-16 w-[70%]">
            <h2 className="text-4xl text-white text-center font-extrabold">
              We Help Your <br /> Company To Grow
            </h2>
            <p className="text-xl text-white text-center mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              doloremque quaerat quasi, quidem quod quibusdam.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
