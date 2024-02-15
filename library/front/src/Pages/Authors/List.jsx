import { useContext } from "react"
import { Authors } from "../../Contexts/Authors"

export default function List() {

    const { authors } = useContext(Authors)

    return (
        <>
            {
                authors.map(author => (
                    <div key={author.id} className="card mt-2 " style={{
                        opacity: author.temp ? 0.5 : 1
                    }}>
                        <div className="card-header">
                            <h4>{author.name} {author.surname}</h4>
                        </div>
                        <div className="card-body">
                            <p>Nickname: {author.nickname}</p>
                            <p>Born: {new Date(author.born).toLocaleDateString()}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" disabled={author.temp ? true : false} className="btn btn-danger m-2">Delete</button>
                            <button type="button" disabled={author.temp ? true : false} className="btn btn-warning m-2">Edit</button>
                        </div>
                    </div>
                ))
            }

        </>
    )
}