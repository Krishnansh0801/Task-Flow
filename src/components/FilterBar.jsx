function FilterBar({filter, setFilter}){
    return(
        <div className="filter-bar">

            {/* All button — filter 'all' set karega */}
            <button
            //agar filter all hai to active class lagao ye ek conditional class hoti h
            //agar condition false to eat five star do nothing
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
            >
                All
            </button>

            {/* Pending button */}
            <button
            className={filter === 'pending' ? 'active': ''}
            onClick={() => setFilter('pending')}
            >
                🟡 Pending
            </button>

            {/* In Progress button */}
            <button
                className={filter === 'inprogress' ? 'active' : ''}
                onClick={() => setFilter('inprogress')}
            >
                🔵 In Progress
            </button>

            {/* Done button */}
            <button
                className={filter === 'done' ? 'active' : ''}
                onClick={() => setFilter('done')}
            >
                🟢 Done
            </button>
        </div>
    )
}

export default FilterBar