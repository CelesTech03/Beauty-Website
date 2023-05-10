import Cards from "../components/Cards";
import { getMakeupByType } from "../api";

function Catalog() {
  const handleClick = () => {
    getMakeupByType('lipstick');
  };
  
  return (
    <div>
      <p>Catalog page</p>
      <Cards />
      <button onClick={handleClick}>Test API</button>
    </div>
  );
}

export default Catalog;