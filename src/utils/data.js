
  const searchHandler = (arr, term) => {
    if (term === 0) {
      return arr
    }

    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  const filterHendler = (arr, filter) => {

    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'mostViewers':
        // return arr.filter(c => c.viewer  > 5000)/
        return arr.sort((a, b) => (a.viewer < b.viewer) ? 1 : -1)
      default:
        return arr
    }

  }

  export {searchHandler,filterHendler}