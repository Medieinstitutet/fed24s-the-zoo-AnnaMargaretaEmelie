import { useParams } from "react-router";

export const AnimalDetail = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        <h2>Animal no: {id}</h2>
      </div>
    </>
  );
};
