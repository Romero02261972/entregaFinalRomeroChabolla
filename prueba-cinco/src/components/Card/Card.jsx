
export const Card = ({name, description}) => {
  return (
    <div className="border border-1 border-dark rounded-3 col-5 p-3 m-2">
<h5>{name}</h5>
<p>{description}</p>
    </div>
        
  )
}
