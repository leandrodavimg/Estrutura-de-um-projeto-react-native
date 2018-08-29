export const Types = {
    ADD_REQUEST: 'sample/ADD_REQUEST',
  };
  
  const initialState = {
    data: [],
    loading: false,
    errorOnAdd: null,
    carregou: false,
  };
  
  export default function sample(state = initialState, action) {
    switch (action.type) {
      case Types.ADD_REQUEST:
        return { ...state, loading: true };
      default:
        return state;
    }
  }
  
  export const Creators = {
    sampleRequest: user => ({
      type: Types.ADD_REQUEST,
      payload: {
        user,
      },
    }),
  };
  