
export const Button = ({text = "Botón", variant = "btn-success", functionClick}) => {
  return (
    <button className={`btn ${variant} m-2`} onClick={functionClick} >{text}</button>
  )
}