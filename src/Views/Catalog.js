import Cards from "../components/Cards";

function Catalog() {
  
  return (
    <div>
      <p>Catalog page</p>
      <Cards type="lipstick"/>
      <Cards type="mascara"/>
      <Cards type="nail_polish"/>
      <Cards type="foundation"/>
      <Cards type="blush"/>
    </div>
  );
}

export default Catalog;