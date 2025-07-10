//rce
import React from 'react'

 const NewsItem=(props)=> {
   let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
          <div className="card">
            <div style={{display:'flex', justifyContent:'flex-end' , position:'absolute', right:'0'}}>
            <span className=' badge rounded-pill bg-danger z-1' >{source}</span>
            </div>
             <img src={!imageUrl? "https://imgs.search.brave.com/T9W3_25bnTE_4R1JQYsgZ9MaAJZGZmruivYIpFYnaFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9nbG9iYWwtbmV3/c181NjI2ODctMzk0/MS5qcGc_c2VtdD1h/aXNfaHlicmlk" : imageUrl} className="card-img-top" alt="..."/>
             <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className=' text-danger'>By { author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                 <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
         </div>
      </div>
    )
  }


export default NewsItem
