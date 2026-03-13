import styles from './PaginaPrincipal.module.css';
const PaginaPrincipal =()=>{
  const fecha = new Date();
  const fechaInicialSuiza = new Date('1995-03-10');
  const fechaInicialHumus = new Date('2018-03-10');
  const añoActual = fecha.getFullYear();
  const mesActual = fecha.getMonth();
  const diaActual = fecha.getDay();

  const añosServicioSuiza = añoActual - fechaInicialSuiza.getFullYear()
  const añosServicioHumus = añoActual - fechaInicialHumus.getFullYear()

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Suiza Tropical</h1>
      <div className={styles.containerData}>
        <div className={styles.containerVideo}>
          <video 
          className={styles.video}
          src="/historia-suiza-tropical.webm" 
          autoPlay 
          loop 
          muted />
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.containerText}>
            <p className={styles.parrafo}>Una empresa familiar dedicada a la producción de humus de lombriz 100% natural, en versiones líquida y sólida, para nutrir los suelos de manera responsable y sostenible</p>
            <p className={styles.parrafo}>Creemos en la agricultura consciente, en trabajar con la naturaleza, honrar los ciclos y regenerar la tierra con lo que lla misma nos ofrece.</p>
            <p className={styles.parrafo}>Nuestra historia comienza con Jacobo Krumennacher, un suizo que llegó a Venezuela hace más de 50 años con la certeza de que lo orgánico era el camino hacia la agricultura más sana y productiva</p>
            <p className={styles.parrafo}>Hoy, su hijo Stefan Krumennacher continúa ese legado con visión, innovación y respeto profundo por la tierra.</p>
            <p className={styles.parrafo}>Durante { añosServicioHumus } años hemos acompañado a productores de Portuguesa, ofreciendo una alternativa orgánica, sostenible y eficiente que cuida la tierra y potencia su rendimiento.</p>
          </div>
          <div className={styles.containerFooter}>
            <img src="/lombriz.webp" alt="Logo" className={styles.img} />
            <div className={styles.containerButton}>
              <a href="https://api.whatsapp.com/send?phone=584125796895&text=Quiero%20m%C3%A1s%20info" target="_blank" rel="noopener noreferrer" className={styles.button}>Contactar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaginaPrincipal;