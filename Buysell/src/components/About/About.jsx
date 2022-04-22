import React from "react";
import { About, Container, Image, ImageColumn, ImageContainer, ImageText, ImageWrapper, Title } from "./styled";

const AboutComponent = () => {
  return (
    <Container>
      <About>
        <Title>Tentang Kami</Title>
        <ImageContainer>
          <ImageWrapper>
            <Image src="./assets/dea.png" alt="about" />
            <ImageText>Muh.Fahrul</ImageText>
          </ImageWrapper>
        </ImageContainer>
      </About>
    </Container>
  );
};

export default AboutComponent;
