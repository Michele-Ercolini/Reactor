import Card from "../Card/Card"

export default function ListGames({games}) {
    return (
        <div className="container">
            <div className="row">
                {games.map(game => {
                    return (
                        <div key={game.id} className="col-12 col-lg-6 col-xxl-4 mb-3">
                            <Card game={game} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}