const miMazo = [
    {id:0, imagen:'img/Piscis.png', nombre:'Piscis', descr:'Piscis es un signo mutable y de agua, también es el último signo del zodiaco, precisamente por eso, es el más rico y complejo de todos. Sensible ante el sufrimiento de los demás, responde con buena voluntad y ganas de ayudar. No le gusta sentirse preso y ni respeta las convenciones, así, por las buenas, aunque tampoco tiende a luchar contra lo establecido, sencillamente, discurre por otro lado.',  puntos:100},
   
    {id:1, imagen:'img/Aries.png', nombre:'Aries', descr:'Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego; también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación. Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.' , puntos:50 },
   
    {id:2, imagen:'img/Tauro.png', nombre:'Tauro', descr:'Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra. La proyección del Sol en su nacimiento suele influir para que sean personas firmes, decididas y constantes en varios sentidos. También adoran sentir seguridad, por eso la buscan tanto, es como una necesidad constante en sus vidas.', puntos:35},
   
    {id:3, imagen:'img/Geminis.png', nombre:'Geminis', descr:'Géminis es un signo mutable que forma parte del elemento aire; como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. Su distintivo común es la comunicación y el ingenio.', puntos:70},
   
    {id:4, imagen:'img/Cancer.png', nombre:'Cancer', descr:'Cáncer es un signo cardinal y comprendido dentro de los signos de agua. De los signos zodiacales, su carácter es el menos claro; puede ser desde retraído, insociable y pelma, hasta deslumbrante, atractivo y admirado por los demás. A veces es demasiado soñador, por eso equivoca el mundo real con la utopía que ha construido en su cabeza: el refugio de las fantasías que adora.', puntos:950},
   
    {id:5, imagen:'img/Leo.png', nombre:'Leo', descr:'El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónde quiere llegar y nada ni nadie podrá evitarlo. En contrapartida, sus puntos negativos pueden ser tantos como las virtudes que tiene: vanidad, egocentrismo, arrogancia, impostura y un genio de mil demonios, entre otros defectos.', puntos:250},
   
    {id:6, imagen:'img/Virgo.png', nombre:'Virgo', descr:'Virgo es un signo mutable y de tierra; representado por una virgen, es un signo caracterizado por su espíritu crítico, precisión, reserva, paciencia y convencionalismo. También es lógico, metódico y aplicado, le gusta aprender y es capaz de analizar las situaciones más complejas con una claridad pasmosa.', puntos:555},
   
    {id:7, imagen:'img/Libra.png', nombre:'Libra', descr:'Libra es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco; tiene elegancia, encanto, diplomacia y buen gusto, ama la belleza, es muy curioso por naturaleza y odia los conflictos. Sus puntos negativos a veces son la frivolidad y un carácter voluble.', puntos:765},
   
    {id:8, imagen:'img/Escorpio.png', nombre:'Escorpio', descr:'Escorpio es un signo fijo y de agua; su potencia y energía emocional son únicas en todo el zodíaco. Tiene mucha imaginación e intuición, además de una gran capacidad para el análisis, fuerza de voluntad y firmeza, aunque también es muy sensible y emocional consigo mismo y con el entorno.'},
   
    {id:9, imagen:'img/Sagitario.png', nombre:'Sagitario', descr:'Sagitario pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco. También es versátil, adora las aventuras y buscar nuevos horizontes, ya que tiene una mente abierta a nuevas ideas y experiencias y mantiene una actitud decidida ante la adversidad; además, frecuentemente la suerte le acompaña.', puntos:560},
   
    {id:10, imagen:'img/Capricornio.png', nombre:'Capricornio', descr:'Capricornio es un signo cardinal y de tierra, y uno de los signos del zodíaco más constante, sólido y apacible. También se caracteriza por ser prudente y práctico en todos los asuntos que le conciernen. Sus aspectos más negativos tienden hacia el pesimismo, la fijeza y la melancolía.', puntos:121},
   
    {id:11, imagen:'img/Acuario.png', nombre:'Aquario', descr:'Acuario es un signo fijo y de aire, y sin duda, es el signo con mayor capacidad para la invención de toda la rueda zodiacal. Simpático, original y brillante, Acuario también es un signo muy humanitario, al mismo tiempo que independiente e intelectual. Sus puntos negativos se encuentran en su inestabilidad e imprecisión y en su tendencia a llevar la contraria casi por sistema.', puntos:450},
   
    {id:12, imagen:'img/Sol.png', nombre:'Sol', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:877},
   
    {id:13, imagen:'img/Luna.png', nombre:'Luna', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:547},
   
    {id:14, imagen:'img/Mercurio.png', nombre:'Mercurio', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:57},
   
    { id:15, imagen:'img/Marte.png', nombre:'Marte', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:9},
   
    {id:16, imagen:'img/Tierra.png', nombre:'Tierra', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:675},
   
    {id:17, imagen:'img/Jupiter.png', nombre:'Jupiter', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:5453},
   
    {id:18, imagen:'img/Urano.png', nombre:'Urano', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:3423},
   
    {id:19, imagen:'img/Neptuno.png', nombre:'Neptuno', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:56546},
   
    {id:20, imagen:'img/Plution.png', nombre:'Pluton', descr:'El Sol habla de núcleo real de la persona, el sí mismo interior, aquello que es de importancia central. También nos muestra la vitalidad general y la habilidad para auto afirmarse, describe la tonalidad general del ser que colorea todo lo demás. Signo equivalente: Leo', puntos:765},
   ];