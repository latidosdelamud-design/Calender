// js/data.js
const festividades = [
    {
        id: 1,
        nombre: "Yamta Pallay (Junta de Leña)",
        fecha: "2026-04-14",
        mes: 4,
        dia: 14,
        tipo: "preparatorio",
        descripcion: `
            <p>El <strong>Yamta Pallay</strong> representa una de las faenas comunales y tradiciones prehispánicas más vivas y profundas de la provincia de Luya. Sirve como la gran antesala logística de las fiestas patronales que ocurrirán meses después en septiembre.</p>
            <p>Durante esta jornada solidaria, las familias luyanas, comuneros y devotos se movilizan hacia los bosques locales para realizar el corte, transporte y recojo manual de grandes cargas de leña. Este esfuerzo físico conjunto es vital para abastecer los fogones de los mayordomos, asegurando el combustible necesario para cocinar los banquetes gratuitos y hornear miles de panes tradicionales.</p>
        `,
        imagen: "assets/images/festividades/01-yamta-pallay.webp",
        video: ""
    },
    {
        id: 2,
        nombre: "Ushpach-cuy",
        fecha: "2026-05-10",
        mes: 5,
        dia: 10,
        tipo: "preparatorio",
        descripcion: `
            <p>El <strong>Ushpach-cuy</strong> es un rito tradicional de agradecimiento y reciprocidad andina organizado directamente por la junta de mayordomos de la festividad.</p>
            <p>Esta celebración especial está dedicada exclusivamente a agasajar y honrar a todos los comuneros voluntarios que donaron su tiempo y fuerza física durante la extenuante jornada del Yamta Pallay. En este evento se estrechan los lazos de hermandad de la comunidad mediante la entrega formal de raciones de comida tradicional y muestras de profunda gratitud religiosa.</p>
        `,
        imagen: "", 
        video: ""
    },
    {
        id: 3,
        nombre: "Tinguchi-cuy",
        fecha: "2026-05-10",
        mes: 5,
        dia: 10,
        tipo: "preparatorio",
        descripcion: `
            <p>Celebrado en paralelo al agradecimiento de las faenas, el <strong>Tinguchi-cuy</strong> constituye el gran banquete comunitario que sella los compromisos organizativos de la fiesta patronal.</p>
            <p>Los barrios de Lámud se unen en una tarde llena de algarabía culinaria donde se comparte abundante comida típica, chicha de jora y bebidas locales de la región Amazonas. Toda la tarde está amenizada por agrupaciones musicales y bandas de viento tradicionales que tocan huaynos locales, marcando un ambiente festivo inolvidable para los pobladores.</p>
        `,
        imagen: "assets/images/festividades/03-tinguchi-cuy.jpg",
        video: ""
    },
    {
        id: 4,
        nombre: "Labrach Cuy (Labrado de Velas)",
        fecha: "2026-08-20",
        mes: 8,
        dia: 20,
        tipo: "preparatorio",
        descripcion: `
            <p>El <strong>Labrach Cuy</strong> es una hermosa y mística jornada artística-religiosa que reúne a maestros artesanos y fieles devotos en la residencia del mayordomo general.</p>
            <p>El objetivo principal es la fabricación manual y el moldeado de los imponentes cirios, velas y candelas de cera pura que iluminarán el altar de la Iglesia Matriz de Lámud durante las noches de novena. Muchas de estas piezas son cuidadosamente decoradas con sutiles relieves de motivos florales y alegorías sacras, representando mandas y promesas personales de los creyentes.</p>
        `,
        imagen: "assets/images/festividades/04-labrach-cuy-1.jpg",
        imagenes: ["assets/images/festividades/04-labrach-cuy-1.jpg","assets/images/festividades/04-labrach-cuy-2.jpg","assets/images/festividades/04-labrach-cuy-3.jpg"],
        video: ""
    },
    {
        id: 5,
        nombre: "El Amasijo",
        fecha: "2026-08-25",
        mes: 8,
        dia: 25,
        tipo: "preparatorio",
        descripcion: `
            <p>Hacia finales de agosto, Lámud se impregna de un olor dulce inconfundible. El <strong>Amasijo</strong> es la monumental labor de panadería comunal donde las familias enteras se congregan alrededor de antiguos hornos de piedra calentados a leña.</p>
            <p>Durante incansables turnos de día y noche, se hornean miles de deliciosas piezas de panadería luyana tradicionales como los legendarios <em>molletes</em>, <em>bocadillos</em> y pan de huevo. Estas canastas de pan artesanal se guardan con sumo cuidado y respeto para ser obsequiadas a los peregrinos locales e internacionales durante el mes jubilar.</p>
        `,
        imagen: "",
        video: ""
    },
    {
        id: 6,
        nombre: "Pachamama Raymi en Lámud Urco",
        fecha: "2026-08-31",
        mes: 8,
        dia: 31,
        tipo: "principal",
        descripcion: `
            <p>El <strong>Pachamama Raymi</strong> es una ceremonia mística de pago y profunda gratitud a la Madre Tierra, escenificada en la cima del emblemático e histórico cerro de <strong>Lámud Urco</strong>.</p>
            <p>A través de ofrendas sagradas compuestas por hojas de coca seleccionadas, chicha de jora e insumos agrícolas de las parcelas locales, la comunidad rinde tributo a la fertilidad de los suelos. Se elevan plegarias ancestrales para la llegada de lluvias óptimas y la protección divina de las cosechas del valle frente a las plagas.</p>
        `,
        imagen: "assets/images/festividades/06-pachamama-raymi.jpg",
        video: ""
    },
    {
        id: 7,
        nombre: "Albazo",
        fecha: "2026-09-01",
        mes: 9,
        dia: 1,
        tipo: "central",
        descripcion: `
            <p>¡El estallido oficial de la alegría de Lámud! El <strong>Albazo</strong> marca el inicio de los días centrales del mes festivo a tempranas horas de la madrugada.</p>
            <p>A las 5:00 a.m. en punto, el cielo de la ciudad se ilumina con el estruendo tradicional de los 21 camaretazos de víspera. De forma inmediata, las dinámicas bandas de música recorren las principales calles empedradas despertando a la población, quienes salen con entusiasmo de sus hogares para bailar en pasacalles espontáneos por todos los barrios.</p>
        `,
        imagen: "",
        video: "https://youtu.be/oG9BYJ3resQ"
    },
    {
        id: 8,
        nombre: "Vela Apay",
        fecha: "2026-09-01",
        mes: 9,
        dia: 1,
        tipo: "central",
        descripcion: `
            <p>El <strong>Vela Apay</strong> constituye una procesión nocturna de enorme valor estético, mística colectiva y fervor católico tradicional en la localidad.</p>
            <p>En este solemne desfile, largas columnas de mujeres luyanas visten elegantes trajes costumbristas de gala denominados <em>centilleras</em>. Caminan pausadamente cargando hermosos candelabros ornamentados y los imponentes cirios labrados a mano días atrás, avanzando con devoción hacia el templo principal para entregarlos formalmente como ofrendas luminosas al santo patrón.</p>
        `,
        imagen: "",
        video: ""
    },
    {
        id: 9,
        nombre: "El Hueche",
        fecha: "2026-09-05",
        mes: 9,
        dia: 5,
        tipo: "central",
        descripcion: `
            <p>El <strong>Hueche</strong> es una costumbre viva que pone de manifiesto el valor de la reciprocidad y el apoyo mutuo (herencia directa del Ayni andino) adaptado a las tradiciones católicas.</p>
            <p>Consiste en una gran movilización vecinal nocturna donde los pobladores y comitivas se dirigen en alegres comparsas hacia las casas de los mayordomos de la fiesta. Los visitantes acuden portando generosos obsequios, abastos culinarios y víveres para la cocina festiva; a cambio, los anfitriones los reciben con vasos de guarapo, platos típicos y bailes comunitarios.</p>
        `,
        imagen: "assets/images/festividades/09-hueche.jpg",
        video: ""
    },
    {
        id: 10,
        nombre: "Hatun Luya",
        fecha: "2026-09-13",
        mes: 9,
        dia: 13,
        tipo: "central",
        descripcion: `
            <p>El <strong>Hatun Luya</strong> (El Gran Luya) transforma por completo la hermosa Plaza de Armas de Lámud en un imponente escenario folclórico al aire libre.</p>
            <p>Este festival de gran envergadura congrega a coloridas delegaciones de danzantes, músicos y comunidades nativas provenientes de todos los rincones de la provincia de Luya. Los participantes desfilan luciendo vistosos trajes típicos tejidos de forma artesanal, compitiendo con orgullo en danzas costumbristas tradicionales que narran mitos e historias locales.</p>
        `,
        imagen: "assets/images/festividades/10-hatun-luya-1.jpg",
        imagenes: ["assets/images/festividades/10-hatun-luya-1.jpg","assets/images/festividades/10-hatun-luya-2.jpg","assets/images/festividades/10-hatun-luya-3.jpg"],
        video: ""
    },
    {
        id: 11,
        nombre: "Día Central - Señor de Gualamita",
        fecha: "2026-09-14",
        mes: 9,
        dia: 14,
        tipo: "central",
        descripcion: `
            <p>El día cumbre de la fe regional en honor al milagroso <strong>Señor de Gualamita</strong>, festividad religiosa declarada oficialmente como <strong>Patrimonio Cultural de la Nación</strong> por el Estado peruano.</p>
            <p>De acuerdo con las crónicas orales locales, en el periodo colonial una comitiva cusqueña transportaba la imponente ebanistería sacra del Cristo Nazareno hacia Ecuador. Sin embargo, al descansar en el paraje luyano de Gualamita, la escultura cobró un peso descomunal, manifestando su divina voluntad de arraigarse para siempre en estas tierras.</p>
            <p>En su día central, la bella imagen sale en una masiva y devota procesión montada sobre una majestuosa anda de plata, recorriendo calles artísticamente cubiertas con alfombras florales de aserrín multicolor.</p>
        `,
        imagen: "assets/images/festividades/11-senor-gualamita.jpg",
        video: ""
    },
    {
        id: 12,
        nombre: "Fiesta de la Cruz de Lamudurco",
        fecha: "2026-05-03",
        mes: 5,
        dia: 3,
        tipo: "principal",
        descripcion: `
            <p>Celebrada tradicionalmente cada 3 de mayo, coincidiendo con la extendida festividad católica de la invención de las sagradas cruces de mayo a nivel andino.</p>
            <p>Los fieles devotos emprenden un peregrinaje espiritual ascendente hacia las cumbres elevadas de <strong>Lámud Urco</strong>. El propósito principal es rendir culto, oración y reverencia comunal a la cruz protectora que resguarda el distrito, en una jornada dominada por misas solemnes, rezos colectivos y comidas compartidas con hermosas vistas panorámicas del paisaje local.</p>
        `,
        imagen: "assets/images/festividades/12-cruz-lamud-urco.jpg",
        video: ""
    },
    {
        id: 13,
        nombre: "Danza de Cuemal",
        fecha: "2026-05-03",
        mes: 5,
        dia: 3,
        tipo: "principal",
        descripcion: `
            <p>La emblemática <strong>Danza de Cuemal</strong> es una joya coreográfica de origen preínca nativa del cercano anexo de Cuemal, en la provincia de Luya.</p>
            <p>Conocida popularmente como la danza mística de las aves, los bailarines se ornamentan con vistosos plumajes multicolores y máscaras artesanales. A través de ágiles movimientos rítmicos sincronizados, imitan de forma perfecta el cortejo, el vuelo y las costumbres de las aves nativas de los bosques de neblina de Amazonas, configurando un maravilloso tributo a la biodiversidad local.</p>
        `,
        imagen: "assets/images/festividades/13-danza-cuemal.jpg",
        video: ""
    },
    {
        id: 14,
        nombre: "Aviay Cuy",
        fecha: "2026-10-05",
        mes: 10,
        dia: 5,
        tipo: "cierre",
        descripcion: `
            <p>El <strong>Aviay Cuy</strong> marca la culminación formal, nostálgica y sumamente respetuosa de todo el ciclo anual de festividades patronales de Lámud.</p>
            <p>En este importante acto ritual, la población y el comité eclesiástico rinden un sentido homenaje de despedida a los mayordomos salientes, reconociendo públicamente su enorme esfuerzo logístico y devoción económica. Asimismo, se realiza la entrega simbólica de las insignias festivas a los nuevos mayordomos entrantes, asegurando de esta forma la continuidad generacional de la tradición.</p>
        `,
        imagen: "assets/images/festividades/14-aviay-cuy.jpg",
        video: ""
    },
    {
        id: 15,
        nombre: "Festival de Pastorcitas de Lámud",
        fecha: "2026-12-20",
        mes: 12,
        dia: 20,
        tipo: "navidad",
        descripcion: `
            <p>Una de las costumbres navideñas más bellas y pintorescas del norte peruano. El <strong>Festival de Pastorcitas</strong> alegra por completo el mes de diciembre en Lámud.</p>
            <p>Grupos integrados por niñas y jóvenes de los distintos barrios recorren las calles entonando antiguos e históricos villancicos amazonenses. Desfilan vistiendo hermosas polleras andinas bordadas a mano, vistosos sombreros de paja y coloridas cintas, ejecutando alegres coreografías rítmicas frente a los nacimientos artesanales instalados en la ciudad.</p>
        `,
        imagen: "assets/images/festividades/15-pastorcitas.jpg",
        video: ""
    }
];