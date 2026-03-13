import styles from './Informacion.module.css';

const PREGUNTAS_FRECUENTES = [
  {
    pregunta: "¿Qué es el humus de lombriz?",
    respuesta: "El humus de lombriz es un abono orgánico 100% natural, producido por la digestión de materia orgánica por parte de lombrices californianas. Es rico en nutrientes y microorganismos beneficiosos para la tierra y tus plantas."
  },
  {
    pregunta: "¿Cuáles son los beneficios de usar humus sólido?",
    respuesta: "Mejora la estructura del suelo, aumenta la retención de agua, aporta nutrientes de rápida y lenta liberación, y fortalece las raíces de las plantas, haciéndolas más resistentes a plagas y enfermedades."
  },
  {
    pregunta: "¿Cómo se aplica el humus sólido?",
    respuesta: "Se puede mezclar directamente con la tierra al momento de sembrar (hasta un 20% de la mezcla), o esparcir sobre la superficie alrededor del tallo de la planta y luego regar para que los nutrientes penetren en el suelo."
  },
  {
    pregunta: "¿Cuál es la diferencia entre el humus sólido y el humus líquido?",
    respuesta: "El sólido se usa para aportar estructura, volumen y materia orgánica a la tierra a largo plazo, mientras que el humus líquido es un fertilizante y vigorizante foliar de acción rápida que revitaliza las plantas enfermas o débiles en poco tiempo."
  },
  {
    pregunta: "¿Es seguro para usar con mascotas y niños?",
    respuesta: "¡Totalmente seguro! Al ser 100% orgánico y natural, nuestro humus no genera olores desagradables, ni contiene químicos tóxicos ni pesticidas. Es perfecto para jardines donde conviven niños y mascotas."
  },
  {
    pregunta: "Si hago un pedido grande, ¿el envío llega a mi estado?",
    respuesta: "Sí, distribuimos y acompañamos a productores principalmente en Portuguesa, pero hacemos envíos y cubrimos pedidos a nivel nacional. Si deseas saber los costos de envío para tu ubicación específica, te invitamos a contactarnos por WhatsApp."
  }
];

const Información = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Preguntas Frecuentes</h1>
      <div className={styles.faqList}>
        {PREGUNTAS_FRECUENTES.map((item, index) => (
          <details key={index} className={styles.faqItem}>
            <summary className={styles.faqQuestion}>
              <span className={styles.faqQuestionText}>{item.pregunta}</span>
              <span className={styles.icon}></span>
            </summary>
            <div className={styles.faqAnswerContainer}>
              <p className={styles.faqAnswer}>{item.respuesta}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export default Información;