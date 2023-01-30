// clsx ist ein node packet was das zuweisen von Klassen erleichtert
// normalerweise:
// className={styles.style1 + ' ' + styles.style2 + ' ' + styles.style3}
// mit clsx:
// className={clsx(styles.style1, styles.style2, styles.style3)}
import clsx from "clsx";
import styles from "./Button.module.css";

// Hier wird die Komponente geschrieben
// Ist im Prinzip ne Funktion, die parameter sind alles was du ihr mitgeben willst
//
// children ist so ein Standard Parameter und zwar was sptäter zwischen den "HTML" Tags steht
// z.B. <Button>asdf</Button>
// hier wäre children = asdf
// ...otherProps nimmt einfach alles was du hier nicht definiert hast und setzt es trotzdem rein, z.B. hilfreich für aria labels etc
//
// die hier angegebenen Werte sind die Standardwerte wenn nichts mitgegeben wird
const Button = ({disabled = false, size = 'normal', children, ...otherProps}) => {
    const onClickHandler = (e) => {
        console.log('Button wurde geklickt');
    }
    
    return (
        <button 
            disabled={disabled}
            // className="" ist wie im normalen HTML class=""
            className={clsx(styles.button, styles[size], disabled && styles.disabled)}
            onClick={() => onClickHandler()}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export { Button }