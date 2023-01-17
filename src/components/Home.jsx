import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            nihil illum, ratione saepe doloribus in eius distinctio? Nulla quos
            sint, fuga ea, cupiditate nemo nobis eligendi id laudantium sapiente
            facere! Quas, cumque ab nam voluptatibus repellendus molestiae
            deleniti excepturi animi, tempora ipsa minima nemo tempore odit
            sapiente aspernatur optio, rem quis doloribus est quae. Labore
            provident suscipit cumque nesciunt excepturi? Consequatur, laborum
            nemo enim ea cum non doloremque quia est amet facere suscipit quos
            rerum quam laudantium ipsa ipsam rem officiis quae dolorem
            asperiores, voluptatum fugiat, debitis perspiciatis! Non, fuga. Ut,
            assumenda maiores, obcaecati nesciunt saepe iure iste mollitia amet,
            doloribus vitae corrupti. Laboriosam soluta ut aut odit sed,
            repellat eligendi ea voluptates in quae pariatur fugit iusto eum
            quam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
