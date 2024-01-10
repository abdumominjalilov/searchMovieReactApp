import { createContext, useReducer } from "react"

const initialState = {
    data: [],
    term: '',
    filter: 'all',
    name: '',
    viewer: '',
}
export const Contex = createContext()

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'GET_DATA':
            return { ...state, data: payload }

        case 'ADD_DATA':
            if (state.name === '' || state.viewer === '') {
                alert("Iltimos Qatorlarni To'ldiring")
                console.log('alert');
            } else {
                state.data.map((d) => {
                    if (d.id === payload) {
                        console.log('teng');
                    } else {
                        const at = { 'id': state.data.length + 1, 'name': state.name, 'viewer': Number(state.viewer), 'favorite': false }
                        return {
                            ...state,
                            data: [...state.data, at],
                            name: '',
                            viewer: '',
                        }
                    }
                })
            }
            return [...state]

        case 'ON_DELETE':
            const deleteArr = state.data.filter(c => c.id !== payload)
            return { ...state, data: deleteArr }
        case 'SET_TERM_HANDLER':
            return { ...state, term: payload }

        case 'SET_BTN_FILTER':
            return { ...state, filter: payload }

        case 'ONSPAN':
            const dt = state.data.map(d => {
                if (d.id === payload) {
                    return { ...d, favorite: !d.favorite }
                }
                return d
            })
            return { ...state, data: dt }

        case 'ONLIKE':
            const dts = state.data.map(d => {
                if (d.id === payload) {
                    return { ...d, like: !d.like }
                }
                return d
            })
            return { ...state, data: dts }


        case 'ONCHANGE':
            if (e.target.name === 'formText') {
                setName(e.target.value)
              }
              if (e.target.name === 'formNum') {
                setViewer(e.target.value)
          
          
              }

        default:
            return { state }
    }
}


const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return <Contex.Provider value={{ state, dispatch }}>{children}</Contex.Provider>

}

export default Provider