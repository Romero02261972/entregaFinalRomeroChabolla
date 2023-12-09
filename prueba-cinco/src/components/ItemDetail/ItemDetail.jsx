export const ItemDetail = ({ id, name, description, stock, imageURL }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Description: {description}</p>
      <p>Stock: {stock}</p>
      {imageURL && <img src={"/istockphoto-1166042531-1024x1024.jpg"} alt={`Image of ${name}`} />}

    </div>
  );
};