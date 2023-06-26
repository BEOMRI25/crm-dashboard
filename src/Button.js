import ButtonIcon from "./ButtonIcon";

export default function Button({ level, icon }) {
    return (
        <button className={`button ${level}`}>
                <ButtonIcon icon={icon}/>
        </button>
    )
}