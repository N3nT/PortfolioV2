import { useInView } from "react-intersection-observer";

const MyComponent = () => {
  const { ref, inView } = useInView(); // ref → do przypisania, inView → true, jeśli w widoku

  return (
    <div>
      <div style={{ height: "100vh", background: "lightgray" }}>
        Przewiń w dół 👇
      </div>

      <div
        ref={ref}
        style={{
          height: 200,
          background: inView ? "lightgreen" : "tomato",
          transition: "background 0.5s",
        }}
      >
        {inView ? "Jestem widoczny! ✅" : "Nie widać mnie ❌"}
      </div>

      <div style={{ height: "100vh", background: "lightgray" }}></div>
    </div>
  );
};

export default MyComponent;
