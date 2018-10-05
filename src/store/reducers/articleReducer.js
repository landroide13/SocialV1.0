
const initState = {
  articles:[ 
    {id: '1', title: 'Traino App', content: 'App tracks you trainning and impruvments at GYM'},
    {id: '2', title: 'BlockChain', content: 'App tracks your stocks protfolio'},
    {id: '3', title: 'ES6', content: 'App share your dog or look after anybodys dog.'},
  ]
}

const articleReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_ARTICLE':
      console.log('Created Article', action.article)
  }
  return state;
}


export default articleReducer;