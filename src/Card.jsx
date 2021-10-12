import './App.css';
import profile from './profile.jpg';
import post from './post.jpg';


function Card() {
  return (
    <div className="Card">
        <div className="container mt-5 mb-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="d-flex justify-content-between p-2 px-3">
                <div className="d-flex flex-row align-items-center my-2"> <img src={profile}  className="rounded-circle image-post" />
                  <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">Muhammad Rafay</span> <small className="text-primary">Developer</small> </div>
                </div>
                <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">20 mins</small> <i className="fa fa-ellipsis-h" /> </div>
              </div> <img src={post} className="img-fluid" />
              <div className="p-2">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart" /> <i className="fa fa-smile-o ml-2" /> </div>
                  <div className="d-flex flex-row muted-color"> <span>comments</span> <span className="ml-2">Share</span> </div>
                </div>
               
             
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="d-flex justify-content-between p-2 px-3">
                <div className="d-flex flex-row align-items-center my-2"> <img src={profile}  className="rounded-circle image-post" />
                  <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">Muhammad Rafay</span> <small className="text-primary">Developer</small> </div>
                </div>
                <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">25 mins</small> <i className="fa fa-ellipsis-h" /> </div>
              </div> <img src={post} className="img-fluid" />
              <div className="p-2">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart" /> <i className="fa fa-smile-o ml-2" /> </div>
                  <div className="d-flex flex-row muted-color"> <span>comments</span> <span className="ml-2">Share</span> </div>
                </div>
               
             
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="d-flex justify-content-between p-2 px-3">
                <div className="d-flex flex-row align-items-center my-2"> <img src={profile}  className="rounded-circle image-post" />
                  <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">Muhammad Rafay</span> <small className="text-primary">Developer</small> </div>
                </div>
                <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">30 mins</small> <i className="fa fa-ellipsis-h" /> </div>
              </div> <img src={post} className="img-fluid" />
              <div className="p-2">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row icons d-flex align-items-center"> <i className="fa fa-heart" /> <i className="fa fa-smile-o ml-2" /> </div>
                  <div className="d-flex flex-row muted-color"> <span>comments</span> <span className="ml-2">Share</span> </div>
                </div>
              
             
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    
  );
}

export default Card;
