import { useId, useState } from "react"

export default function SearchField() {
    const [searchTerm, setSearchTerm] = useState("")
    const id = useId()
    return (
        <label htmlFor={id}>
            <input 
                type="search" 
                placeholder="חיפוש..." 
                id={id} 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.currentTarget.value)}/>
            {searchTerm && <svg onClick={() => setSearchTerm("")} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M9.94524 0.739122C9.55472 0.348598 8.92155 0.348597 8.53103 0.739121L6.01373 3.25642L3.49643 0.739121C3.1059 0.348597 2.47274 0.348597 2.08222 0.739121L0.752855 2.06848C0.36233 2.45901 0.36233 3.09217 0.752854 3.4827L3.27015 6L0.752854 8.5173C0.36233 8.90782 0.36233 9.54099 0.752854 9.93151L2.08221 11.2609C2.47274 11.6514 3.1059 11.6514 3.49643 11.2609L6.01373 8.74357L8.53103 11.2609C8.92155 11.6514 9.55472 11.6514 9.94524 11.2609L11.2746 9.93151C11.6651 9.54099 11.6651 8.90782 11.2746 8.5173L8.7573 6L11.2746 3.4827C11.6651 3.09217 11.6651 2.45901 11.2746 2.06848L9.94524 0.739122Z" fill="currentColor"/>
            </svg>}
        </label>
    )
}