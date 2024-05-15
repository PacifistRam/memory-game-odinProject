
const Header = ({count}) => {
  return (
    <div className=" py-8 px-4 mb-8">
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold py-3 px-4">Memory Game</h1>
            <div className="py-3 px-4 text-xl">
                <p>Your Score:{count.length}</p>
                <p>High Score:</p>
            </div>
        </div>
            <p className="font-medium capitalize">get points for clicking on a card but don't click on anymore than once </p>
    </div>
  )
}

export default Header