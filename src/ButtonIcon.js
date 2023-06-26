export default function ButtonIcon({ icon }) {
    return (
        <svg>
            <use href={`./icons/${icon}.svg#${icon}`}></use>
        </svg>
        // <img src={`./icons/${icon}.svg`} alt="" />
    )
}
