const Whatsapp = ()=>{
  return (
    <input 
    type="button" 
    value="Contactanós" 
    onClick={()=>{ 
      window.location.href = "https://api.whatsapp.com/send?phone=584125796895&textQuiero%20más%20info"
    }}
    />
  )
}

export default Whatsapp;