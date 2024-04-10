import {useState} from "react";

function Ciccio({nome, eta}){
    const [contatore, setContatore] = useState(0);
    function gestisciClick(){
        setContatore(contatore + 1);
    }
    return (
        <div>
            Ciao sono filippino {nome} {eta-10}
            <button onClick={gestisciClick}>{contatore}</button>
        </div>
    );
}
export default Ciccio;