import React, { useState } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState<string>("");
    const { searchRepositories } = useAction()
    const { loading, data, error} = useTypedSelector(state => state.repository)
    const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term)
    }
 return <div>
    <form onSubmit={submitHandler}>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}></input>
        <button type="submit">Submit</button>
    </form>
    {error && <h3>error</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name,id) => {
            return <li key={id}>{name}</li> 
        })} 
  </div>
}

export default RepositoriesList