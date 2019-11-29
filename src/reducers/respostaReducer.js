const initialState = {
  resposta: 'IM HERE',
}

export default (state = initialState, action) => {
  
  switch(action.type) {
    case 'SET_RESPOSTA':
      return {...state, resposta:action.payload.resposta};
      break;  
  }
  
  return state;
};