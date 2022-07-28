


// Search Users
export const searchUsers = async function(text){
  //setLoading();

  const params = new URLSearchParams({
    q : text
  })



  const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
    headers:{
      Authorization: `token ${ process.env.REACT_APP_GITHUB_TOKEN}`
    }
  })
  const {items}= await response.json();
  


  return items

}




// Get User
export const getUser = async function(login){


  const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
    headers:{
      Authorization: `token ${ process.env.REACT_APP_GITHUB_TOKEN}`
    }
  })

   const data = await response.json();
    
   
 
    return data

}





// Get Repos
export const getRepos= async function(login){


  const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`, {
    headers:{
      Authorization: `token ${ process.env.REACT_APP_GITHUB_TOKEN}`
    }
  })

    const data = await response.json();
  
  
  return data

}


