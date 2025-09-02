import Item from "../Components/Items/Item";
import "./NewCollections.css";
import new_collections from "../assets/newcollections";

const NewCollections = () => {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((items, i) => {
          return (
            <Item
              key={i}
              id={items.id}
              name={items.name}
              image={items.image}
              new_price={items.new_price}
              old_price={items.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
