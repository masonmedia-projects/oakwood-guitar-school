<!-- original formspree form amended with Bootstrap classes -->

<form className="w-100 needs-validation" action="https://formspree.io/f/mleowjbk" method="POST">
    {/* name */}
    <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Name</label>
    <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
        <div className="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
        </div>
        </div>
    <input type="text" name="name" className="form-control" id="formName" placeholder="Name" required/>
    </div>

{/* email */}
  <label className="sr-only" htmlFor="formEmail">Email address</label>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
        </svg>
      </div>
    </div>
  <input type="email" className="form-control" id="formEmail" placeholder="Email address" name="_replyto" required/>
  </div>

  <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" type="text" name="message" placeholder="I'd love to book my first lesson!" rows="3" required></textarea>
  </div>
  {/* spam bot gotcha */}
  <input type="text" name="_gotcha" style={{display: 'none'}} />
  <input className="btn btn-dark" type="submit" value="Send" required/>
</form>


  // document.querySelector('#submit').addEventListener('click', function() {
        //     document.querySelector('#alert').classList.add('fade');
        // });